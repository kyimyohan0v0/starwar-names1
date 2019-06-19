const names = require('./names.json')
import uniqueRandomArray from 'unique-random-array';
// const uniqueRandomArray = require('unique-random-array')
const mainExport = {
    names,
    getRandomName: uniqueRandomArray(names),
}


module.exports = mainExport;
export default mainExport;