import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    href: string;
    className?: string;
}

export default function A({ children, href, className }: Props) {
    return <a className={`${className ?? ""}`} href={href}>{children}</a>

}