const GLOBAL_DATA_SERVER = {
  bola_x_pada_lapangan: 112,
  bola_y_pada_lapangan: 225,
  n_robot_aktif: 3,
  n_robot_dekat_bola: 1,
  n_robot_dapat_bola: 4,
  mux1: 0,
};

const GLOBAL_DATA_UI = {
  command: 83,
};

const SELF_ALONE_DATA_ROBOT = {
  is_active: false,
  ip: "",
};

const PC2BS_DATA_ROBOT = {
  epoch: 0,
  pos_x: 9999,
  pos_y: 9999,
  theta: 9999,
  status_bola: 0,
  bola_x: 9999,
  bola_y: 9999,
};

const BS2PC_DATA_ROBOT = {
  command: 83,
  bola_x_pada_lapangan: 0,
  bola_y_pada_lapangan: 0,
  mux1: 0,
};

// INTERVAL SERVER UPDATE DATA IN MS
const TIMER_SERVER_UPDATE_DATA_MS = 25;

// BS TO PC IN MS
const TIMER_BS_TO_PC_MS = 50;

module.exports = {
  GLOBAL_DATA_SERVER,
  GLOBAL_DATA_UI,
  PC2BS_DATA_ROBOT,
  BS2PC_DATA_ROBOT,
  TIMER_SERVER_UPDATE_DATA_MS,
  TIMER_BS_TO_PC_MS,
  SELF_ALONE_DATA_ROBOT,
};
