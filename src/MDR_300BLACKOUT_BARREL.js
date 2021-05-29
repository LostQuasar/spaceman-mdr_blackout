"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class MDR_300BLACKOUT_BARREL {
    static onLoadMod() {
        const itemId = "MDR_300BLACKOUT_BARREL";
        const itemClone = "5dcbe9431e1f4616d354987e";
        const itemCategory = "5b5f75c686f774094242f19f";
        const itemFleaPrice = 49267;
        const itemLongName = "A barrel for MDR based weapons for .300 AAC Blackout ammo, 16 inch long.";
        const itemShortName = "16\" MDR 300";
        const itemDescription = "A barrel for MDR based weapons for .300 AAC Blackout ammo, 16 inch long.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        SpaceApi.CreateTraderAssort(itemId+"_ragfairOffer", itemId, "ragfair", itemFleaPrice, "RUB", 1);
    }
}
module.exports = MDR_300BLACKOUT_BARREL;