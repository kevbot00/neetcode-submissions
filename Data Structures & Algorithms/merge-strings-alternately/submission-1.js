class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = ''
        const totalLength = word1.length + word2.length - 1
        for ( let i = 0; i < totalLength; i++ ) {
            if ( word1[i] ) {
                result += word1[i]
            }

            if ( word2[i] ) {
                result += word2[i]
            }
        }

        console.log(result)
        return result
    }
}
