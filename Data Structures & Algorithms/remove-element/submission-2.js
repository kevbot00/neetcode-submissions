class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
      // have 2 pointer left, right = 0
      // keep each right, if it doesn't match add 1 to left and right 
      // 
      let left = 0
      for ( let right = 0; right < nums.length; right++ ) {
        if ( nums[right] !== val ) {
          nums[left] = nums[right]
          left++
        }
      }
      console.log('nums', nums)
      return left
    }
}
