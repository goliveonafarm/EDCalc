var id = 0;
let uniqs = [];
const assWeapons = [];
const amaWeapons = [];
const barbArmors = [];
const druidArmors = [];
const necroArmors = [];
const paladinArmors = [];
const sorcWeapons = [];

const armorArmors = []
const axesWeapons = [];
const beltsArmors = [];
const bootsArmors = [];
const bowsWeapons = [];

const crossbowsWeapons = [];
const daggersWeapons = [];
const glovesArmors = [];
const helmArmors = [];
const javelinsWeapons = [];

const macesWeapons = [];
const polearmsWeapons = [];
const sceptresWeapons = [];
const shieldsArmors = [];

const spearsWeapons = [];
const stavesWeapons = [];
const swordsWeapons = [];
const thorwingsWeapons = [];
const wandsWeapons = [];

const ringsArmors = [];
const amuletsArmors = [];

assWeapons.itemClass = `Assassin Katars`;
amaWeapons.itemClass = `Amazon Weapons`;
barbArmors.itemClass = `Barbarian Helms`;
druidArmors.itemClass = `Druid Pelts`;
necroArmors.itemClass = `Necromancer Shrunken Heads`;
paladinArmors.itemClass = `Paladin Shields`;
sorcWeapons.itemClass = `Sorceress Orbs`;

armorArmors.itemClass = `Armors`;
axesWeapons.itemClass = `Axes`;
beltsArmors.itemClass = `Belts`;
bootsArmors.itemClass = `Boots`;
bowsWeapons.itemClass = `Bows`;
crossbowsWeapons.itemClass = `Crossbows`;
daggersWeapons.itemClass = `Daggers`;
glovesArmors.itemClass = `Gloves`;
helmArmors.itemClass = `Helms`;
ringsArmors.itemClass = `Rings`
amuletsArmors.itemClass = `Amulets`;
javelinsWeapons.itemClass = `Javelins`;
macesWeapons.itemClass = `Maces`;
polearmsWeapons.itemClass = `Polearms`;
sceptresWeapons.itemClass = `Scepters`;
shieldsArmors.itemClass = `Shields`;
spearsWeapons.itemClass = `Spears`;
stavesWeapons.itemClass = `Staves`;
swordsWeapons.itemClass = `Swords`;
thorwingsWeapons.itemClass = `Throwing`;
wandsWeapons.itemClass = `Wands`;

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


class druidArmor extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        druidArmors[id] = this;
        this.id = id++;
    }
}

class necroArmor extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        necroArmors[id] = this;
        this.id = id++;
    }
}

class paladinArmor extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        paladinArmors[id] = this;
        this.id = id++;
    }
}

class armorArmor extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        armorArmors[id] = this;
        this.id = id++;
    }
}

class helmArmor extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        helmArmors[id] = this;
        this.id = id++
    }
}

class beltArmor extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        beltsArmors[id] = this;
        this.id = id++
    }
}

class bootArmor extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        bootsArmors[id] = this;
        this.id = id++
    }
}

class gloveArmor extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        glovesArmors[id] = this;
        this.id = id++
    }
}

class ringArmor extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        ringsArmors[id] = this;
        this.id = id++
    }
}

class amuletArmor extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        amuletsArmors[id] = this;
        this.id = id++
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
class sorcWeapon extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        sorcWeapons[id] = this;
        this.id = id++;
    }
}

class bowWeapon extends weapon {
    constructor(name, base, minED, maxED) {
        super(name, base, minED, maxED)
        bowsWeapons[id] = this;
        this.id = id++;
    }
}

class axeWeapon extends weapon {
    constructor(name, base, minED, maxED) {
        super(name, base, minED, maxED)
        axesWeapons[id] = this;
        this.id = id++;
    }
}

class wandWeapon extends armor {
    constructor(name, base, baseDef, ed) {
        super(name, base, baseDef, ed)
        wandsWeapons[id] = this;
        this.id = id++;
    }
}

