// Source : https://leetcode.com/problems/encode-and-decode-tinyurl/
// Author : avebeatrix
// Date   : 2022-04-23

let map = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {

    if (!map.has(longUrl)) {
        let str = '';
        do {
            str = Math.random().toString(36).slice(-6);
        } while (map.has(str))
        map.set(longUrl, str);
        map.set(str, longUrl);
    }

    return 'http://tinyurl.com/' + map.get(longUrl);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    let index = shortUrl.lastIndexOf('/');
    let part = shortUrl.slice(index + 1);
    return map.get(part);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */