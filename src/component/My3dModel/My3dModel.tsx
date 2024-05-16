import { PLYLoader } from "three/examples/jsm/Addons.js";
import myModel from "@/assets/3dmodels/myModel.ply";

export default function My3dModel() {
  const loader = new PLYLoader();
  loader.load(myModel, (geometry) => {
    console.log(geometry);
    // do something with the geometry
  });

  return <div>My3dModel</div>;
}
