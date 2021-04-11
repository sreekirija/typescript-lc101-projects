"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    //const foo: string[] = [];
    function Rocket(itemName, totalCapacity) {
        //const cargoItems: [number, string]=[];
        //const astronauts: [number, string]=[];
        //var cargoItems: Cargo[] = [];
        //let astronauts: [number, string];
        this.astronauts = [];
        //let astronauts = new Astronaut();
        this.cargoItems = [];
        this.name = itemName;
        this.totalCapacityKg = totalCapacity;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalItemMass = 0;
        for (var i = 0; i < items.length; i++) {
            totalItemMass += (items[i].massKg);
        }
        return totalItemMass;
    };
    Rocket.prototype.currentMassKg = function () {
        return (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.totalCapacityKg > (this.currentMassKg() + item.massKg)) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
