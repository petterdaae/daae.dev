import { ReactNode, useContext } from "react";

type Props = {
    children: ReactNode;
    className?: string;
}

export default function H2({ children, className }: Props) {
    return (
        <h2 className={`${className ?? ""} font-header`}>{children}</h2>
    );
}