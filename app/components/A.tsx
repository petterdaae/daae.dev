import { ReactNode, useContext } from "react"

type Props = {
    children: ReactNode;
    href: string;
    className?: string;
}

export default function A({ children, href, className }: Props) {
    return <A className={`${className ?? ""}`} href={href}>{children}</A>

}