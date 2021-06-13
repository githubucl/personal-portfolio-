import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Loader } from "@react-three/drei"
import Model from "./Model"
import Overlay from "./Overlay"


export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)



  return (
    <>
      <Canvas
        pixelRatio={Math.min(3, window.devicePixelRatio)}
        shadows
        onCreated={(state) => state.events.connect(overlay.current)}>
        <ambientLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model scroll={scroll}
            raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <Loader />
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  )
}
