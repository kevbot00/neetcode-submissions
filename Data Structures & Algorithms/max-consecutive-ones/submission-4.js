class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let result = 0
        let count = 0
        for ( const n of nums ) {
            if ( n === 1 ) {
                count++
            } else {
                if ( count > result ) {
                    result = count
                }
                count = 0
            }
        }

        if ( count > result ) {
            result = count
        }

        return result
    }
}
