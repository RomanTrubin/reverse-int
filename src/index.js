module.exports = function reverse (n) {

    const i = n.toString().split('').reverse();
    const y = i.join('');
    const result = parseInt(y);
    return result

  
}
