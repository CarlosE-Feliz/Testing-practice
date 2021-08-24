const stringL = string => {
     if(string.length > 1 && string.length < 10){
      return string.length
    } else {
        throw new Error('The length should be more than 1 and less than 10'); 
    }

}
module.exports = stringL;