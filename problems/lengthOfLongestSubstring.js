function lengthOfLongestSubstring(s) {
    let result = 0;
    let len = s.length;
    let map = {};
    let i = 0;
    let j = 0;
    while(i < len && j < len) {
        if (typeof map[s[j]] === 'undefined') {
            map[s[j]] = j++;
            result = (j - i) > result ? j - i : result;
        } else {
            delete map[s[i++]];
        }
        
    }
    return result;
};
