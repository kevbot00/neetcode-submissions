class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // 2 pointers
        let l = 0
        let r = numbers.length - 1

        while ( l < r ) {
            const diff = numbers[l] + numbers[r]
            if ( diff === target ) return [l + 1, r + 1]
            if ( diff > target ) {
                r--
            } else {
                l++
            }
        }
    }
}
