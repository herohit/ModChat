import {io} from 'socket.io-client';

const socket = io('http://localhost:3000'); // Replace  server URL

export default socket;