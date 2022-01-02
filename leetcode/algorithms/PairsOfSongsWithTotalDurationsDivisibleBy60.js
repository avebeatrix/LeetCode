// Source : https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
// Author : avebeatrix
// Date   : 2022-01-02
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    let map = new Map();
    const TIME_LIMIT = 60;
    time.forEach(song_time => {
        let key = song_time % TIME_LIMIT;
        map.set(key, (map.get(key) ?? 0) + 1);
    })
    let count_of_pairs = 0;
    map.forEach((val, key) => {
        if (val) {
            if (!key) {
                count_of_pairs += (val / 2) * (val - 1);
            } else {
                let second_key = TIME_LIMIT - key;
                if (map.has(second_key)) {
                    if (second_key === key) {
                        count_of_pairs += (val / 2) * (val - 1);
                    } else {
                        let addition = map.get(second_key);
                        count_of_pairs += val * addition;
                        map.set(second_key, 0);
                    }

                }
            }
        }
    })
    return count_of_pairs;
};