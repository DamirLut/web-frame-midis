import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/Auth';
import MainPage from './pages/Main';

function App() {
  return (
    <>
      <div className="background"></div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={'/auth'} element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
