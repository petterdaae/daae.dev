type Props = {
  code: string;
};

export default function CodeBlock({ code }: Props) {
  return (
    <pre className="mt-4 mb-4 p-2 bg-slate-200 border border-black border-solid">
      {code}
    </pre>
  );
}
