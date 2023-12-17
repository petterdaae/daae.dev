export default function TextInput(props: any) {
  console.log(props.className);
  return (
    <input
      type="text"
      id="first_name"
      className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
      {...props}
    />
  );
}
