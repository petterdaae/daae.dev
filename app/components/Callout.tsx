import { PortableText, PortableTextBlock } from "@portabletext/react";
import H2 from "./H2";

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
                        h2: H2,
                    }
                }}
            />
        </div>
    );
}

