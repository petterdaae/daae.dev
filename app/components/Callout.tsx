import { PortableText, PortableTextBlock } from "@portabletext/react";

type Props = {
    value: {
        content: PortableTextBlock | PortableTextBlock[];
    }
};

export default function Callout({ value }: Props) {
    return (
        <div className="mt-10 p-4 bg-blue rounded-lg">
            <PortableText
                value={value.content}
                components={{
                    block: {
                        h2: ({ children }) => <h2 className="text-3xl">{children}</h2>,
                    }
                }}
            />
        </div>
    );
}

