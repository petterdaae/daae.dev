import { PropsWithChildren } from "react";

export default function H2({ children }: PropsWithChildren) {
    return (
        <h2 className="text-2xl sm:text-3xl pt-8">{children}</h2>
    );
}