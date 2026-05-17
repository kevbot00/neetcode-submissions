class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []
        for ( const op of operations ) {
            if ( op === '+') {
                stack.push(Number(stack[stack.length - 1]) + Number(stack[stack.length - 2]))
            } else if ( op === 'C') {
                stack.pop()
            } else if ( op === 'D' ) {
                stack.push(Number(stack[stack.length - 1]) * 2)
            } else {
                stack.push(Number(op))
            } 
        }
        console.log('stack', stack)

        let result = 0
        for ( const num of stack ) {
            result += parseInt(num)
        }

        return result
    }
}
