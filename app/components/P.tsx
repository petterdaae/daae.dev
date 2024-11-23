import { ReactNode, useContext } from "react"

type Props = {
    children: ReactNode;
    className?: string;
}

export default function P({ children, className }: Props) {
    return <p className={`${className ?? ""}`}>{children}</p>
}