import Content from './components/Content';
import Header from './components/Hedear';
import Sidebar from './components/Sidebar';
import style from './style.module.scss';

export default function MainPage() {
  return (
    <div className={style.wrapper}>
      <Sidebar />
      <Header />
      <main className={style.main}>
        <Content />
      </main>
    </div>
  );
}
