const BASESTATION = require("./class/Basestation");

const UDP_MULTICAST = BASESTATION.udp_multicast;
const PORT_MULTICAST = BASESTATION.port_multicast;
const HOST = BASESTATION.host;
const GROUP = BASESTATION.group;

const ROBOTS = BASESTATION.robot;
const {
  TIMER_SERVER_UPDATE_DATA_MS,
  TIMER_BS_TO_PC_MS,
} = require("./utils/init_data");

const WEB_SOCKET = BASESTATION.web_socket;
const EMITTER = {
  SERVER_TO_UI: "server2ui",
  UI_TO_SERVER: "ui2server",
};

// LISTENING SOCKET

UDP_MULTICAST.on("listening", function () {
  var address = UDP_MULTICAST.address();
  console.log(
    "UDP multicast listening on " + address.address + ":" + address.port
  );
  UDP_MULTICAST.setBroadcast(true);
  UDP_MULTICAST.setMulticastTTL(64);
  UDP_MULTICAST.addMembership(GROUP, HOST);
});

// BINDING

UDP_MULTICAST.bind(PORT_MULTICAST, HOST, () => {
  console.log(`udp multicast ${HOST} connected`);
});

// ON MESSAGE

UDP_MULTICAST.on("message", (message, remote) => {
  BASESTATION.readPC2BSData(message, true);
});

WEB_SOCKET.socket.on("connection", (status) => {
  status.on(EMITTER.UI_TO_SERVER, (item) => {
    BASESTATION.setDataFromUI(item);
    BASESTATION.setDataFromUI(item);
  });
});

// ---------- TACKLE DYNAMIC DATA ---------- //
// update data processing
// mux to every single robot
// copy global data for each robot
// send data to UI
setInterval(() => {
  BASESTATION.updateData();
}, TIMER_SERVER_UPDATE_DATA_MS);

// ---------- WRITE AND SEND DATA TO ROBOT ---------- //
setInterval(() => {
  try {
    const DATA_UI = WEB_SOCKET.data_ui;
    const temp_data = BASESTATION.writeBS2PCData();
    UDP_MULTICAST.send(
      temp_data.buffer_data,
      0,
      temp_data.byte_counter,
      PORT_MULTICAST,
      GROUP
    );
  } catch (e) {
    console.log("error write ", e);
  }
}, TIMER_BS_TO_PC_MS);
