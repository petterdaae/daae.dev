import { PortableText, PortableTextBlock } from "@portabletext/react";

type Props = {
    value: {
        content: PortableTextBlock | PortableTextBlock[];
    }
};

export default function Callout({ value }: Props) {
    return (
        <div className="mt-16 p-8 bg-blue rounded-lg">
            <PortableText
                value={value.content}
                components={{
                    block: {
                        h2: ({ children }) => <h2 className="text-2xl sm:text-3xl">{children}</h2>,
                    }
                }}
            />
        </div>
    );
}

