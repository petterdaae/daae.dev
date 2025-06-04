import { ReactNode } from "react";
import { useProject } from "~/lib/project-context";

type Props = {
    children: ReactNode;
    className?: string;
}

export default function H1({ children, className }: Props) {
    const { isDaae } = useProject();
    const fontClass = isDaae ? "font-mono" : "font-header";
    return (
        <h1 className={`${fontClass} ${className ?? ""}`}>{children}</h1>
    );
}