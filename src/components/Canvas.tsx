import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./CustomMesh";

function CustomCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <directionalLight position={[15, 10, 10]} />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default CustomCanvas;
