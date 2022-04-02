var id = 0;
let uniqs = [];
const assWeapons = [];
const amaWeapons = [];
const barbArmors = [];
const druidArmor = [];
const necroArmor = [];
const paladinArmor = [];
const sorcWeapons = [];
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

class armor {
    constructor(name, base, minDef, maxDef) {
        this.name = name;
        this.base = base;
        this.minDef = minDef;
        this.maxDef = maxDef;
        this.type = null;
    }
}

class barbArmor extends armor {
    constructor(name, base, minDef, maxDef) {
        super(name, base, minDef, maxDef)
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
    }
}

class uniqNestProp extends uniqProp {
    constructor(type, attrName, min, max) {
        super(attrName, min, max);
        this.type = type;
    }
}

//Amazon
const stoneRaven = new amazonWeapon('Stoneraven','Matriarchal Spear', 214, 361);
stoneRaven.uniqProps = [
    new uniqProp('Defense', 400, 600),
    new uniqProp('All Resist', 30, 50),
    new uniqNestProp('Class Skill Tree', 'Amazon Javelin And Spear', 1, 2)

]
const titans = new amazonWeapon('Titan\'s Revenge', 'Ceremonial Javelin', 137, 155);
titans.uniqProps = [
    new uniqProp('Life Steal', 5, 9)
]
uniqs.push(amaWeapons);
id = 0;

//Assassin
const bartucs = new assassinWeapon('Bartucs Cut-Throat', 'Greater Talons', 77, 155);
bartucs.uniqProps = [
    new uniqProp('Life Steal', 5, 9)
]
const firelizards = new assassinWeapon('Firelizards Talons', 'Feral Claws', 66, 196);
firelizards.uniqProps = [
    new uniqNestProp('Class Skill Tree', 'Assassin Martial Arts', 1, 3),
    new uniqProp('Fire Resist', 40, 70),
    new uniqNestProp('Skills', 'Wake of Fire', 1, 2),
    new uniqNestProp('Skills', 'Wake of Inferno', 1, 2)
]
const jadeTalon = new assassinWeapon('Jade Talon', 'Wrist Sword', 130, 153);
jadeTalon.uniqProps = [
    new uniqProp('Mana Steal', 10, 15),
    new uniqProp('All Resist', 40, 55),
    new uniqNestProp('Class Skill Tree', 'Assassin Shadow Disciplines', 1, 2),
    new uniqNestProp('Class Skill Tree', 'Assassin Martial Arts', 1, 2)
]
//const shadowKiller = new assassinWeapon(`shadow killer`, `Battle Cetus`, 170, 220);
//shadowKiller.uniqProps = [
//    new uniqProp('Mana on kill', 40, 55),
//    { attrName: `Mana on kill`, min: 10, max: 15, userValue: 15 }
//]
uniqs.push(assWeapons);
id = 0;

//Barbarian 
const arreats = new barbArmor('Arreat\'s Face', 'Slayer Guard', 302, 363);
arreats.uniqProps = [
    new uniqProp('Life Steal', 3, 6),
]
const demonHorn = new barbArmor('Demonhorn\'s Edge', 'Destroyer Helm', 345, 408);
demonHorn.uniqProps = [
    new uniqNestProp('Class Skill Tree', 'Barbarian Warcries', 1, 3),
    new uniqNestProp(`Class Skill Tree`, `Barbarian Combat Masteries`, 1, 3),
    new uniqNestProp(`Class Skill Tree`, `Barbarian Combat Skills`, 1, 3)
]

const halaberds = new barbArmor('Halaberds reign', 'Conqueror Crown', 384, 432);
halaberds.uniqProps = [
    new uniqNestProp('Skills', 'Battle Command', 1, 2),
    new uniqNestProp('Skills', 'Battle Orders', 1, 2)
]
uniqs.push(barbArmors)
id = 0;








export default uniqs;
