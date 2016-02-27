var countries = require('country-list/data')
var currencies = require('currency-codes/data')

var map = {}

countries.forEach(function (country) {
  var name = country.name.toLowerCase()
  var code = country.code
  var currency = (currencies.filter(function (currency) {
    var countries = currency.countries
    return countries && !!~countries.indexOf(name)
  }) || [])[0]

  map[code] = currency ?
    currency.code :
    null
})

console.log(
  'module.exports = ' +
    JSON.stringify(map, null, 2)
      .replace(/"([A-Z]{2})":/g, '$1:')
      .replace(/"/g, "'")
)
