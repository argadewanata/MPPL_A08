<script>
import { useRobot, useSocketIO } from "@/stores/store.js";
export default {
  setup() {
    const ROBOT_STATE = useRobot();
    const SOCKETIO_STATE = useSocketIO();
    return {
      ROBOT_STATE,
      SOCKETIO_STATE,
    };
  },
  methods: {
    setCommand(command) {
      const ROBOT_STATE = useRobot();
      ROBOT_STATE.ui_to_server.command = command.charCodeAt(0);
    },
  },
  created() {
    const THAT = this;
    THAT.SOCKETIO_STATE.setupSocketConnection();
  },
  mounted() {
    const THAT = this;
    const EMITTER = THAT.SOCKETIO_STATE.emitter;
    THAT.SOCKETIO_STATE.socket.on(EMITTER.SERVER_TO_UI, (data) => {
      THAT.ROBOT_STATE.robot = [...data.robot];
      THAT.ROBOT_STATE.global_data_server = { ...data.global_data_server };
    });
    THAT.SOCKETIO_STATE.socket.on(EMITTER.REFBOX, (data) => {
      THAT.ROBOT_STATE.refbox = { ...data };
      console.log(data);
      THAT.robotCommand();
    });

    window.addEventListener("keypress", THAT.ROBOT_STATE.keyboardListener);
  },
  watch: {
    ROBOT_STATE: {
      handler() {
        const THAT = this;
        const EMITTER = THAT.SOCKETIO_STATE.emitter;
        const UI_TO_SERVER = THAT.ROBOT_STATE.ui_to_server;
        THAT.SOCKETIO_STATE.emitUIToServer(EMITTER.UI_TO_SERVER, UI_TO_SERVER);
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div>
    <h1>DATA ROBOTS</h1>
    <h2>Robot 1</h2>
    <p>{{ ROBOT_STATE.robot[0].self_data }}</p>
    <p>{{ ROBOT_STATE.robot[0].pc2bs_data }}</p>
    <h2>Robot 2</h2>
    <p>{{ ROBOT_STATE.robot[1].self_data }}</p>
    <p>{{ ROBOT_STATE.robot[1].pc2bs_data }}</p>
    <h2>Robot 3</h2>
    <p>{{ ROBOT_STATE.robot[2].self_data }}</p>
    <p>{{ ROBOT_STATE.robot[2].pc2bs_data }}</p>
    <h2>Robot 4</h2>
    <p>{{ ROBOT_STATE.robot[3].self_data }}</p>
    <p>{{ ROBOT_STATE.robot[3].pc2bs_data }}</p>
    <h2>Robot 5</h2>
    <p>{{ ROBOT_STATE.robot[4].self_data }}</p>
    <p>{{ ROBOT_STATE.robot[4].pc2bs_data }}</p>
    <div class="container-button">
      <button @click="setCommand('A')">A</button>
      <button @click="setCommand('D')">D</button>
      <button @click="setCommand('E')">E</button>
      <button @click="setCommand('F')">F</button>
    </div>
  </div>
</template>

<style scoped>
.container-button {
  margin-top: 20px;
  display: flex;
  gap: 5rem;
  justify-content: space-around;
}

button {
  width: 80px;
  height: 80px;
}
</style>
