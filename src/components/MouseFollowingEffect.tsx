'use client'

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
  const { pointer, viewport, camera } = useThree()
  
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const tempV = useMemo(() => new THREE.Vector3(), [])
  const target = useMemo(() => new THREE.Vector3(), [])

  // EXACT same as Vue.js - using MathUtils functions
  const instances = useMemo<Instance[]>(() => {
    const temp: Instance[] = []
    for (let i = 0; i < NUM_INSTANCES; i++) {
      temp.push({
        position: new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(200), // rndFS(200)
          THREE.MathUtils.randFloatSpread(200),
          THREE.MathUtils.randFloatSpread(200)
        ),
        scale: THREE.MathUtils.randFloat(0.2, 1), // rnd(0.2, 1)
        scaleZ: THREE.MathUtils.randFloat(0.1, 1), // rnd(0.1, 1)
        velocity: new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(2), // rndFS(2)
          THREE.MathUtils.randFloatSpread(2),
          THREE.MathUtils.randFloatSpread(2)
        ),
        attraction: 0.03 + THREE.MathUtils.randFloat(-0.01, 0.01), // 0.03 + rnd(-0.01, 0.01)
        vlimit: 1.2 + THREE.MathUtils.randFloat(-0.1, 0.1), // 1.2 + rnd(-0.1, 0.1)
      })
    }
    return temp
  }, [])

  useFrame(() => {
    if (!meshRef.current || !lightRef.current) return

    // EXACT same as Vue.js - pointer.positionV3
    const vector = new THREE.Vector3(pointer.x, pointer.y, 0.5)
    vector.unproject(camera)
    const dir = vector.sub(camera.position).normalize()
    const distance = -camera.position.z / dir.z
    target.copy(camera.position).add(dir.multiplyScalar(distance))

    // this.light.position.copy(this.target);
    lightRef.current.position.copy(target)

    // EXACT same animation as Vue.js
    for (let i = 0; i < NUM_INSTANCES; i++) {
      const instance = instances[i]
      
      // this.dummyV.copy(this.target).sub(position).normalize().multiplyScalar(attraction);
      tempV.copy(target).sub(instance.position).normalize().multiplyScalar(instance.attraction)
      // velocity.add(this.dummyV).clampScalar(-vlimit, vlimit);
      instance.velocity.add(tempV).clampScalar(-instance.vlimit, instance.vlimit)
      // position.add(velocity);
      instance.position.add(instance.velocity)

      // this.dummyO.position.copy(position);
      dummy.position.copy(instance.position)
      // this.dummyO.scale.set(scale, scale, scaleZ);
      dummy.scale.set(instance.scale, instance.scale, instance.scaleZ)
      // this.dummyO.lookAt(this.dummyV.copy(position).add(velocity));
      dummy.lookAt(tempV.copy(instance.position).add(instance.velocity))
      // this.dummyO.updateMatrix();
      dummy.updateMatrix()
      // this.imesh.setMatrixAt(i, this.dummyO.matrix);
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    
    // this.imesh.instanceMatrix.needsUpdate = true;
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
      {/* EXACT same lighting as Vue.js template */}
      <ambientLight color="#808080" />
      <pointLight color="#ff6000" />
      <pointLight color="#ff6000" intensity={0.5} position={[100, 0, 0]} />
      <pointLight color="#0000ff" intensity={0.5} position={[-100, 0, 0]} />
      
      <InstancedBoxes />
      
      {/* EXACT same text as Vue.js */}
      <Text
        fontSize={30}
        position={[0, 0, 0]}
        anchorX="center"
        anchorY="middle"
        castShadow
      >
        EZMove
        <meshPhongMaterial attach="material" />
      </Text>
    </>
  )
}

export default function MouseFollowingEffect() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-white">
      <Canvas
        camera={{ position: [0, 0, 200] }}
        gl={{ antialias: true, alpha: false }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <Scene />
        {/* EXACT same post-processing as Vue.js */}
        <EffectComposer>
          <Bloom 
            intensity={1} 
            luminanceThreshold={0.1} 
            luminanceSmoothing={0.9}
          />
          <DotScreen 
            scale={1} 
            angle={0}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
