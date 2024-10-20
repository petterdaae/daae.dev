type Props = {
    value: {
        title: string;
        date: string;
        time: string;
        location: string;
        description: string;
    }
};

export default function Event({ value }: Props) {
    return (
        <div className="mt-10 p-4 bg-blue rounded-lg flex">
            <div>
                <h3 className="text-3xl">{value.title}</h3>
                <p className="mt-2 inline-block rounded-full border border-darkBlue pr-2 pl-2 mr-2">{value.date}</p>
                <p className="mt-2 inline-block rounded-full border border-darkBlue  pr-2 pl-2 mr-2">{value.time}</p>
                <p className="mt-2 inline-block rounded-full border border-darkBlue pr-2 pl-2 mr-2">{value.location}</p>
                <p className="mt-2">{value.description}</p>
                <p className="rounded mt-2 bg-darkBlue inline-block text-white rounded-full p-1 pr-3 pl-3">Kjøp billetter her</p>
            </div>
        </div>
    );
}
