import Header from './components/Hedear';
import Sidebar from './components/Sidebar';

export default function MainPage() {
  return (
    <>
      <Sidebar />
      <div>
        <Header />
        <main></main>
      </div>
    </>
  );
}
