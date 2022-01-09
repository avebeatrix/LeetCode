// Source : https://leetcode.com/problems/robot-bounded-in-circle/
// Author : avebeatrix
// Date   : 2022-01-09
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {

    if (instructions.indexOf('R') === -1 && instructions.indexOf('L') === -1) return false;

    const LEFT = 'L';
    const RIGHT = 'R';
    const GO = 'G';

    const NORTH = 'NORTH';
    const WEST = 'WEST';
    const SOUTH = 'SOUTH';
    const EAST = 'EAST';
    
    let replaceDumb = (arr, str) => {   
        let has_dumb = true;
        while (has_dumb) {
            has_dumb = false;
            for (let dumb of arr) {
                if (str.indexOf(dumb) !== -1) {
                    has_dumb = true;
                    str = str.replace(dumb, '');
                }
            }  
        }   
        return str;                  
    }

    let getFullCycle = (instructions) => {
        let getCounter = (str, type) => str.split('').filter(val => val === type).length;
        let full_instructions = instructions;
        while (Math.abs(getCounter(full_instructions, LEFT) - getCounter(full_instructions, RIGHT)) % 4 !== 0) {
            full_instructions += instructions;     
        }
        return full_instructions;
    }

    let full_instructions = getFullCycle(replaceDumb(['RRRR', 'LLLL', 'RL', 'LR'], instructions));   
        
    let initDirection = () => {
        let north = {
            val: NORTH,          
        }
        let west = {
            val: WEST,           
        }
        let south = {
            val: SOUTH,            
        }
        let east = {
            val: EAST,            
        }
        north.next = east;
        north.prev = west;
        west.prev = south;
        west.next = north;
        south.prev = east;
        south.next = west;
        east.prev = north;
        east.next = south; 
        return north;
    }
   

    let imitateProcess = (instructions, state) => {
        for (let command of instructions) {
            switch (command) {
                case LEFT:
                    state.direction = state.direction.prev;
                    break;
                case RIGHT:
                    state.direction = state.direction.next;
                    break;
                case GO:
                    switch (state.direction.val) {
                        case NORTH:
                            state.y++;
                            break;
                        case WEST:
                            state.x--;
                            break;
                        case SOUTH:
                            state.y--;
                            break;
                        case EAST:
                            state.x++;
                            break;
                        default:
                            break;
                    }
                    break;           
                default:
                    break;    
            }
        }
    }

    let state = {
        x: 0,
        y: 0,
        direction: initDirection()
    }   
    imitateProcess(full_instructions, state);
    
    if (state.x == 0 && state.y == 0 && state.direction.val === NORTH) return true;
    return false;
};