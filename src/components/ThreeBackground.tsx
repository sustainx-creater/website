'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ThreeBackgroundProps {
  sectionType?: 'hero' | 'screenshots' | 'default'
}

export default function ThreeBackground({ sectionType = 'default' }: ThreeBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create floating geometries based on section type
    const geometries: THREE.Mesh[] = []

    if (sectionType === 'hero') {
      // Hero section: Real 3D elements with depth and lighting
      
      // Create 3D floating orbs with proper materials
      for (let i = 0; i < 8; i++) {
        const geometry = new THREE.SphereGeometry(0.1 + Math.random() * 0.05, 16, 16)
        const material = new THREE.MeshPhongMaterial({
          color: i % 2 === 0 ? 0xF59E0B : 0x10B981,
          transparent: true,
          opacity: 0.6,
          shininess: 100,
          emissive: i % 2 === 0 ? 0x332200 : 0x003322,
          emissiveIntensity: 0.1
        })
        
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6
        )
        mesh.castShadow = true
        mesh.receiveShadow = true
        scene.add(mesh)
        geometries.push(mesh)
      }

      // Create floating 3D diamond/crystal shapes
      for (let i = 0; i < 4; i++) {
        const geometry = new THREE.OctahedronGeometry(0.08)
        const material = new THREE.MeshPhongMaterial({
          color: 0x6B7280,
          transparent: true,
          opacity: 0.4,
          shininess: 200,
          emissive: 0x111122,
          emissiveIntensity: 0.05
        })
        
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4
        )
        mesh.castShadow = true
        scene.add(mesh)
        geometries.push(mesh)
      }

      // Add proper lighting for 3D effect
      const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
      scene.add(ambientLight)
      
      const directionalLight = new THREE.DirectionalLight(0xF59E0B, 0.6)
      directionalLight.position.set(5, 5, 5)
      directionalLight.castShadow = true
      directionalLight.shadow.mapSize.width = 1024
      directionalLight.shadow.mapSize.height = 1024
      scene.add(directionalLight)

      const pointLight = new THREE.PointLight(0x10B981, 0.3, 10)
      pointLight.position.set(-3, 2, 3)
      scene.add(pointLight)

      // Add ambient particles
      const ambientParticleGeometry = new THREE.BufferGeometry()
      const ambientParticleCount = 100
      const ambientPositions = new Float32Array(ambientParticleCount * 3)

      for (let i = 0; i < ambientParticleCount * 3; i++) {
        ambientPositions[i] = (Math.random() - 0.5) * 20
      }

      ambientParticleGeometry.setAttribute('position', new THREE.BufferAttribute(ambientPositions, 3))
      
      const ambientParticleMaterial = new THREE.PointsMaterial({
        color: 0xF59E0B,
        size: 0.02,
        transparent: true,
        opacity: 0.6
      })

      const ambientParticles = new THREE.Points(ambientParticleGeometry, ambientParticleMaterial)
      scene.add(ambientParticles)
      geometries.push(ambientParticles as any)

    } else if (sectionType === 'screenshots') {
      // Screenshots section: Phone-like rectangles
      for (let i = 0; i < 8; i++) {
        const geometry = new THREE.PlaneGeometry(0.3, 0.6, 1, 1)
        const material = new THREE.MeshBasicMaterial({
          color: i % 3 === 0 ? 0xF59E0B : i % 3 === 1 ? 0x10B981 : 0x6B7280,
          transparent: true,
          opacity: 0.08,
          side: THREE.DoubleSide
        })
        
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 3
        )
        mesh.rotation.set(
          Math.random() * Math.PI * 0.3,
          Math.random() * Math.PI,
          Math.random() * Math.PI * 0.2
        )
        
        scene.add(mesh)
        geometries.push(mesh)
      }
    } else {
      // Default section: Simple floating elements
      for (let i = 0; i < 10; i++) {
        const geometry = new THREE.RingGeometry(0.1, 0.2, 8)
        const material = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xF59E0B : 0x10B981,
          transparent: true,
          opacity: 0.1,
          side: THREE.DoubleSide
        })
        
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 3
        )
        
        scene.add(mesh)
        geometries.push(mesh)
      }
    }

    // Animation loop - smooth 3D rotations and floating
    let time = 0
    const animate = () => {
      time += 0.005

      geometries.forEach((mesh, index) => {
        if (mesh.type === 'Mesh') {
          // Smooth 3D rotation
          mesh.rotation.x += 0.002 + index * 0.0005
          mesh.rotation.y += 0.003 + index * 0.0003
          mesh.rotation.z += 0.001
          
          // Gentle floating motion
          mesh.position.y += Math.sin(time + index * 0.5) * 0.001
          mesh.position.x += Math.cos(time + index * 0.3) * 0.0008
          
          // Subtle scaling effect
          const scale = 1 + Math.sin(time * 0.5 + index) * 0.05
          mesh.scale.set(scale, scale, scale)
        }
      })

      // Very subtle camera movement
      camera.position.x = Math.sin(time * 0.1) * 0.1
      camera.position.y = Math.cos(time * 0.08) * 0.05
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [sectionType])

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}
