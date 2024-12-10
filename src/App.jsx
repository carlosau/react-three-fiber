import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Image } from '@react-three/drei';
import { useControls } from 'leva';

function AnimatedBox() {
  const boxRef = useRef()

  const { speed } = useControls({
    speed: {
      value: 0.005,
      min: 0.0,
      max: 0.03,
      step: 0.001,
    }
  })

  useFrame(() => {
    boxRef.current.rotation.x += speed;
    boxRef.current.rotation.y += speed;
    boxRef.current.rotation.z += speed;
  })
    

  return(
   
    <Image ref={boxRef} url='../public/logo-confsistemas-2025-us.png'>
      <boxGeometry args={[2, 2, 2]} />
    </Image>
  )
}

function App() {
  return (
    <div id='canvas-container'>
      <Canvas>
        <OrbitControls />
        <AnimatedBox />
      </Canvas>
    </div>
  )
}

export default App
