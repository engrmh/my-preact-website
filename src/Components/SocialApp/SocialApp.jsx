import {Link} from "preact-router";

export default function SocialApp({link , children}) {
    return (
        <Link href={link}>
            {children}
        </Link>
    )
}
