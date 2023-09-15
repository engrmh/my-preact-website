import { Link } from "preact-router";
import "./SocialApp.css";

export default function SocialApp({ link, children, classInfo }) {
  return (
    <Link href={link} target="_blank" className={classInfo}>
      {children}
    </Link>
  );
}
