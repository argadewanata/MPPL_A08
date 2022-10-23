export const GLOBAL_DATA_SERVER = {
  bola_x_pada_lapangan: 112,
  bola_y_pada_lapangan: 225,
  n_robot_aktif: 3,
  n_robot_dekat_bola: 1,
  n_robot_dapat_bola: 4,
  mux1: 0,
};

export const GLOBAL_DATA_UI = {
  command: 83,
};

export const SELF_ALONE_DATA_ROBOT = {
  is_active: false,
  ip: "",
};

export const PC2BS_DATA_ROBOT = {
  epoch: 0,
  pos_x: 9999,
  pos_y: 9999,
  theta: 9999,
  status_bola: 0,
  bola_x: 9999,
  bola_y: 9999,
};

export const BS2PC_DATA_ROBOT = {
  command: 83,
  bola_x_pada_lapangan: 0,
  bola_y_pada_lapangan: 0,
  mux1: 0,
};

export const COMMAND_ROBOT = {
  K: {
    text: "kick off",
    scope: "home",
    init: "S",
  },
  F: {
    text: "free kick",
    scope: "home",
    init: "S",
  },
  G: {
    text: "goal kick",
    scope: "home",
    init: "S",
  },
  C: {
    text: "corner kick",
    scope: "home",
    init: "S",
  },
  P: {
    text: "penalty",
    scope: "home",
    init: "S",
  },
  T: {
    text: "throw In",
    scope: "home",
    init: "S",
  },
  S: {
    text: "stop",
    scope: "all",
    init: "S",
  },
  s: {
    text: "start",
    scope: "all",
    init: "S",
  },
  N: {
    text: "drop ball",
    scope: "all",
    init: "S",
  },
  L: {
    text: "park",
    scope: "all",
    init: "S",
  },
  W: {
    text: "welcome",
    scope: "all",
    init: "S",
  },
  "#": {
    text: "calibration",
    scope: "all",
    init: "S",
  },
  k: {
    text: "kick off",
    scope: "away",
    init: "S",
  },
  f: {
    text: "free kick",
    scope: "away",
    init: "S",
  },
  g: {
    text: "goal kick",
    scope: "away",
    init: "S",
  },
  c: {
    text: "corner kick",
    scope: "away",
    init: "S",
  },
  p: {
    text: "penalty",
    scope: "away",
    init: "S",
  },
  t: {
    text: "throw In",
    scope: "away",
    init: "S",
  },
};

// INTERVAL SERVER UPDATE DATA IN MS
export const TIMER_SERVER_UPDATE_DATA_MS = 25;

// BS TO PC IN MS
export const TIMER_BS_TO_PC_MS = 50;
