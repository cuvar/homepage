import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./CustomMesh";

function CustomCanvas() {
  return (
    <div className="h-full w-full bg-green-300">
      <Canvas>
        <directionalLight position={[15, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default CustomCanvas;
