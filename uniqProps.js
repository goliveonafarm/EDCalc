var id = 0;
let uniqs = [];
const assWeapons = [];
const amaWeapons = [];
const barbArmors = [];
const druidArmor = [];
const necroArmor = [];
const paladinArmor = [];
const sorcWeapons = [];

const armorArmor = []
const axesWeapons = [];
const beltsArmor = [];
const bootsArmor = [];
const bowsWeapons = [];

const crossbowsWeapon = [];
const daggersWeapon = [];
const glovesArmor = [];
const headgearArmor = [];
const javelinsWeapon = [];

const macesWeapon = [];
const polearmsWeapon = [];
const sceptresWeapon = [];
const shieldsArmor = [];

const spearsWeapon = [];
const stavesWeapon = [];
const swordsWeapon = [];
const thorwingsWeapon = [];
const wandsWeapon = [];

assWeapons.itemClass = `Assassin Katars:`;
amaWeapons.itemClass = `Amazon Weapons:`;
barbArmors.itemClass = `Barbarian Helms:`;
druidArmor.itemClass = `Druid Pelts`;
necroArmor.itemClass = `Necromancer Shrunken Heads`;
paladinArmor.itemClass = `Paladin Shields`;
sorcWeapons.itemClass = `Sorceress Orbs`;

armorArmor.itemClass = `Armors`;
axesWeapons.itemClass = `Axes`;
beltsArmor.itemClass = `Belts`;
bootsArmor.itemClass = `Boots`;
bowsWeapons.itemClass = `Bows`;
crossbowsWeapon.itemClass = `Crossbows`;
daggersWeapon.itemClass = `Daggers`;
glovesArmor.itemClass = `Gloves`;
headgearArmor.itemClass = `Helms`;
javelinsWeapon.itemClass = `Javelins`;
macesWeapon.itemClass = `Maces`;
polearmsWeapon.itemClass = `Polearms`;
sceptresWeapon.itemClass = `Scepters`;
shieldsArmor.itemClass = `Shields`;
spearsWeapon.itemClass = `Spears`;
stavesWeapon.itemClass = `Staves`;
swordsWeapon.itemClass = `Swords`;
thorwingsWeapon.itemClass = `Throwing`;
wandsWeapon.itemClass = `Wands`;

class armor {
    constructor(name, base, baseDef, ed) {
        this.name = name;
        this.base = base;
        this.baseDef = baseDef;
        this.ed = ed;
        this.selectedDef = baseDef;
        this.type = null;
    }
}

class barbArmor extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        barbArmors[id] = this;
        this.id = id++;
    }
}

class weapon {
    constructor(name, base, minED, maxED) {
        this.name = name;
        this.base = base;
        this.minED = minED;
        this.maxED = maxED;
        this.type = null;
    }
}

class assassinWeapon extends weapon {
    constructor(name, base, minED, maxED) {
        super(name, base, minED, maxED)
        assWeapons[id] = this;
        this.id = id++;
    }
}


class amazonWeapon extends weapon {
    constructor(name, base, minED, maxED) {
        super(name, base, minED, maxED)
        amaWeapons[id] = this;
        this.id = id++;
    }
}

class uniqProp {
    constructor(attrName, min, max) {
        this.attrName = attrName;
        this.min = min;
        this.max = max;
        this.userValue = max;
        this.type = null;
        this.loot = true;
    }
}

class nonLootProp extends uniqProp{
    constructor(attrName, min, max){
        super(attrName, min, max);
        this.loot = false;
    }

}

class uniqNestProp extends uniqProp {
    constructor(type, attrName, min, max) {
        super(attrName, min, max);
        this.type = type;
    }
}

//#region Amazon
const stoneRaven = new amazonWeapon('Stoneraven', 'Matriarchal Spear', 316, 361);
stoneRaven.uniqProps = [
    new nonLootProp('Enhanced Damage %', 230, 280),
    new uniqProp('Defense', 400, 600),
    new uniqProp('All Resist', 30, 50),
    new uniqNestProp('Class Skill Tree', 'Amazon Javelin And Spear', 1, 2)
]
const lycandersFlank = new amazonWeapon('Lycander\'s Flank', 'Ceremonial Pike', 305, 353);
lycandersFlank.uniqProps = [
    new nonLootProp('Enhanced Damage %', 150, 200),
    new uniqProp('Life Steal', 5, 9)
]
const lycandersAim = new amazonWeapon('Lycander\'s Aim', 'Ceremonial Bow', 152, 173);
lycandersAim.uniqProps = [
    new nonLootProp('Enhanced Damage %', 150, 200),
    new uniqProp('Mana Steal', 5, 8)

]
const titans = new amazonWeapon('Titan\'s Revenge', 'Ceremonial Javelin', 185, 212);
titans.uniqProps = [
    new nonLootProp('Enhanced Damage %', 150, 200),
    new uniqProp('Life Steal', 5, 9)
]
const thunderstroke = new amazonWeapon('Thunderstroke', 'Matriarchal Javelin', 165, 198);
thunderstroke.uniqProps = [
    new nonLootProp('Enhanced Damage %', 150, 200),
    new uniqNestProp('Class Skill Tree', 'Amazon Javelin And Spear', 2, 4)
]
const bloodRavens = new amazonWeapon('Blood Raven\'s Charge', 'Matriarchal Bow', 131, 155);
bloodRavens.uniqProps = [
    new nonLootProp('Enhanced Damage %', 150, 200),
    new nonLootProp('Bonus Attack Rating %', 200, 300),
    new uniqNestProp('Class Skill Tree', 'Amazon Bow And Crossbow', 2, 4)
]
id = 0;
//#endregion

