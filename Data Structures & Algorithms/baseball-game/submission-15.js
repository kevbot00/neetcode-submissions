class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(ops) {
        const stack = []
        for ( let i = 0; i < ops.length; i++ ) {
            const op = ops[i]
            if ( op === "+" ) {
                const num1 = stack[stack.length - 1]
                const num2 = stack[stack.length - 2]
                console.log(num1, num2)
                stack.push(num1 + num2)
            } else if ( op === "C" ) {
                stack.pop()
            } else if ( op === "D" ) {
                stack.push(Number(stack[stack.length - 1]) * 2)
            } else {
                stack.push(Number(op))
            }
        }

        console.log(stack)

        return stack.reduce((prev, curr) => {
            return prev + curr
        }, 0)
    }
}
