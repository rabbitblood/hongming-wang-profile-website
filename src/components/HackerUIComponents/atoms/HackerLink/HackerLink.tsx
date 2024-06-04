import Link from "next/link";
import style from "./HackerLink.module.css";

export interface HackerLinkProps {
  href: string;
  children: React.ReactNode;
  attributes?: any;
}

export default function HackerLink(props: HackerLinkProps) {
  return (
    <Link
      {...props.attributes}
      className={`${style["hacker-link"]}`}
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
