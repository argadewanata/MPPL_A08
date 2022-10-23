const {
  PC2BS_DATA_ROBOT,
  SELF_ALONE_DATA_ROBOT,
} = require("../utils/init_data");

class Robot {
  // output
  // self alone data
  self_data = {
    ...SELF_ALONE_DATA_ROBOT,
  };
  // rx
  pc2bs_data = {
    ...PC2BS_DATA_ROBOT,
  };

  constructor(ip) {
    const THAT = this;
    THAT.self_data.ip = ip;
  }

  setisActive(is_active) {
    const THAT = this;
    THAT.self_data.is_active = is_active;
  }
  setPc2bsData(pc2bs_data) {
    const THAT = this;
    THAT.pc2bs_data = { ...pc2bs_data };
  }
  resetData() {
    const THAT = this;
    THAT.pc2bs_data = {
      ...PC2BS_DATA_ROBOT,
    };
  }
}

module.exports = Robot;
