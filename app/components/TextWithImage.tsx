import H2 from "./H2";

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

const imageBasis = `basis-1/4 sm:basis-2/5`;
const textBasis = `basis-3/4 sm:basis-3/5`;

function Text({ title, text, className }: TextProps) {
    return (
        <div className={`${textBasis} ${className} flex-row content-center`}>
            <h2 className="text-2xl sm:text-3xl">{title}</h2>
            <p>{text}</p>
        </div>
    )
}

function TextWithImageMobile({ value }: Props) {
    return (
        <div className="sm:hidden mt-16">
            <h2 className="text-2xl sm:text-3xl">{value.title}</h2>
            <div className="flex mt-4">
                {value.rightAlign && <p className={`${textBasis} mr-4`}>{value.text}</p>}
                <div className={imageBasis}>
                    <img className="rounded-lg" src={value.imageUrl} alt={value.imageAlt} />
                </div>
                {!value.rightAlign && <p className={`${textBasis} ml-4`}>{value.text}</p>}
            </div>
        </div>
    )
}

function TextWithImageDesktop({ value }: Props) {
    return (
        <div className="hidden sm:flex mt-16">
            {value.rightAlign && <Text title={value.title} text={value.text} className="mr-8" />}
            <div className={imageBasis}>
                <img className="rounded-lg" src={value.imageUrl} alt={value.imageAlt} />
            </div>
            {!value.rightAlign && <Text title={value.title} text={value.text} className="ml-8" />}
        </div>
    );
}

export default function TextWithImage({ value }: Props) {
    return <>
        <TextWithImageDesktop value={value} />
        <TextWithImageMobile value={value} />
    </>;
}
