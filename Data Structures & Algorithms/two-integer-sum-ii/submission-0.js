class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const m = {}
        for ( let i = 0; i < numbers.length; i++ ) {
            const num = numbers[i]
            if ( m[num] ) {
                return [m[num], i + 1]
            }

            const diff = target - num

            m[diff] = i + 1
        }
    }
}
