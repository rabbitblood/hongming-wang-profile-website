import Link from "next/link";
import "./HackerLink.css";

export interface HackerLinkProps {
  href: string;
  children: React.ReactNode;
  attributes?: any;
}

export default function HackerLink(props: HackerLinkProps) {
  return (
    <Link {...props.attributes} href={props.href}>
      {props.children}
    </Link>
  );
}
