const transpose = function (matrix) {

    const output = [];
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (!output[j]) {
          output[j] =[]
        }
        output[j][i] = matrix[i][j] 
      }
    }
    return output;
  }

const wordSearch = (letters, word) => { 
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    } 
    const switchedArr = transpose(letters);
    
    const verticalJoin = switchedArr.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }     
    return false
}

module.exports = wordSearch