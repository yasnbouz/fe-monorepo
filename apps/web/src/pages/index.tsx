import { Button } from "ui";
import { Welcome } from "../components/Welcome";

export default function Web() {
  return (
    <div className="">
      <Welcome />
      <Button level="secondary">Hello</Button>
      <Button level="secondary">Hello</Button>
    </div>
  );
}
