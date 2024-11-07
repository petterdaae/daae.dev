import { PropsWithChildren, ReactNode } from "react";

type Props = {
    children: ReactNode;
    topMargin: number;
}

export default function H2({ children, topMargin = 8 }: Props) {
    return (
        <h2 className={`text-2xl sm:text-3xl mt-${topMargin}`}>{children}</h2>
    );
}