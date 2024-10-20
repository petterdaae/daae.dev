type Props = {
  experience: {
    company: string;
    imageUrl: string;
    duration: string;
    keywords: string[];
    description: string;
  }[];
};

function DescriptionOnMobile(props: { description: string }) {
  return <p className="pt-1 inline sm:hidden">{props.description}</p>;
}

function DescriptionOnDesktop(props: { description: string }) {
  return <p className="pt-1 hidden sm:inline">{props.description}</p>;
}

function Logo(props: { company: string; imageUrl: string }) {
  return (
    <div>
      <div className="flex justify-center content-center overflow-hidden w-16 h-16 rounded-full">
        <img
          className="shrink-0 min-w-full max-w-full"
          alt={`${props.company} sin logo`}
          src={props.imageUrl}
        />
      </div>
    </div>
  );
}

function Duration(props: { duration: string }) {
  return (
    <span className="p-1 pl-2 pr-2 text-xs rounded-full border border-red">
      {props.duration}
    </span>
  );
}

function Keyword(props: { keyword: string }) {
  return (
    <span className="p-1 pl-2 pr-2 text-xs rounded-full border border-black ml-1 hidden sm:inline">
      {props.keyword}
    </span>
  );
}

function Company(props: { company: string }) {
  return <h3 className="text-xl">{props.company}</h3>;
}

export default function Experience({ experience }: Props) {
  return (
    <div className="flex flex-col mt-6">
      <div className="flex">
        <Logo company={experience.company} imageUrl={experience.imageUrl} />
        <div className="flex flex-col pl-4">
          <Company company={experience.company} />
          <div className="pt-1">
            <Duration duration={experience.duration} />
            {experience.keywords?.map((keyword) => (
              <Keyword key={keyword} keyword={keyword} />
            ))}
          </div>
          <DescriptionOnDesktop description={experience.description} />
        </div>
      </div>
      <DescriptionOnMobile description={experience.description} />
    </div>
  );
}
