import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Loader } from "@react-three/drei"
import { isMobile } from 'react-device-detect';
import Model from "./Model"
import Overlay from "./Overlay"


export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)



  return (
    <>
      <Canvas

        pixelRatio={[1, 2]}
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
      <Loader

        dataInterpolation={(p) => {
          return ` ${isMobile ? 'Better experience on PC' : `Loading ${p.toFixed(2)}%`}`
        }}

      />
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  )
}
