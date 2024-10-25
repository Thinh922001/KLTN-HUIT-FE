// src/socket.ts
import { io, Socket } from 'socket.io-client';
import { BASE_URL } from 'utils/url';

// Tạo một instance duy nhất của socket kết nối tới WebSocket server
const socket: Socket = io(BASE_URL);

export default socket;
