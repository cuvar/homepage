import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./CustomMesh";

function CustomCanvas() {
  return (
    <div className="w-full">
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
