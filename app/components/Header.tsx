type Props = {
  children: React.ReactNode;
};

export default function Header({ children }: Props) {
  return (
    <h1 className="uppercase font-bold text-4xl md:text-6xl">{children}</h1>
  );
}
