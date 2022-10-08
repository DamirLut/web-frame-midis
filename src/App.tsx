import React from 'react';
import { useSetRecoilState } from 'recoil';
import Chat from './components/Chat';
import Users from './components/Users';
import Video from './components/Video';
import { SocketContext } from './context/socket';
import { roomCreate } from './lib/api';
import { RoomAtom } from './store/RoomAtom';

function App() {
  const socket = React.useContext(SocketContext);
  const setRoomData = useSetRecoilState(RoomAtom);

  React.useEffect(() => {
    const connect = (roomId: string) => {
      const username = localStorage.getItem('username') || prompt('Username') || 'пользователь';
      localStorage.setItem('username', username);
      socket.emit('room-join', { roomId, username });
    };

    socket.on('connect', () => {
      const urlId = location.pathname.replace('/', '');
      if (urlId.length == 6) {
        connect(urlId);
      } else {
        roomCreate().then((data) => {
          connect(data.id);
          window.history.pushState('', '', '/' + data.id);
        });
      }
      socket.on('room-info', (data) => {
        setRoomData(data);
        console.log(data);
      });
      socket.on('error', (data) => console.warn(data));
    });
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <main>
        <Video />
        <aside>
          <Chat />
          <Users />
        </aside>
      </main>
    </SocketContext.Provider>
  );
}

export default App;
