import Image from "next/image";

import My3dModel from "../component/My3dModel/My3dModel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <My3dModel></My3dModel>
      </div>
    </main>
  );
}
