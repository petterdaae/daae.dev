export default function Button(props: any) {
  return (
    <button
      type="button"
      className="bg-rose-300 focus:ring-2 focus:outline-none focus:ring-rose-400 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      {...props}
    />
  );
}
