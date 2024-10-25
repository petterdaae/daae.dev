import { PropsWithChildren } from "react";

export default function H1({ children }: PropsWithChildren) {
    return (
        <h1 className="text-4xl pb-4 pt-16 sm:text-5xl">{children}</h1>
    );
}