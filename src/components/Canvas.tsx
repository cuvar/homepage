import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";

function CustomCanvas() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-2, 0, 0]} />
      <Box position={[2, 0, 0]} />
    </Canvas>
  );
}
export default CustomCanvas;
