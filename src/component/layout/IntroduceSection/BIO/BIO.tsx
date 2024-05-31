import "./BIO.css";
import Image from "next/image";
import DialogueWindow from "@/component/organism/DialogueWindow/DialogueWindow";
import hongmingProtrait from "@/assets/images/HongmingPixelPortrait.webp";
import mobileTopIcons from "@/assets/icons/mobile-top-right-icons.webp";

interface BIOProps extends React.HTMLAttributes<HTMLDivElement> {
  hide?: boolean;
}

export default function BIO(props: BIOProps) {
  return (
    <div id="bio" className={`${props.hide ? "hide" : ""}`}>
      <div className="bio-container">
        <div className="top-icons-container">
          <p>
            {new Date().getHours()}:{new Date().getMinutes()}
          </p>
          <div>
            <Image
              className="top-icons-image"
              src={mobileTopIcons.src}
              alt=""
              width={168}
              height={168}
            />
          </div>
        </div>
        <h1 className="bio-title">BIO</h1>
        <div className="bio-image-container">
          <Image
            className="bio-image"
            src={hongmingProtrait.src}
            alt=""
            width={1024}
            height={1024}
          />
        </div>
        <DialogueWindow />
      </div>
    </div>
  );
}
