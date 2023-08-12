type Props = {
  experiences: {
    company: string;
    imageUrl: string;
    duration: string;
    keywords: string[];
    description: string;
  }[];
};

export default function Experience({ experiences }: Props) {
  return (
    <div>
      <h3 className="text-2xl">Arbeidserfaring</h3>
      {experiences.map((experience) => (
        <div key={experience.company} className="flex flex-col mt-6">
          <div className="flex">
            <div>
              <div className="flex justify-center content-center overflow-hidden w-16 h-16 rounded-full">
                <img
                  className="shrink-0 min-w-full max-w-full"
                  alt={`${experience.company} sin logo`}
                  src={experience.imageUrl}
                />
              </div>
            </div>
            <div className="flex flex-col pl-4">
              <h3 className="text-xl">{experience.company}</h3>
              <div className="pt-1">
                <span className="p-1 pl-2 pr-2 text-xs rounded-full border border-red">
                  {experience.duration}
                </span>
                {experience.keywords?.map((keyword) => (
                  <span
                    key={keyword}
                    className="p-1 pl-2 pr-2 text-xs rounded-full border border-black ml-1"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="w-1/2 pt-1">{experience.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
