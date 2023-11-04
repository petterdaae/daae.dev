type Props = {
  imageUrl: string;
  alt: string;
};

export default function AltImage({ imageUrl, alt }: Props) {
  return <img className="mt-8" src={imageUrl} alt={alt} />;
}
