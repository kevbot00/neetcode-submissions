class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const m = new Set()
      for ( const num of nums ) {
        if ( m.has(num) ) return true
        m.add(num)     
      }

      return false
    }
}
