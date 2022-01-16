// Source : https://leetcode.com/problems/maximize-distance-to-closest-person/
// Author : avebeatrix
// Date   : 2022-01-16
/**
 * @param {number[]} seats
 * @return {number}
 */
 var maxDistToClosest = function(seats) {    
    let max = 0;
    let cur_distance = 0;
    let cur_start = -1;
    seats.forEach((is_seat, seat_index) => {
        if (is_seat) {       
            if (cur_start > -1) {
                cur_distance = Math.floor((seat_index - cur_start) / 2);
            }    
            max = Math.max(max, cur_distance);
            cur_distance = 0;            
            cur_start = seat_index;
        } else {
            cur_distance++;
        }
    })
    if (!seats[seats.length - 1]) {
        max = Math.max(max, cur_distance);
    }
    return max;
};