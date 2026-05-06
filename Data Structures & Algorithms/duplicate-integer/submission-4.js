class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const m = {}
      for ( const num of nums ) {
        if ( m[num] ) return true
        m[num] = true
      }

      return false
    }
}
