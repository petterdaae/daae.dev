type Props = {
    value: {
        title: string;
        text: string;
        imageUrl: string;
        imageAlt: string;
        rightAlign: boolean;
    }
};

type TextProps = {
    title: string;
    text: string;
    className: string;
}

function Text({ title, text, className }: TextProps) {
    return (
        <div className={`basis-3/4 ${className}`}>
            <h3 className="text-3xl mb-4">{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default function TextWithImage({ value }: Props) {
    return (
        <div className="flex mt-8">
            {value.rightAlign && <Text title={value.title} text={value.text} className="mr-8" />}
            <div className="basis-1/4">
                <img className="rounded-lg" src={value.imageUrl} alt={value.imageAlt} />
            </div>
            {!value.rightAlign && <Text title={value.title} text={value.text} className="ml-8" />}
        </div>
    );
}
