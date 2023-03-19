import { Button } from '@hu/ui';
import { Welcome } from '../components/Welcome';

export default function Docs() {
  return (
    <div>
      <Welcome />
      <Button variant="secondary">submit</Button>{' '}
    </div>
  );
}
