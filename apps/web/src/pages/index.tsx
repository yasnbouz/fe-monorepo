import { Button } from '@hu/ui';
import { Plus } from '@hu/icons';

export default function Web() {
  return (
    <div className="font-sans">
      <div>
        <Button variant="secondary" size="normal" icon={<Plus />}>
          dont touch me
        </Button>
      </div>
      <p className="text-xl leading-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="text-xl leading-6 capsize">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}
