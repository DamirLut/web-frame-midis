import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Card from '@/components/Card';

import style from './style.module.scss';

export default function AuthPage() {
  return (
    <main>
      <Card className={style.page}>
        <Button>Auth</Button>
        
      </Card>
    </main>
  );
}
