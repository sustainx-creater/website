'use client'

import React from 'react'

// TODO: Install Three.js dependencies to enable 3D mouse following effect
// Required packages: three, @react-three/fiber, @react-three/drei, @react-three/postprocessing
// 
// This component is currently disabled to prevent build errors.
// To enable it, run: npm install three @react-three/fiber @react-three/drei @react-three/postprocessing
// and then uncomment the implementation below.

export default function MouseFollowingEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* 3D Mouse Following Effect would render here once dependencies are installed */}
      <div className="opacity-20 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 w-full h-full" />
    </div>
  )
}

/* 
COMMENTED OUT UNTIL DEPENDENCIES ARE INSTALLED:

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { EffectComposer, Bloom, DotScreen } from '@react-three/postprocessing'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

const NUM_INSTANCES = 2000

interface Instance {
  position: THREE.Vector3
  scale: number
  scaleZ: number
  velocity: THREE.Vector3
  attraction: number
  vlimit: number
}

function InstancedBoxes() {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const lightRef = useRef<THREE.PointLight>(null!)
  const { pointer, camera } = useThree()
  
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const tempV = useMemo(() => new THREE.Vector3(), [])
  const target = useMemo(() => new THREE.Vector3(), [])

  // EXACT same as Vue.js - using MathUtils functions
  const instances = useMemo<Instance[]>(() => {
    return Array.from({ length: NUM_INSTANCES }, () => ({
      position: new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(100),
        THREE.MathUtils.randFloatSpread(100),
        THREE.MathUtils.randFloatSpread(100)
      ),
      scale: THREE.MathUtils.randFloat(0.4, 1.6),
      scaleZ: THREE.MathUtils.randFloat(0.4, 1.6),
      velocity: new THREE.Vector3(),
      attraction: THREE.MathUtils.randFloat(0.01, 0.04),
      vlimit: THREE.MathUtils.randFloat(0.05, 0.2)
    }))
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Update light position to follow mouse
    if (lightRef.current) {
      lightRef.current.position.x = pointer.x * 20
      lightRef.current.position.y = pointer.y * 20
      lightRef.current.position.z = 10
    }

    // Update instances
    instances.forEach((instance, i) => {
      // Mouse influence - EXACT same calculation as Vue.js
      target.set(pointer.x * 15, pointer.y * 15, 0)
      tempV.copy(target).sub(instance.position).multiplyScalar(instance.attraction)
      instance.velocity.add(tempV)

      // Limit velocity
      if (instance.velocity.length() > instance.vlimit) {
        instance.velocity.normalize().multiplyScalar(instance.vlimit)
      }

      // Update position
      instance.position.add(instance.velocity)

      // Floating animation
      instance.position.y += Math.sin(time + i * 0.1) * 0.02

      // Apply transformations
      dummy.position.copy(instance.position)
      dummy.scale.set(instance.scale, instance.scale, instance.scaleZ)
      dummy.updateMatrix()

      meshRef.current.setMatrixAt(i, dummy.matrix)
    })

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, NUM_INSTANCES]}>
        <boxGeometry args={[2, 2, 10]} />
        <meshStandardMaterial 
          transparent 
          opacity={0.9} 
          metalness={0.8} 
          roughness={0.5}
          color="#ffffff"
        />
      </instancedMesh>

      <pointLight 
        ref={lightRef}
        color="#0060ff" 
        intensity={0.5} 
      />
    </>
  )
}

function Scene() {
  return (
    <>
      <ambientLight color="#808080" />
      <pointLight color="#ff6000" />
      <pointLight color="#ff6000" intensity={0.5} position={[100, 0, 0]} />
      <pointLight color="#0000ff" intensity={0.5} position={[-100, 0, 0]} />
      
      <InstancedBoxes />

      <Text
        position={[0, 0, -5]}
        fontSize={3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        EZMove
        <meshPhongMaterial attach="material" />
      </Text>
    </>
  )
}

export default function MouseFollowingEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" style={{ height: '100vh', width: '100vw' }}>
      <Canvas
        camera={{ position: [0, 0, 30], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
        <EffectComposer>
          <Bloom intensity={0.5} />
          <DotScreen scale={0.5} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

*/
