/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Icosahedron: THREE.Mesh;
  };
  materials: {};
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  // const { nodes, materials } = useGLTF("/form.gltf") as GLTFResult;
  useFrame((state, delta) => {
    // @ts-ignore
    group.current.rotation.z += 0.03;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <directionalLight
        intensity={0.7}
        position={[200, 300, 300]}
        rotation={[-Math.PI / 4, 0.44, -0.4]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={100000}
        near={10}
        fov={70}
        position={[416.89, 220.87, -1382.89]}
        rotation={[-2.88, 0.24, 3.08]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosahedron.geometry}
        material={nodes.Icosahedron.material}
      /> */}
      <mesh visible position={[0, 0, -2]} rotation={[Math.PI / 2, 2, 2.15]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#AA7EFF" transparent />
      </mesh>
    </group>
  );
}

// useGLTF.preload("/form.gltf");
