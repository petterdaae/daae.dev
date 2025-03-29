import ReactPlayer from 'react-player'
import { ClientOnly } from "remix-utils/client-only";

type Props = {
    value: {
        url: string;
    }
};

export default function YouTube({ value }: Props) {
    return (
        <ClientOnly>
            {() => <div className="lg:ml-32 lg:mr-32 mt-16 mb-8"><ReactPlayer url={value.url} controls pip width="100%" className="aspect-video !h-auto" /></div>}
        </ClientOnly>
    );
}
