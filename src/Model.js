/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from "three"
import React, { useRef, useEffect, useState } from "react"
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
// import { Raycaster } from "three"
export default function Model({ scroll, raycaster, ...props }) {
  const group = useRef()
  const t = useRef(0)
  const { nodes, materials, animations } = useGLTF("/map.glb")
  const { actions, mixer } = useAnimations(animations, group)
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    // if (hovered) group.current.getObjectByName(hovered).material.color.set("white")
    document.body.style.cursor = hovered ? "pointer" : "auto"
    if (hovered) {
      group.current.getObjectByName("button").children[1].material.color.set("white")
    } else {
      group.current.getObjectByName("button").children[1].material.color.set("#8BB8C2")
    }
    setTimeout(() => {
      document.querySelector("#section05").style.display = "none"
    }, 5000)
  }, [hovered])
  useEffect(() => {
    void actions["CameraAction.018"].play()
    actions.clampWhenFinished = true
  }, [])
  const onHover = (e) => {
    e.stopPropagation()
    setHovered(true)
  }
  const unHover = (e) => {
    e.stopPropagation()
    setHovered(null)
  }
  useFrame((state) => {
    const et = state.clock.elapsedTime

    group.current.children[4].scale.x = (0.1 * Math.sin(et) + 1) / 80
    group.current.children[4].scale.z = (0.1 * Math.sin(et) + 1) / 80

    t.current = THREE.MathUtils.lerp(t.current, actions["CameraAction.018"]._clip.duration * scroll.current, 0.05)
    // console.log(t.current);
    if (t.current >= 27.08333) {
      mixer.setTime(27.08333)
    } else if (t.current <= 0) {
      mixer.setTime(0)
    } else {
      mixer.setTime(t.current)
    }
    // console.log(t.current);

    group.current.children[0].children.forEach((child, index) => {
      // child.material.color.lerp(color.set(hovered === child.name ? "tomato" : "#202020").convertSRGBToLinear(), hovered ? 0.1 : 0.05)

      // child.position.y = Math.sin((et + index * 2000) / 2) / 10
      child.rotation.x = Math.sin((et + index * 2000) / 3) / 100
      child.rotation.y = Math.cos((et + index * 2000) / 2) / 100
      child.rotation.z = Math.sin((et + index * 2000) / 3) / 100
      // console.log(child);
    })
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Camera" position={[26.6486, 3.3578, 8.1735]} rotation={[1.284, -0.6609, 0.5121]}>
        <group name="Camera_Orientation" position={[0, 1.1153, 0]} rotation={[-0.0103, -0.001, 0.0024]}>
          <PerspectiveCamera makeDefault far={1000} near={0.1} fov={47.5974} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group name="Statue_of_Liberty" position={[25.384, 7.4225, 8.6914]} rotation={[Math.PI / 2, 0, 0]} scale={[0.0639, 0.0639, 0.0639]}>
        <group name="Statue" position={[1.5167, 1.7089, 118.0964]} scale={[0.5566, 0.5566, 0.5566]}>
          <mesh geometry={nodes.Mesh002.geometry} material={materials["Mat.004"]} />
          <mesh geometry={nodes.Mesh002_1.geometry} material={materials["Mat.006"]} />
        </group>
      </group>
      <group name="drug" position={[-7.2836, 2.946, 9.2494]} rotation={[-1.8758, 0.0508, -0.1994]} scale={[-0.489, 0.246, -0.489]}>
        <mesh geometry={nodes.coin003.geometry} material={materials["white.005"]} />
        <mesh geometry={nodes.coin003_1.geometry} material={materials["white.006"]} />
        <mesh geometry={nodes.coin003_2.geometry} material={materials["blue.002"]} />
        <mesh geometry={nodes.coin003_3.geometry} material={materials["Material.025"]} />
      </group>
      <group name="basketball" position={[-28.5501, 21.0682, 11.2462]} rotation={[Math.PI / 2, 0, 0]} scale={[0.0373, 0.0373, 0.0373]}>
        <mesh geometry={nodes.lowpolyPeopleSportsMan05002.geometry} material={materials["Default OBJ.003"]} />
        <mesh geometry={nodes.lowpolyPeopleSportsMan05002_1.geometry} material={materials["Material.026"]} />
        <mesh geometry={nodes.lowpolyPeopleSportsMan05002_2.geometry} material={materials["Material.027"]} />
        <mesh geometry={nodes.lowpolyPeopleSportsMan05002_3.geometry} material={materials["Material.028"]} />
      </group>
      <group
        name="button"
        onClick={() => window.open("mailto:" + "chrischen@mail.com" + "?subject=" + `Let's come out for a cup of coffee!` + "&body=" + "Hey Chris!")}
        onPointerOver={onHover}
        onPointerOut={unHover}
        position={[26.305, 3.7755, 8.8062]}
        rotation={[1.3527, -0.642, 0.5148]}
        scale={[0.0155, 0.0155, 0.0155]}>
        <mesh geometry={nodes.Text004.geometry} material={materials["Material.030"]} />
        <mesh geometry={nodes.Text004_1.geometry} material={materials["Material.031"]} />
      </group>
      <mesh
        geometry={nodes.world_of_frontend.geometry}
        material={materials["Material.029"]}
        position={[26.055, 3.9351, 8.91]}
        rotation={[1.5404, -0.5187, 0.6869]}
        scale={[0.0736, 0.0736, 0.0736]}
      />
      <group position={[26.3004, 3.836, 8.7593]} rotation={[1.3527, -0.6421, 0.5139]} scale={[0.0091, 0.0091, 0.0091]}>
        <mesh name="Text" geometry={nodes.Text.geometry} material={materials["Material.032"]} />
        <mesh geometry={nodes.Text_1.geometry} material={materials["Material.034"]} />
        <mesh geometry={nodes.Text_2.geometry} material={materials["Material.035"]} />
        <mesh geometry={nodes.Text_3.geometry} material={materials["Material.036"]} />
        <mesh geometry={nodes.Text_4.geometry} material={materials["Material.037"]} />
        <mesh geometry={nodes.Text_5.geometry} material={materials["Material.038"]} />
      </group>
      <group position={[8.0889, 2.6516, 8.4098]} rotation={[-1.8758, 0.0508, -0.1994]} scale={[-0.6485, 0.3262, -0.6485]}>
        <mesh geometry={nodes.coin004.geometry} material={materials["gold.003"]} />
        <mesh geometry={nodes.coin004_1.geometry} material={materials["green.002"]} />
        <mesh geometry={nodes.coin004_2.geometry} material={materials["green_dark.002"]} />
        <mesh geometry={nodes.coin004_3.geometry} material={materials["white.007"]} />
      </group>
    </group>
  )
}

useGLTF.preload("/map.glb")
