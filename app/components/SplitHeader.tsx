type Props = {
  value: {
    left: string;
    right: string;
  }
};

export default function SplitHeader({ value }: Props) {
  return (
    <h1 className="uppercase font-bold text-4xl md:text-6xl mb-8 md:mt-16 mt-8">
      <span className="text-black">{value.left}</span>
      <span className="text-red">{value.right}</span>
    </h1>
  );
}
