class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
      let ans = new Array(arr.length)
      let max = -1
      for ( let i = arr.length - 1; i >= 0; i-- ) {
        ans[i] = max
        max = Math.max(arr[i], max)
      }

console.log(ans)
      return ans
    }
}
