import Button from "~/components/Button";
import H1 from "~/components/H1";
import TextInput from "~/components/TextInput";

export default function Quiz() {
  return (
    <div className="p-8">
      <H1>Quiz</H1>
      <form>
        <TextInput placeholder="Skriv inn koden din her" />
        <Button>Bli med!</Button>
      </form>
    </div>
  );
}
