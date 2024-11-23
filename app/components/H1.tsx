import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
}

export default function H1({ children, className }: Props) {
    return (
        <h1 className={`${className ?? ""} font-header`}>{children}</h1>
    );
}