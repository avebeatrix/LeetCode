// Source : https://leetcode.com/problems/design-underground-system/
// Author : avebeatrix
// Date   : 2022-04-24

var UndergroundSystem = function () {
    this.store = {
        average: {
        }
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
    if (!this.store?.[id]) {
        this.store[id] = {
            arrives: [],
            departs: []
        }
    }
    this.store[id].departs.push([stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {

    this.store[id].arrives.push([stationName, t]);

    let [lastDepartSN, lastDepartT] = this.store[id].departs[this.store[id].departs.length - 1];
    if (!this.store.average?.[lastDepartSN]?.[stationName]) {
        let tmpObj = {
            count: 0,
            lastT: 0,
            sum: 0
        }
        if (!this.store.average[lastDepartSN]) {
            this.store.average[lastDepartSN] = {
                [stationName]: tmpObj
            }
        } else {
            this.store.average[lastDepartSN][stationName] = tmpObj;
        }
    }
    this.store.average[lastDepartSN][stationName].count++;
    this.store.average[lastDepartSN][stationName].lastT = t;
    this.store.average[lastDepartSN][stationName].sum += t - lastDepartT;
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
    let result = this.store.average[startStation][endStation].sum / this.store.average[startStation][endStation].count;
    return result;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
let undergroundSystem = new UndergroundSystem();
//  undergroundSystem.checkIn(10, "Leyton", 3);
//  undergroundSystem.checkOut(10, "Paradise", 8); // Customer 10 "Leyton" -> "Paradise" in 8-3 = 5
//  undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 5.00000, (5) / 1 = 5
//  undergroundSystem.checkIn(5, "Leyton", 10);
//  undergroundSystem.checkOut(5, "Paradise", 16); // Customer 5 "Leyton" -> "Paradise" in 16-10 = 6
//  undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 5.50000, (5 + 6) / 2 = 5.5
//  undergroundSystem.checkIn(2, "Leyton", 21);
//  undergroundSystem.checkOut(2, "Paradise", 30); // Customer 2 "Leyton" -> "Paradise" in 30-21 = 9
//  undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 6.66667, (5 + 6 + 9) / 3 = 6.66667


const fs = require('fs')
let fileContent = fs.readFileSync("leetcode/algorithms/input.txt", "utf8")

const [funcs, params] = fileContent.toString().trim().split("\n").map(line => JSON.parse(line));
for (let i = 1; i < funcs.length; i++) {
    undergroundSystem[funcs[i]](...params[i]);
}

