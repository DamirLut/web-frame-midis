import React from 'react';
import { io } from 'socket.io-client';

const socket = io('https://ytt.iky.su');

export const SocketContext = React.createContext(socket);
