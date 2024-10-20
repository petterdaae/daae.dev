type Props = {
  value: {
    imageUrl: string;
    alt: string;
  }
};

export default function AltImage({ value }: Props) {
  return <img className="mt-8 rounded-lg" src={value.imageUrl} alt={value.alt} />;
}
