function arrayDiff(a, b) {
    let arr = []
    for(let i = 0; i < a.length; i++) {
      if(!b.includes(a[i])) {
          arr.push(a[i])
        }
      }
    return arr
    }
  
    
    // return a.filter(function(char) {
    //   return !b.includes(char)
    // })
  
    
  
  console.log(arrayDiff([1,2,3], [1,2]))