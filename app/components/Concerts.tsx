import P from "./P";
import H2 from "./H2";

function Keyword(props: { keyword: string }) {
  return (
    <span className="p-1 pl-2 pr-2 text-sm rounded-full bg-blue border border-blue mr-2">
      {props.keyword}
    </span>
  );
}

function Concert({ concert }: { concert: any }) {
    const date = new Date(concert.date);
    const month = date.toLocaleDateString('default', { month: 'short' });
    const formattedDate = `${date.getDate()} ${month.toUpperCase()}`;
    return (
        <div className="flex sm:items-center sm:pb-8 pb-4">
            <div className="hidden sm:block flex-col bg-blue rounded-lg justify-items-center content-center text-center w-24 h-24 sm:w-32 sm:h-32 mr-4">
                <P>{concert.time}</P>
                <P className="text-l sm:text-xl">{formattedDate}</P>
            </div>

            <div className="flex-2 mr-4">
                <H2 className="text-xl font-bold pb-2">{concert.title}</H2>
                <P className="pb-2 sm:pb-0">{concert.description}</P>
                <div className="mb-2 sm:hidden">
                    <Keyword keyword={formattedDate} />
                    <Keyword keyword={concert.time} />
                    {!concert.hideButton && <a className="bg-blue rounded-full p-1 pl-3 pr-3 text-sm sm:hidden underline" href={concert.buttonLink}>{concert.buttonText}</a>}
                </div>
            </div>
            {!concert.hideButton && <a className="bg-blue rounded-full p-2 float-right mt-4 pl-4 pr-4 sm:inline hidden" href={concert.buttonLink}>{concert.buttonText}</a>}
        </div>
    );
}

export default function Concerts({ concerts }: { concerts: any }) {
    const upcommingConcerts = concerts
        .filter((concert: any) => new Date(concert.date) >= new Date())
        .sort((a: any, b: any) => b.date.localeCompare(a.date));

    const previousConcerts = concerts
        .filter((concert: any) => new Date(concert.date) < new Date())
        .sort((a: any, b: any) => b.date.localeCompare(a.date));

    return <div className="pt-8">
        {upcommingConcerts.length > 0 && <H2 className="text-2xl pb-4">KOMMENDE KONSERTER</H2>}
        {upcommingConcerts.map((concert: any) => <Concert concert={concert} key={concert._id} />)}
        {previousConcerts.length > 0 && <H2 className="text-2xl pb-4 mt-14">TIDELIGERE KONSERTER</H2>}
        {previousConcerts.map((concert: any) => <Concert concert={concert} key={concert._id} />)}
    </div>
}
