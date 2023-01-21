import { Button } from "ui";
import { ArrowDownSquare } from "icons";
import { Welcome } from "../components/Welcome";

export default function Web() {
  return (
    <div className="">
      <Welcome />
      <div>
        <Button level="primary">
          <span>
            <ArrowDownSquare />
          </span>
          Hello
        </Button>
        <Button level="secondary">Hello</Button>
      </div>
    </div>
  );
}
