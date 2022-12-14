import { io } from "socket.io-client";

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io("http://localhost:5173");
  }

  emitUIToServer(emitter, data) {
    const THAT = this;
    const EMITTER = emitter;
    const DATA = data;
    THAT.socket.emit(EMITTER, DATA);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