class stavesWeapon extends weapon {
    constructor(name, base, minED, maxED) {
        super(name, base, minED, maxED)
        stavesWeapons[id] = this;
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

class nonLootProp extends uniqProp {
    constructor(attrName, min, max) {
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
const stoneRaven = new amazonWeapon('Stoneraven', 'Matriarchal Spear', 230, 280);
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
const lycandersAim = new amazonWeapon('Lycander\'s Aim', 'Ceremonial Bow', 150, 200);
lycandersAim.uniqProps = [
    new nonLootProp('Enhanced Damage %', 150, 200),
    new uniqProp('Mana Steal', 5, 8)

]
const titans = new amazonWeapon('Titan\'s Revenge', 'Ceremonial Javelin', 150, 200);
titans.uniqProps = [
    new nonLootProp('Enhanced Damage %', 150, 200),
    new uniqProp('Life Steal', 5, 9)
]
const thunderstroke = new amazonWeapon('Thunderstroke', 'Matriarchal Javelin', 150, 200);
thunderstroke.uniqProps = [
    new nonLootProp('Enhanced Damage %', 150, 200),
    new uniqNestProp('Class Skill Tree', 'Amazon Javelin And Spear', 2, 4)
]
const bloodRavens = new amazonWeapon('Blood Raven\'s Charge', 'Matriarchal Bow', 180, 230);
bloodRavens.uniqProps = [
    new nonLootProp('Enhanced Damage %', 180, 230),
    new nonLootProp('Bonus Attack Rating %', 200, 300),
    new uniqNestProp('Class Skill Tree', 'Amazon Bow And Crossbow', 2, 4)
]
id = 0;
//#endregion

//#region Assassin
const shadowKiller = new assassinWeapon('Shadow Killer', 'Battle Cestus', 170, 220);
shadowKiller.uniqProps = [
    new nonLootProp('Enhanced Damage %', 170, 220),
    new nonLootProp('Mana After Kill', 10, 15)
]
const bartucs = new assassinWeapon('Bartucs Cut-Throat', 'Greater Talons', 150, 200);
bartucs.uniqProps = [
    new nonLootProp('Enhanced Damage %', 150, 200),
    new uniqProp('Life Steal', 5, 9)
]
const firelizards = new assassinWeapon('Firelizards Talons', 'Feral Claws', 200, 270);
firelizards.uniqProps = [
    new nonLootProp('Enhanced Damage %', 200, 270),
    new uniqNestProp('Class Skill Tree', 'Assassin Martial Arts', 1, 3),
    new uniqNestProp('Skills', 'Wake of Inferno', 1, 2),
    new uniqNestProp('Skills', 'Wake of Fire', 1, 2),
    new uniqProp('Fire Resist', 40, 70)
]
const jadeTalon = new assassinWeapon('Jade Talon', 'Wrist Sword', 190, 240);
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
    new uniqProp('Life Steal', 3, 6)
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
const jalals = new druidArmor('Jalal\'s Mane', `Totemic Mask`, 98, 200);
jalals.uniqProps = [
    new nonLootProp('Enhanced Defense %', 150, 200)
]
const cerebus = new druidArmor('Cerebuss\' Bite', 'Blood Spirit', 145, 140);
cerebus.uniqProps = [
    new nonLootProp('Enhanced Defense %', 130, 140),
    new nonLootProp('Bonus Attack Rating %', 200, 300),
    new uniqProp('Life Steal', 7, 10),
    new uniqNestProp(`Class Skill Tree`, `Druid Shape Shifting`, 2, 4),
    new uniqNestProp('Skills', 'Feral Rage', 1, 2)
]
const ravenlore = new druidArmor('Ravenlore', 'Sky Spirit', 155, 150);
ravenlore.uniqProps = [
    new nonLootProp('Enhanced Defense %', 120, 150),
    new uniqProp('Enemy Fire Resist', -10, -20),
    new uniqProp('All Resist', 15, 25)
]
const spiritKeeper = new druidArmor('Spirit Keeper', 'Earth Spirit', 152, 190);
spiritKeeper.uniqProps = [
    new nonLootProp('Enhanced Defense %', 170, 190),
    new uniqNestProp('Class Skills', 'Druid', 1, 2),
    new uniqProp('Fire Resist', 30, 40),
    new uniqProp('Absorb Lightning Percent', 9, 14),
    new uniqProp('Absorb Cold Percent', 15, 25)
]
id = 0;
//#endregion

//#region Necromancer
const homunculus = new necroArmor('Homunculus', 'Hierophant Trophy', 70, 200);
homunculus.uniqProps = [
    new nonLootProp('Enhanced Defense %', 150, 200)
]
const darkforce = new necroArmor('Darkforce Spawn', 'Bloodlord Skull', 148, 180);
darkforce.uniqProps = [
    new nonLootProp('Enhanced Defense %', 140, 180),
    new uniqNestProp(`Class Skill Tree`, `Necromancer Summoning`, 1, 3),
    new uniqNestProp(`Class Skill Tree`, `Necromancer Poison and Bone Spells`, 1, 3),
    new uniqNestProp(`Class Skill Tree`, `Necromancer Curses`, 1, 3),

]
const boneflame = new necroArmor('Boneflame', 'Succubus Skull', 146, 150);
boneflame.uniqProps = [
    new nonLootProp('Enhanced Defense %', 120, 150),
    new uniqNestProp('Class Skills', 'Necromancer', 2, 3),
    new uniqProp('All Resist', 20, 30)
]
id = 0;
//#endregion

//#region Paladin
const zakarum = new paladinArmor('Herald of Zakarum', 'Gilded Shield', 168, 200);
zakarum.uniqProps = [
    new nonLootProp('Enhanced Defense %', 150, 200),

]
const almanegra = new paladinArmor('Alma Negra', 'Sacred Rondache', 164, 210);
almanegra.uniqProps = [
    new nonLootProp('Enhanced Defense %', 180, 210),
    new uniqNestProp('Class Skills', 'Paladin', 1, 2),
    new nonLootProp('Enhanced Damage %', 40, 75),
    new nonLootProp('Bonus Attack Rating %', 200, 300),
    new nonLootProp('Magic Damage Reduced By', 5, 9)
]
const dragonscale = new paladinArmor('Dragonscale', 'Zakarum', 193, 200);
dragonscale.uniqProps = [
    new nonLootProp('Enhanced Defense %', 170, 200),
    new uniqProp('Strength', 15, 20),
    new uniqProp('Absorb Fire Percent', 10, 20)
]
id = 0;
//#endregion

//#region Sorceress
const eschutas = new sorcWeapon('Eschuta\'s Temper', 'Eldritch Orb', 0, 0);
eschutas.uniqProps = [
    new uniqNestProp('Class Skills', 'Sorceress', 1, 3),
    new uniqProp('Fire Skill Damage', 10, 20),
    new uniqProp('Lightning Skill Damage', 10, 20),
    new uniqProp('Energy', 20, 30)
]
const deathsFathom = new sorcWeapon('Death\s Fathom', 'Dimensional Shard', 0, 0);
deathsFathom.uniqProps = [
    new uniqProp('Cold Skill Damage', 15, 30),
    new uniqProp('Lightning Resist', 25, 40),
    new uniqProp('Fire Resist', 25, 40)
]
id = 0;
//#endregion

//#region Armor
const ormus = new armorArmor('Ormus\' Robus', 'Dusk Shroud', 467, 0);
ormus.uniqProps = [
    new uniqProp('Defense', 371, 487),
    new uniqProp('Cold Skill Damage', 10, 15),
    new uniqProp('Fire Skill Damage', 10, 15),
    new uniqProp('Lightning Skill Damage', 10, 15)
]
const gladiators = new armorArmor('Gladiator\'s Bane', 'Wire Fleece', 481, 200);
gladiators.uniqProps = [
    new nonLootProp('Enhanced Defense %', 150, 200),
    new uniqProp('Damage Reduced', 15, 20),
    new nonLootProp('Magic Damage Reduced By', 15, 20)
]
gladiators.addDef = 50;
const arkaines = new armorArmor('Arkaines Valor', 'Balrog Skin', 517, 180);
arkaines.uniqProps = [
    new nonLootProp('Enhanced Defense %', 150, 180),
    new uniqProp('All Skills', 1, 2),
    new uniqProp('Damage Reduced', 10, 15)
]
const leaviathan = new armorArmor('Leviathan', 'Kraken Shell', 523, 200);
leaviathan.uniqProps = [
    new nonLootProp('Enhanced Defense %', 170, 200),
    new uniqProp('Defense', 100, 150),
    new uniqProp('Strength', 40, 50),
    new nonLootProp('Damage Reduced By %', 15, 25)
]
const steelCarapace = new armorArmor('Steel Carapace', 'Shadow Plate', 557, 220);
steelCarapace.uniqProps = [
    new nonLootProp('Enhanced Defense %', 190, 220),
    new nonLootProp('Regenerate Mana %', 10, 15),
    new uniqProp('Cold Resist', 40, 60),
    new uniqProp('Damage Reduced', 9, 14)
]
const templarsMight = new armorArmor('Templars Might', 'Sacred Armor', 600, 220)
templarsMight.uniqProps = [
    new nonLootProp('Enhanced Defense %', 170, 220),
    new nonLootProp('Defense vs. Missiles', 250, 300),
    new uniqNestProp(`Class Skill Tree`, `Paladin Offensive Auras`, 1, 2),
]
const tyraelsMight = new armorArmor('Tyraels Might', 'Sacred Armor', 600, 150)
tyraelsMight.uniqProps = [
    new nonLootProp('Enhanced Defense %', 120, 150),
    new nonLootProp('Damage to Demons %', 50, 100),
    new uniqProp('Strength', 20, 30),
    new uniqProp('All Resist', 20, 30)
]
id = 0;
//#endregion

//#region Axes
id = 0;
//#endregion

//#region Belts
const goldwrap = new beltArmor('GoldWrap', 'Heavy Belt', 6, 60);
goldwrap.uniqProps = [
    new nonLootProp('Enhanced Defense %', 40, 60),
    new uniqProp('Gold Find', 50, 80),
    new uniqProp('Life Steal', 6, 8)
]
const stringEars = new beltArmor('String of Ears', 'Demonhide Sash', 34, 180);
stringEars.uniqProps = [
    new nonLootProp('Enhanced Defense %', 150, 180),
    new uniqProp('Life Steal', 6, 8),
    new nonLootProp('Damage Reduced By %', 15, 25),
    new nonLootProp('Magic Damage Reduced By', 10, 15)
]
const razortail = new beltArmor('Razortail', 'Sharkskin Belt', 36, 150);
razortail.uniqProps = [
    new nonLootProp('Enhanced Defense %', 120, 150),
]
const snowclash = new beltArmor('Snowclash', 'Battle Belt', 42, 150);
snowclash.uniqProps = [
    new nonLootProp('Enhanced Defense %', 130, 170),
    new nonLootProp('When hit 5% chance cast blizzard level', 7, 20)
]
const tgods = new beltArmor('Thundergod\'s Vigor', 'War Belt', 52, 200);
tgods.uniqProps = [
    new nonLootProp('Enhanced Defense %', 160, 200),

]
const arach = new beltArmor('Arachnid Mesh', 'Spiderweb Sash', 62, 120);
arach.uniqProps = [
    new nonLootProp('Enhanced Defense %', 90, 120),

]
const nosferatu = new beltArmor('Nosferatu\'s Coil', 'Vampirefang Belt', 63, 0);
nosferatu.uniqProps = [
    new uniqProp('Defense', 98, 141),
    new uniqProp('Life Steal', 5, 7)
]
const verdugnos = new beltArmor('Verdungo\'s Hearty Cord', 'Mithril Coil', 65, 140);
verdugnos.uniqProps = [
    new nonLootProp('Enhanced Defense %', 90, 140),
    new uniqProp('Vitality', 30, 40),
    new nonLootProp('Replenish Life', 10, 13),
    new nonLootProp('Maximum Staimna +', 100, 120),
    new nonLootProp('Damage Reduced By %', 15, 25)
]
id = 0;
//#endregion

//#region Boots
const goblinToe = new bootArmor('Goblin Toe', 'Light Plated Boots', 11, 60);
goblinToe.uniqProps = [
    new nonLootProp('Enhanced Defense %', 50, 60)
]
const infernostride = new bootArmor('Infernostride', 'Demonhide Boots', 35, 150);
infernostride.uniqProps = [
    new nonLootProp('Enhanced Defense %', 120, 150),
    new uniqProp('Gold Find', 40, 70),
]
const warTraveler = new bootArmor('War Traveler', 'Battle Boots', 47, 190);
warTraveler.uniqProps = [
    new nonLootProp('Enhanced Defense %', 150, 190),
    new nonLootProp('Attacker Takes Damage of', 5, 10),
    new uniqProp('Magic Find', 30, 50)
]
const goreRider = new bootArmor('Gore Rider', 'War Boots', 53, 200);
goreRider.uniqProps = [
    new nonLootProp('Enhanced Defense %', 160, 200)
]
const sandstormTrek = new bootArmor('Sandstorm Trek', 'Scarabshell Boots', 65, 170);
sandstormTrek.uniqProps = [
    new nonLootProp('Enhanced Defense %', 140, 170),
    new uniqProp('Strength', 10, 15),
    new uniqProp('Vitality', 10, 15),
    new uniqProp('Poison Resist', 40, 70),
]
const marrowwalk = new bootArmor('Marrowwalk', 'Boneweave Boots', 67, 200);
marrowwalk.uniqProps = [
    new nonLootProp('Enhanced Defense %', 170, 200),
    new uniqNestProp('Skills', 'Skeleton Mastery', 1, 2),
    new uniqProp('Strength', 10, 20)
]
const shadowDancer = new bootArmor('Shadow Dancer', 'Myrmidon Greaves', 71, 100);
shadowDancer.uniqProps = [
    new nonLootProp('Enhanced Defense %', 70, 100),
    new uniqNestProp('Class Skill Tree', 'Assassin Shadow Disciplines', 1, 2),
    new uniqProp('Dexterity', 15, 25)
]
id = 0;
//#endregion

//#region Bows
const kukuShakaku = new bowWeapon('Kuko Shakaku', 'Cedar Bow', 150, 180);
kukuShakaku.uniqProps = [
    new nonLootProp('Enhanced Damage %', 150, 180),
]
const windforce = new bowWeapon('Windforce', 'Hydra Bow', 250, 250);
windforce.uniqProps = [
    new uniqProp('Mana Steal', 6, 8)
]
id = 0;
//#endregion

//#region Crossbows
//#endregion

//#region Daggers
//#endregion

//#region Gloves
const chanceGuards = new gloveArmor('Chance Guards Chancies', 'Chain Gloves', 8, 30);
chanceGuards.uniqProps = [
    new nonLootProp('Enhanced Defense %', 20, 30),
    new uniqProp('Magic Find', 25, 40)
]
const magefist = new gloveArmor('Magefist', 'Light Gauntlets', 11, 30);
magefist.uniqProps = [
    new nonLootProp('Enhanced Defense %', 20, 30),
]
const frostburn = new gloveArmor('Frostburn', 'Gauntlets', 15, 20);
frostburn.uniqProps = [
    new nonLootProp('Enhanced Defense %', 10, 20),
]
const venomGrip = new gloveArmor('Venom Grip', 'Demonhide Gloves', 35, 160);
venomGrip.uniqProps = [
    new nonLootProp('Enhanced Defense %', 130, 160),
    new uniqProp('Defense', 15, 25)
]
const gravepalm = new gloveArmor('Gravepalm', 'Sharkskin Gloves', 39, 180);
gravepalm.uniqProps = [
    new nonLootProp('Enhanced Defense %', 140, 180),
    new nonLootProp('Damage to Undead %', 100, 200),
    new nonLootProp('Attack Rating vs Undead +', 100, 200)
]
const ghoulhide = new gloveArmor('Ghoulhide', 'Heavy Bracers', 44, 190);
ghoulhide.uniqProps = [
    new nonLootProp('Enhanced Defense %', 150, 190),
    new uniqProp('Mana Steal', 4, 5)
]
const lavaGout = new gloveArmor('Lava Gout', 'Battle Gauntlets', 47, 200);
lavaGout.uniqProps = [
    new nonLootProp('Enhanced Defense %', 150, 200)
]
const hellmouth = new gloveArmor('Hellmouth', 'War Gauntlets', 53, 200);
hellmouth.uniqProps = [
    new nonLootProp('Enhanced Defense %', 150, 200),
]
const draculs = new gloveArmor('Dracul\'s Grasp', 'Vampirebone Gloves', 65, 120);
draculs.uniqProps = [
    new nonLootProp('Enhanced Defense %', 90, 120),
    new uniqProp('Strength', 10, 15),
    new nonLootProp('Life After kill', 5, 10),
    new uniqProp('Life Steal', 7, 10)
]
const soulDrainer = new gloveArmor('Soul Drainer', 'Vambraces', 67, 120);
soulDrainer.uniqProps = [
    new nonLootProp('Enhanced Defense %', 90, 120),
    new uniqProp('Mana Steal', 4, 7),
    new uniqProp('Life Steal', 4, 7)
]
const ogreGauntlets = new gloveArmor('Steelrend', 'Ogre Gauntlets', 71, 0);
ogreGauntlets.uniqProps = [
    new uniqProp('Defense', 232, 281),
    new nonLootProp('Enhanced Damage %', 30, 60),
    new uniqProp('Strength', 15, 20)
]
id = 0;
//#endregion

//#region Helms
const tarnhelm = new helmArmor('Tarnhelm', 'Skull Cap', 11, 0);
tarnhelm.uniqProps = [
    new uniqProp('Defense', 8, 11),
    new uniqProp('Magic Find', 25, 50)
]
const rockstopper = new helmArmor('Rockstopper', 'Sallet', 62, 220);
rockstopper.uniqProps = [
    new nonLootProp('Enhanced Defense %', 160, 220),
    new uniqProp('Cold Resist', 20, 40),
    new uniqProp('Fire Resist', 20, 50),
    new uniqProp('Lightning Resist', 20, 40)
]
const stealskull = new helmArmor('Stealskull', 'Casque', 72, 240);
stealskull.uniqProps = [
    new nonLootProp('Enhanced Defense %', 200, 240),
    new uniqProp('Magic Find', 30, 50)
]
const valkyrieWing = new helmArmor('Valkyrie Wing', 'Winged Helm', 98, 200);
valkyrieWing.uniqProps = [
    new nonLootProp('Enhanced Defense %', 150, 200),
    new uniqNestProp('Class Skills', 'Amazon', 1, 2),
    new nonLootProp('Mana After Kill', 2, 4)
]
const crownOfThieves = new helmArmor('Crown of Thieves', 'Grand Crown', 113, 200);
crownOfThieves.uniqProps = [
    new nonLootProp('Enhanced Defense %', 160, 200),
    new uniqProp('Life Steal', 9, 12),
    new uniqProp('Gold Find', 80, 100)
]
const vampireGaze = new helmArmor('Vampire Gaze', 'Grim Helm', 125, 100);
vampireGaze.uniqProps = [
    new uniqProp('Life Steal', 6, 8),
    new uniqProp('Mana Steal', 6, 8),
    new nonLootProp('Damage Reduced By %', 15, 20),
    new nonLootProp('Magic Damage Reduced By', 10, 15)
]
const shako = new helmArmor('Harlequin Crest', 'Shako', 141, 0);
shako.uniqProps = [
    new uniqProp('Defense', 98, 141)
]
const steelShade = new helmArmor('Steel Shade', 'Armet', 149, 130);
steelShade.uniqProps = [
    new nonLootProp('Enhanced Defense %', 100, 130),
    new nonLootProp('Replenish Life', 10, 18),
    new uniqProp('Mana Steal', 4, 8),
    new uniqProp('Absorb Fire Percent', 5, 11)
]
const nightwingsVeil = new helmArmor('Nightwing\s Veil', 'Spired Helm', 159, 120);
nightwingsVeil.uniqProps = [
    new nonLootProp('Enhanced Defense %', 90, 120),
    new uniqProp('Cold Skill Damage', 8, 15),
    new uniqProp('Dexterity', 10, 20),
    new uniqProp('Absorb Cold Percent', 5, 9)
]
const andysVisage = new helmArmor('Andariel\ss Andy\'s Visage', 'Demonhead', 154, 150);
andysVisage.uniqProps = [
    new nonLootProp('Enhanced Defense %', 100, 150),
    new uniqProp('Life Steal', 8, 10),
    new uniqProp('Strength', 25, 30)
]
const crownOfAges = new helmArmor('Crown of Ages', 'Corona', 165, 0);
crownOfAges.uniqProps = [
    new uniqProp('Defense', 349, 399),
    new nonLootProp('Damage Reduced By %', 10, 15),
    new uniqProp('All Resist', 20, 30),
    new uniqProp('Sockets', 1, 2),
]
const giantSkull = new helmArmor('Giant Skull', 'Bone Visage', 157, 0);
giantSkull.uniqProps = [
    new uniqProp('Defense', 350, 477),
    new uniqProp('Strength', 25, 35),
    new uniqProp('Sockets', 1, 2)
]
const kiras = new helmArmor('Kira\'s Guardian', 'Tiara', 50, 0);
kiras.uniqProps = [
    new uniqProp('Defense', 90, 170),
    new uniqProp('All Resist', 50, 70)
]
const griffons = new helmArmor('Griffon\'s Eye', 'Diadem', 60, 0);
griffons.uniqProps = [
    new uniqProp('Defense', 150, 260),
    new uniqProp('Enemy Lightning Resist', 15, 20),
    new uniqProp('Lightning Skill Damage', 10, 15)
]
id = 0;
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
const ribcracker = new stavesWeapon('Ribcracker', 'Quarterstaff', 200, 300);
ribcracker.uniqProps = [
    new nonLootProp('Enhanced Damage %', 200, 300)
]
const ondals = new stavesWeapon('Ondal\'s Wisdom', 'Elder Staff', 0, 0);
ondals.uniqProps = [
    new uniqProp('All Skills', 2, 4),
    new uniqProp('Defense', 450, 550),
    new uniqProp('Energy', 40, 50),
    new nonLootProp('Magic Damage Reduced By', 5, 8)
]
id = 0;
//#endregion

//#region Swords
//#endregion

//#region Throwing
//#endregion

//#region Wands
const boneshade = new wandWeapon('Boneshade', 'Lich Wand', 0, 0);
boneshade.uniqProps = [
    new uniqNestProp('Skills', 'Bone Spirit', 1, 2),
    new uniqNestProp('Skills', 'Bone Spear', 2, 3),
    new uniqNestProp('Skills', 'Bone Wall', 2, 3),
    new uniqNestProp('Skills', 'Bone Armor', 4, 5),
    new uniqNestProp('Skills', 'Teeth', 4, 5),
]
const deathsWeb = new wandWeapon('Death\'s Web', 'Unearthed Wand', 0, 0);
deathsWeb.uniqProps = [
    new uniqProp('Enemy Poison Resist', 40, 50),
    new nonLootProp('Mana After Kill', 7, 12),
    new nonLootProp('Mana After Kill', 7, 12),
    new uniqNestProp('Class Skill Tree', 'Necromancer Poison and Bone Spells', 1, 2)
]
id = 0
//#endregion

//#region Rings
const nagelRing = new ringArmor('Nagelring', 'Ring', 0, 0);
nagelRing.uniqProps = [
    new uniqProp('Attack Rating', 50, 75),
    new uniqProp('Magic Find', 15, 30)
]
const manaldHeal = new ringArmor('Manald Heal', 'Ring', 0, 0);
manaldHeal.uniqProps = [
    new uniqProp('Mana Steal', 4, 7),
    new nonLootProp('Replenish Life', 5, 8)
]
const dwarfStar = new ringArmor('Dwarf Star', 'Ring', 0, 0);
dwarfStar.uniqProps = [
    new nonLootProp('Magic Damage Reduced By', 12, 15)
]
const ravenFrost = new ringArmor('Raven Frost', 'Ring', 0, 0);
ravenFrost.uniqProps = [
    new uniqProp('Attack Rating', 150, 250),
    new uniqProp('Dexterity', 15, 20)
]
const bk = new ringArmor('Bul-Katho\'s BK', 'Ring', 0, 0);
bk.uniqProps = [
    new uniqProp('Life Steal', 3, 5),
]
const carrionWind = new ringArmor('Carrion Wind', 'Ring', 0, 0);
carrionWind.uniqProps = [
    new uniqProp('Life Steal', 6, 9),
    new nonLootProp('Defense vs. Missiles', 100, 160)
]
const naturesPeace = new ringArmor('Nature\'s Peace', 'Ring', 0, 0);
naturesPeace.uniqProps = [
    new uniqProp('Poison Resist', 20, 30),
    new uniqProp('Damage Reduced', 7, 11),
]
const wisp = new ringArmor('Wisp Projector', 'Ring', 0, 0);
wisp.uniqProps = [
    new uniqProp('Absorb Lightning Percent', 10, 20),
    new uniqProp('Magic Find', 10, 20)
]
id = 0;
//#endregion
//#region Amulets
//wwwwwwwwwwwwwwwwwwwwwwwww
const nokozanRelic = new amuletArmor('Nokozan Relic', 'Amulet', 0, 0);
nokozanRelic.uniqProps = null;
const eyeOfTheEtlich = new amuletArmor('Eye of Etlich', 'Amulet', 0, 0);
eyeOfTheEtlich.uniqProps = [
    new nonLootProp('Light Radius', 1, 5),
    new uniqProp('Life Steal', 3, 7),
    new nonLootProp('Defense vs. Missiles', 10, 40)
]
const mahimOak = new amuletArmor('Mahim-Oak Curio', 'Amulet', 0, 0);
mahimOak.uniqProps = null;
const saracens = new amuletArmor('Saracen\'s Chance', 'Amulet', 0, 0);
saracens.uniqProps = [
    new uniqProp('All Resist', 15, 25)
]
const catsEye = new amuletArmor('Cat\'s Eye', 'Amulet', 0, 0);
catsEye.uniqProps = null;
const crescentMoon = new amuletArmor('Crescent Moon', 'Amulet', 0, 0);
crescentMoon.uniqProps = [
    new uniqProp('Life Steal', 3, 6),
    new uniqProp('Mana Steal', 11, 15)
]
const atmasScarab = new amuletArmor('Atma\s Scarab', 'Amulet', 0, 0);
atmasScarab.uniqProps = null;
const risingSun = new amuletArmor('Rising Sun', 'Amulet', 0, 0);
risingSun.uniqProps = [
    new nonLootProp('When Struck 2% chance cast Meteor level', 13, 19)
]
const highlordsWrath = new amuletArmor('Highlord\'s Wrath', 'Amulet', 0, 0);
highlordsWrath.uniqProps = null;
const maras = new amuletArmor('Mara\'s Kaleidoscope', 'Amulet', 0, 0);
maras.uniqProps = [
    new uniqProp('All Resist', 20, 30)
]
const seraphs = new amuletArmor('Seraph\'s Hymn', 'Amulet', 0, 0);
seraphs.uniqProps = [
    new uniqNestProp(`Class Skill Tree`, `Paladin Defensive Auras`, 1, 2),
    new nonLootProp('Damage to Demons %', 20, 50),
    new nonLootProp('Attack Rating vs Demons +', 150, 250),
    new nonLootProp('Damage to Undead %', 20, 50),
    new nonLootProp('Attack Rating vs Undead +', 150, 250)
]
const metalgrid = new amuletArmor('Metalgrid', 'Amulet', 0, 0);
metalgrid.uniqProps = [
    new uniqProp('Attack Rating', 400, 450),
    new uniqProp('All Resist', 25, 35),
    new uniqProp('Defense', 300, 350)
]
id = 0;
//#endregion

uniqs.push(amaWeapons, assWeapons, barbArmors, druidArmors,
    necroArmors, paladinArmors, sorcWeapons, armorArmors,
    /*axesWeapons, */beltsArmors, bootsArmors, bowsWeapons,
    /*crossbowsWeapons, daggersWeapons, */glovesArmors, helmArmors,
    /*javelinsWeapons, macesWeapons, polearmsWeapons, sceptresWeapons,
    shieldsArmors, spearsWeapons, */stavesWeapons, /*swordsWeapons,
    thorwingsWeapons, */ wandsWeapons, ringsArmors, amuletsArmors
);

export default uniqs;
