import { Button } from "ui";
import { ArrowDownSquare } from "icons";
import { Welcome } from "../components/Welcome";

export default function Web() {
  return (
    <div className="font-sans">
      <Welcome />
      <div>
        <Button variant="primary" size={"normal"} leftIcon={ArrowDownSquare}>
          Hello
        </Button>
        <Button variant="secondary">Hello</Button>
      </div>
    </div>
  );
}
