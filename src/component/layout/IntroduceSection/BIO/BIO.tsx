import "./BIO.css";
import DialogueWindow from "@/component/organism/DialogueWindow/DialogueWindow";

interface BIOProps extends React.HTMLAttributes<HTMLDivElement> {
  hide?: boolean;
}

export default function BIO(props: BIOProps) {
  return (
    <div id="bio" className={`${props.hide ? "hide" : ""}`}>
      <div className="bio-container">
        <h1 className="bio-title">BIO</h1>
        <DialogueWindow />
      </div>
    </div>
  );
}
