class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
      const bucket = [0, 0, 0]
      for ( const num of nums ) {
        bucket[num]++
      }

      console.log('bucket', bucket)
      let index = 0
      for ( let i = 0; i < bucket.length; i++ ) {
        for ( let j = 0; j < bucket[i]; j++ ) {
          nums[index++] = i
        }
      }

      return nums
    }
}
