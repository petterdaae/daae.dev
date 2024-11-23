import H2 from "./H2";
import P from "./H2";

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
            <H2 className="text-2xl sm:text-3xl">{title}</H2>
            <P className="pt-4">{text}</P>
        </div>
    )
}

function TextWithImageMobile({ value }: Props) {
    const float = value.rightAlign ? "right" : "left";
    const imagePadding = value.rightAlign ? "ml-6" : "mr-6";
    return (
        <div className="sm:hidden mt-16">
            <H2 className="text-2xl sm:text-3xl pb-4">{value.title}</H2>
            <div className="">
                <img className={`rounded-lg w-40 float-${float} ${imagePadding} mb-1`} src={value.imageUrl} alt={value.imageAlt} />
                <P>{value.text}</P>
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
