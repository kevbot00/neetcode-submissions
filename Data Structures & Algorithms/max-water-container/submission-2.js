class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length - 1
        let result = 0
        while ( l < r ) {
            const area = r - l
            const heightL = heights[l]
            const heightR = heights[r]
            const max = Math.min(heightL, heightR)
            if ( max * area > result ) {
                result = max * area
            }
            
            if ( heightL < heightR ) {
                l++
            } else {
                r--
            }
        }

        return result
    }
}
