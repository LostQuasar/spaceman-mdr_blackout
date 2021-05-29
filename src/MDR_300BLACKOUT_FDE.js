"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class MDR_300BLACKOUT_FDE {
    static onLoadMod() {        
        const itemId = "MDR_300BLACKOUT_FDE";
        const itemClone = "5c488a752e221602b412af63";
        const itemCategory = "5b5f78fc86f77409407a7f90";
        const itemFleaPrice = 57230;
        const itemLongName = "DT MDR .300 AAC Blackout Assault Rifle (FDE)";
        const itemShortName = "DT MDR .300";
        const itemDescription = "The product of the US-based company Desert Tech LLC MDR rifle is a modular, multi-caliber weapon with compact bullpup layout. Barrel lengths and calibers can be changed by the end user within minutes with a minimum amount of tools.";
        
        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Slots[3]._props.filters[0].Filter = ["MDR_300BLACKOUT_BARREL"];
        item._props.Chambers[0]._props.filters[0].Filter = DatabaseServer.tables.templates.items["5fbcc1d9016cce60e8341ab3"]._props.Chambers[0]._props.filters[0].Filter;
        item._props.ammoCaliber = DatabaseServer.tables.templates.items["5fbcc1d9016cce60e8341ab3"]._props.ammoCaliber;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        SpaceApi.CreateTraderAssort(itemId+"_ragfairOffer", itemId, "ragfair", itemFleaPrice, "RUB", 1);
    }
}
module.exports = MDR_300BLACKOUT_FDE;