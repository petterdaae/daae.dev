import P from "./P";
import A from "./A";
import H2 from "./H2";

type Props = {
    value: {
        title: string;
        date: string;
        time: string;
        location: string;
        description: string;
        buyTicketsLink: string;
    }
};

export default function Event({ value }: Props) {
    return (
        <div className="mt-16 p-8 bg-blue rounded-lg flex">
            <div>
                <H2 className="text-2xl sm:text-3xl">{value.title}</H2>
                <P className="mt-2 inline-block rounded-full border border-darkBlue pr-2 pl-2 mr-2">{value.date}</P>
                <P className="mt-2 inline-block rounded-full border border-darkBlue  pr-2 pl-2 mr-2">{value.time}</P>
                <P className="mt-2 inline-block rounded-full border border-darkBlue pr-2 pl-2 mr-2">{value.location}</P>
                <P className="mt-2">{value.description}</P>
                <A className="rounded mt-2 bg-darkBlue inline-block text-white rounded-full p-1 pr-3 pl-3" href={value.buyTicketsLink}>Kjøp billetter her</A>
            </div>
        </div>
    );
}
