"use strict";

const MDR_300BLACKOUT_BLACK = require("./src/MDR_300BLACKOUT_BLACK");
const MDR_300BLACKOUT_FDE = require("./src/MDR_300BLACKOUT_FDE");
const MDR_300BLACKOUT_BARREL = require("./src/MDR_300BLACKOUT_BARREL");

class main {
    constructor() {
        Logger.info(`Loading: spaceman-mdr_blackout`);

        ModLoader.onLoad["MDR_300BLACKOUT_BLACK"] = MDR_300BLACKOUT_BLACK.onLoadMod;
        ModLoader.onLoad["MDR_300BLACKOUT_FDE"] = MDR_300BLACKOUT_FDE.onLoadMod;
        ModLoader.onLoad["MDR_300BLACKOUT_BARREL"] = MDR_300BLACKOUT_BARREL.onLoadMod;
    }
}

module.exports.main = new main();
