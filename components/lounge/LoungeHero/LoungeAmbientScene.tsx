"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export function LoungeAmbientScene() {
  const { scene } = useThree();
  const particlesRef = useRef<THREE.Points | null>(null);
  const lightRingsRef = useRef<THREE.Group | null>(null);
  const dustParticlesRef = useRef<THREE.Points | null>(null);
  const timeRef = useRef(0);

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const count = 1500;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const alphas = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    const goldColor = new THREE.Color(0xc9a84c);
    const amberColor = new THREE.Color(0xd4912a);
    const champagneColor = new THREE.Color(0xf7e7ce);

    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.5;
      positions[i * 3 + 2] = radius * Math.cos(phi);

      sizes[i] = 0.5 + Math.random() * 2;
      alphas[i] = 0.1 + Math.random() * 0.4;

      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i * 3] = goldColor.r;
        colors[i * 3 + 1] = goldColor.g;
        colors[i * 3 + 2] = goldColor.b;
      } else if (colorChoice < 0.7) {
        colors[i * 3] = amberColor.r;
        colors[i * 3 + 1] = amberColor.g;
        colors[i * 3 + 2] = amberColor.b;
      } else {
        colors[i * 3] = champagneColor.r;
        colors[i * 3 + 1] = champagneColor.g;
        colors[i * 3 + 2] = champagneColor.b;
      }
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    return geometry;
  }, []);

  const particleMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
  }, []);

  const dustGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      sizes[i] = 0.02 + Math.random() * 0.05;

      velocities[i * 3] = (Math.random() - 0.5) * 0.0005;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.0002;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.0005;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));

    return geometry;
  }, []);

  const dustMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.05,
      color: 0xf7e7ce,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
  }, []);

  const lightRingGeometry = useMemo(() => {
    const geometry = new THREE.RingGeometry(3, 3.5, 64);
    return geometry;
  }, []);

  const lightRingMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: 0xc9a84c,
      transparent: true,
      opacity: 0.03,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
  }, []);

  useFrame((state, delta) => {
    timeRef.current += delta;

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.02;
      particlesRef.current.rotation.x += delta * 0.005;

      const positionAttr = particlesRef.current.geometry.getAttribute('position');
      if (positionAttr && 'array' in positionAttr) {
        const positions = positionAttr.array as Float32Array;
        const count = positions.length / 3;

        for (let i = 0; i < count; i++) {
          const idx = i * 3 + 1;
          positions[idx]! += Math.sin(timeRef.current * 0.5 + i * 0.1) * delta * 0.02;
        }
        positionAttr.needsUpdate = true;
      }
    }

    if (dustParticlesRef.current) {
      const positionAttr = dustParticlesRef.current.geometry.getAttribute('position');
      const velocityAttr = dustParticlesRef.current.geometry.getAttribute('velocity');
      
      if (positionAttr && velocityAttr && 'array' in positionAttr && 'array' in velocityAttr) {
        const positions = positionAttr.array as Float32Array;
        const velocities = velocityAttr.array as Float32Array;
        const count = positions.length / 3;

        for (let i = 0; i < count; i++) {
          positions[i * 3]! += velocities[i * 3]!;
          positions[i * 3 + 1]! += velocities[i * 3 + 1]!;
          positions[i * 3 + 2]! += velocities[i * 3 + 2]!;

          if (positions[i * 3]! > 10) positions[i * 3]! = -10;
          if (positions[i * 3]! < -10) positions[i * 3]! = 10;
          if (positions[i * 3 + 1]! > 5) positions[i * 3 + 1]! = -5;
          if (positions[i * 3 + 1]! < -5) positions[i * 3 + 1]! = 5;
          if (positions[i * 3 + 2]! > 10) positions[i * 3 + 2]! = -10;
          if (positions[i * 3 + 2]! < -10) positions[i * 3 + 2]! = 10;
        }
        positionAttr.needsUpdate = true;
      }
    }

    if (lightRingsRef.current) {
      lightRingsRef.current.children.forEach((ring, index) => {
        const mesh = ring as THREE.Mesh;
        mesh.rotation.x = -Math.PI / 2;
        mesh.rotation.z = timeRef.current * 0.05 * (index % 2 === 0 ? 1 : -1);
        mesh.scale.setScalar(1 + Math.sin(timeRef.current * 0.3 + index) * 0.1);
        const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
        if (material) material.opacity = 0.02 + Math.sin(timeRef.current * 0.5 + index) * 0.015;
      });
    }
  });

  return (
    <group>
      <group ref={dustParticlesRef}>
        <points geometry={dustGeometry} material={dustMaterial} />
      </group>

      <group ref={lightRingsRef}>
        <mesh geometry={lightRingGeometry} material={lightRingMaterial} position={[0, -0.5, -2]} />
        <mesh geometry={lightRingGeometry} material={lightRingMaterial} position={[0, -0.5, -2]} scale={1.5} />
        <mesh geometry={lightRingGeometry} material={lightRingMaterial} position={[0, -0.5, -2]} scale={2} />
      </group>

      <group ref={particlesRef}>
        <points geometry={particleGeometry} material={particleMaterial} />
      </group>

      <ambientLight color="#1a1714" intensity={0.5} />
      <directionalLight color="#c9a84c" intensity={0.3} position={[5, 10, 5]} />
      <directionalLight color="#d4912a" intensity={0.2} position={[-5, 5, -5]} />
      <pointLight color="#c9a84c" intensity={0.5} distance={20} decay={2} position={[0, 2, 0]} />
    </group>
  );
}

function group({ children }: { children: React.ReactNode }) {
  return <primitive object={new THREE.Group()}>{children}</primitive>;
}

function points({ geometry, material, ...props }: { geometry: THREE.BufferGeometry; material: THREE.PointsMaterial } & Record<string, unknown>) {
  return <primitive object={new THREE.Points(geometry, material)} {...props} />;
}

function mesh({ geometry, material, ...props }: { geometry: THREE.BufferGeometry; material: THREE.Material } & Record<string, unknown>) {
  return <primitive object={new THREE.Mesh(geometry, material)} {...props} />;
}

function ambientLight(props: { color?: string; intensity?: number } & Record<string, unknown>) {
  return <primitive object={new THREE.AmbientLight(props.color, props.intensity)} />;
}

function directionalLight(props: { color?: string; intensity?: number; position?: [number, number, number] } & Record<string, unknown>) {
  return <primitive object={new THREE.DirectionalLight(props.color, props.intensity)} position={props.position} />;
}

function pointLight(props: { color?: string; intensity?: number; distance?: number; decay?: number; position?: [number, number, number] } & Record<string, unknown>) {
  return <primitive object={new THREE.PointLight(props.color, props.intensity, props.distance, props.decay)} position={props.position} />;
}

function primitive({ object, children, ...props }: { object: THREE.Object3D; children?: React.ReactNode } & Record<string, unknown>) {
  const ref = (node: THREE.Object3D | null) => {
    if (node) {
      Object.assign(node, props);
    }
  };

  return (
    <group ref={ref as any}>
      {children}
    </group>
  );
}