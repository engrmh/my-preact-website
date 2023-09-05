import {Link} from "preact-router";
import './SocialApp.css'

export default function SocialApp({link , children}) {
    return (
        <Link href={link} target='_blank'>
            {children}
        </Link>
    )
}
