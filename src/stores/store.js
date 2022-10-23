import { io } from "socket.io-client";
import { defineStore } from "pinia";
import Config from "../config/setup.json";

import {
  PC2BS_DATA_ROBOT,
  SELF_ALONE_DATA_ROBOT,
  GLOBAL_DATA_SERVER,
  GLOBAL_DATA_UI,
  COMMAND_ROBOT,
} from "./utils";

export const useRobot = defineStore({
  id: "robot",
  state: () => ({
    robot: [
      {
        self_data: SELF_ALONE_DATA_ROBOT,
        pc2bs_data: PC2BS_DATA_ROBOT,
      },
      {
        self_data: SELF_ALONE_DATA_ROBOT,
        pc2bs_data: PC2BS_DATA_ROBOT,
      },
      {
        self_data: SELF_ALONE_DATA_ROBOT,
        pc2bs_data: PC2BS_DATA_ROBOT,
      },
      {
        self_data: SELF_ALONE_DATA_ROBOT,
        pc2bs_data: PC2BS_DATA_ROBOT,
      },
      {
        self_data: SELF_ALONE_DATA_ROBOT,
        pc2bs_data: PC2BS_DATA_ROBOT,
      },
    ],
    global_data_server: {
      ...GLOBAL_DATA_SERVER,
    },
    ui_to_server: {
      ...GLOBAL_DATA_UI,
    },
    command_translattor: {
      ...COMMAND_ROBOT,
    },
    ip_robot: [
      "192.16.80.101",
      "192.16.80.102",
      "192.16.80.103",
      "192.16.80.104",
      "192.16.80.105",
    ],
  }),
  actions: {
    setCommand(command) {
      const THAT = this;
      THAT.ui_to_server.command =
        THAT.command_translattor[command].init.charCodeAt(0);
      setTimeout(() => {
        THAT.ui_to_server.command = command.charCodeAt(0);
      }, 150);
    },
  },
});

export const useSocketIO = defineStore({
  id: "socket-io",
  state: () => ({
    socket: null,
    emitter: {
      SERVER_TO_UI: "server2ui",
      UI_TO_SERVER: "ui2server",
    },
  }),
  actions: {
    setupSocketConnection() {
      this.socket = io(`http://localhost:${Config.port_web_socket}`);
    },
    emitUIToServer(emitter, data) {
      const THAT = this;
      const EMITTER = emitter;
      const DATA = data;
      THAT.socket.emit(EMITTER, DATA);
    },
    disconnect() {
      if (this.socket) {
        this.socket.disconnect();
      }
    },
  },
});
