type Props = {
  left: string;
  right: string;
};

export default function SplitHeader({ left, right }: Props) {
  return (
    <h1 className="uppercase font-bold text-4xl md:text-6xl mb-8">
      <span className="text-black">{left}</span>
      <span className="text-red">{right}</span>
    </h1>
  );
}
