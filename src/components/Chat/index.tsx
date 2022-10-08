import React from 'react';
import { getRecoil } from 'recoil-nexus';
import { SocketContext } from '../../context/socket';
import { RandomID } from '../../lib/random';
import { RoomAtom } from '../../store/RoomAtom';
import Message, { MessageProps } from '../Message';
import style from './style.module.scss';

export default function Chat() {
  const socket = React.useContext(SocketContext);
  const [messages, setMessages] = React.useState<MessageProps[]>([]);
  const [message, setMessage] = React.useState('');
  const chatRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onMessage = (data: { text: string; id: string }) => {
      const room = getRecoil(RoomAtom);
      const user = room.users.find((user) => {
        return user.id === data.id;
      });
      if (user) {
        setMessages((prev) => [
          ...prev,
          {
            text: data.text,
            user: user,
            avatar: '',
          },
        ]);
      }
    };
    socket.on('room-incoming', onMessage);
    return () => {
      socket.off('room-incoming', onMessage);
    };
  }, []);

  React.useEffect(() => {
    chatRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    if (messages.length > 100) {
      messages.shift();
    }
  }, [messages.length]);

  const sendMessage = (event: React.KeyboardEvent) => {
    if (event.code === 'Enter') {
      if (message) {
        socket.emit('room-message', {
          text: message,
        });
        setMessage('');
      }
    }
  };

  ///@ts-ignore
  window.sendMessage = text=>socket.emit('room-message',{text});

  return (
    <div className={style['chat-container']}>
      <div className={style['message-container']}>
        {messages.map((message) => (
          <Message {...message} key={(RandomID())}/>
        ))}
        <div ref={chatRef} />
      </div>
      <div className={style['input-container']}>
        <input
          placeholder="Введите сообщение..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={sendMessage}
        />
      </div>
    </div>
  );
}
