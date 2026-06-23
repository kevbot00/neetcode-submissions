class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      if ( s.length % 2 !== 0 ) return false
      const map = {
        ')': '(',
        '}': '{',
        ']': '['
      }
      const stack = []
      for ( let i = 0; i < s.length; i++ ) {
        const sym = s[i]
        if ( sym === '(' || sym === '{' || sym === '[') {
          stack.push(sym)
          continue
        }

        const lastSym = stack.pop()
        if ( lastSym !== map[sym] ) return false

      }

      return stack.length === 0
    }
}
