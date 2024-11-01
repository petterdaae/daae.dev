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
                <h2 className="text-2xl sm:text-3xl pt-16">{value.title}</h2>
                <p className="mt-2 inline-block rounded-full border border-darkBlue pr-2 pl-2 mr-2">{value.date}</p>
                <p className="mt-2 inline-block rounded-full border border-darkBlue  pr-2 pl-2 mr-2">{value.time}</p>
                <p className="mt-2 inline-block rounded-full border border-darkBlue pr-2 pl-2 mr-2">{value.location}</p>
                <p className="mt-2">{value.description}</p>
                <a className="rounded mt-2 bg-darkBlue inline-block text-white rounded-full p-1 pr-3 pl-3" href={value.buyTicketsLink}>Kjøp billetter her</a>
            </div>
        </div>
    );
}
