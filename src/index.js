
// You should implement your task here.

module.exports = function towelSort (matrix) {
   let result = []
  switch (matrix == 0 || matrix == null){
    case false:
      for (let i = 0; i < matrix.length; i++) {
        if((i % 2) === 0){
          for (let j = 0; j < matrix[i].length; j++) {
            result.push(matrix[i][j])
          }
        } else if((i % 2) !== 0) {
          for (let j = (matrix[i].length - 1) ; j >= 0; j--) {
            result.push(matrix[i][j])
          }
        }
        
      }
      return result
      break
    case true:
      return result
      break
  }
}
