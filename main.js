String.prototype.toJadenCase = function () {
  let textArr = this.split(' ')
  return textArr.map(item => {
    return item[0].toUpperCase() + item.slice(1).toLowerCase()
  }).join(' ')
};

console.log(('What a beautiful day it is.').toJadenCase())
console.log(('eVeRyThInG i SeE tUrNs To StOnE.').toJadenCase())
console.log(('where o where art thou, brother.').toJadenCase())