//#region Assassin
const shadowKiller = new assassinWeapon('Shadow Killer', 'Battle Cestus', 170, 201);
shadowKiller.uniqProps = [
    new nonLootProp('Enhanced Damage %', 170, 220),
    new nonLootProp('Mana after kill', 10, 15)
]
const bartucs = new assassinWeapon('Bartucs Cut-Throat', 'Greater Talons', 137, 155);
bartucs.uniqProps = [
    new nonLootProp('Enhanced Damage %', 150, 200),
    new uniqProp('Life Steal', 5, 9)
]
const firelizards = new assassinWeapon('Firelizards Talons', 'Feral Claws', 159, 196);
firelizards.uniqProps = [
    new nonLootProp('Enhanced Damage %', 200, 270),
    new uniqNestProp('Class Skill Tree', 'Assassin Martial Arts', 1, 3),
    new uniqNestProp('Skills', 'Wake of Inferno', 1, 2),
    new uniqNestProp('Skills', 'Wake of Fire', 1, 2),
    new uniqProp('Fire Resist', 40, 70)
]
const jadeTalon = new assassinWeapon('Jade Talon', 'Wrist Sword', 130, 153);
jadeTalon.uniqProps = [
    new nonLootProp('Enhanced Damage %', 190, 240),
    new uniqNestProp('Class Skill Tree', 'Assassin Martial Arts', 1, 2),
    new uniqNestProp('Class Skill Tree', 'Assassin Shadow Disciplines', 1, 2),
    new uniqProp('Mana Steal', 10, 15),
    new uniqProp('All Resist', 40, 55)
]
id = 0;
//#endregion

//#region Barbarian
const arreats = new barbArmor('Arreat\'s Face', 'Slayer Guard', 120, 200);
arreats.uniqProps = [
    new nonLootProp('Enhanced Defense %', 150, 200),
    new uniqProp('Life Steal', 3, 6),
]
const wolfhowl = new barbArmor('Wolfhowl', 'Fury Visor', 150, 150);
wolfhowl.uniqProps = [
    new nonLootProp('Enhanced Defense %', 120, 150),
    new uniqNestProp('Class Skill Tree', 'Barbarian Warcries', 2, 3),
    new uniqNestProp('Skills', 'Feral Rage', 3, 6),
    new uniqNestProp('Skills', 'Lycanthropy', 3, 6),
    new uniqNestProp('Skills', 'Werewolf', 3, 6),
    new uniqProp('Strength', 8, 15),
    new uniqProp('Dexterity', 8, 15),
    new uniqProp('Vitality', 8, 15)
]
const demonHorn = new barbArmor('Demonhorn\'s Edge', 'Destroyer Helm', 156, 160);
demonHorn.uniqProps = [
    new nonLootProp('Enhanced Defense %', 120, 160),
    new uniqProp('Life Steal', 3, 6),
    new uniqNestProp('Class Skill Tree', 'Barbarian Warcries', 1, 3),
    new uniqNestProp(`Class Skill Tree`, `Barbarian Combat Masteries`, 1, 3),
    new uniqNestProp(`Class Skill Tree`, `Barbarian Combat Skills`, 1, 3)
]

const halaberds = new barbArmor('Halaberds reign', 'Conqueror Crown', 159, 170);
halaberds.uniqProps = [
    new nonLootProp('Enhanced Defense %', 140, 170),
    new nonLootProp('Replenish Life', 15, 23),
    new uniqNestProp('Skills', 'Battle Command', 1, 2),
    new uniqNestProp('Skills', 'Battle Orders', 1, 2)
]
id = 0;
//#endregion

//#region Druid

//#endregion

//#region Necromancer
//#endregion

//#region Paladin
//#endregion

//#region Sorceress
//#endregion

//#region Armor
//#endregion

//#region Axes
//#endregion

//#region Belts
//#endregion

//#region Boots
//#endregion

//#region Bows
//#endregion

//#region Crossbows
//#endregion

//#region Daggers
//#endregion

//#region Gloves
//#endregion

//#region Helms
//#endregion

//#region Javelins
//#endregion

//#region Maces
//#endregion

//#region Polearms
//#endregion

//#region Scepters
//#endregion

//#region Shields
//#endregion

//#region Spears
//#endregion

//#region Staves
//#endregion

//#region Swords
//#endregion

//#region Throwing
//#endregion

//#region Wands
//#endregion

uniqs.push(amaWeapons, assWeapons, barbArmors, 
    //druidArmor, 
    //    necroArmor, paladinArmor, sorcWeapons, armorArmor, 
    //    axesWeapons, beltsArmor, bootsArmor, bowsWeapons,
    //    crossbowsWeapon, daggersWeapon, glovesArmor, headgearArmor, 
    //    javelinsWeapon, macesWeapon, polearmsWeapon, sceptresWeapon, 
    //    shieldsArmor, spearsWeapon, stavesWeapon, swordsWeapon, 
    //  thorwingsWeapon, wandsWeapon 
    );







export default uniqs;
