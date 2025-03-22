import P from "./P";
import H2 from "./H2";

function Event({ concert }: { concert: any }) {
    const date = new Date(concert.date);
    const month = date.toLocaleDateString('default', { month: 'short' });
    const formattedDate = `${date.getDate()} ${month.toUpperCase()}`;
    return (
        <div className="flex sm:items-center pb-8">
            <div className="flex-col bg-blue rounded-lg justify-items-center content-center w-24 h-24 sm:w-32 sm:h-32 mr-4">
                <P>{concert.time}</P>
                <P className="text-l sm:text-xl">{formattedDate}</P>
            </div>

            <div className="flex-2 mr-4">
                <H2 className="text-xl font-bold pb-2">{concert.title}</H2>
                <P className="pb-4 sm:pb-0">{concert.description}</P>
                {!concert.hideButton && <a className="bg-blue rounded-full p-2 pl-4 pr-4 sm:hidden" href={concert.buttonLink}>{concert.buttonText}</a>}
            </div>
            {!concert.hideButton && <a className="bg-blue rounded-full p-2 float-right mt-4 pl-4 pr-4 sm:inline hidden" href={concert.buttonLink}>{concert.buttonText}</a>}
        </div>
    );
}

export default function Events({ concerts }: { concerts: any }) {
    const firsrtConcerts = concerts[1];

    const upcommingConcerts = concerts
        .filter((concert: any) => new Date(concert.date) >= new Date())
        .sort((a: any, b: any) => a.date.localCompare(b.date));


    const previousConcerts = concerts
        .filter((concert: any) => new Date(concert.date) < new Date())
        .sort((a: any, b: any) => b.date.localeCompare(a.date));

    console.log(previousConcerts);



    return <div>
        <H2 className="text-2xl pb-4">Kommende konserter</H2>
        {upcommingConcerts.map((concert: any) => <Event concert={concert} key={concert._id} />)}
        <H2 className="text-2xl pb-4">Tideligere konserter</H2>
        {previousConcerts.map((concert: any) => <Event concert={concert} key={concert._id} />)}
    </div>
}
