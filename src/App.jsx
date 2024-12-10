import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Image } from '@react-three/drei';


function AnimatedBox() {
  const boxRef = useRef()

  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.005;
    boxRef.current.rotation.z += 0.005;
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
