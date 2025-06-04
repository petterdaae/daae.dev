import { ReactNode } from "react"
import { useProject } from "~/lib/project-context";

type Props = {
    children: ReactNode;
    className?: string;
}

export default function P({ children, className }: Props) {
    const { isDaae } = useProject();
    const fontClass = isDaae ? "font-mono" : "";
    return <p className={`${fontClass} ${className ?? ""}`}>{children}</p>
}