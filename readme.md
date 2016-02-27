# currency-code-map

This is a mapping of all the [ISO 3166-1 alpha-2 country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) to their respective [ISO 4217 currency codes](https://en.wikipedia.org/wiki/ISO_4217#Active_codes).

The data has been partially-generated from [country-list](https://github.com/fannarsh/country-list) and [currency-codes](https://github.com/freeall/currency-codes), with some manual data entry being performed where the generation script failed.

## Install

```sh
$ npm install currency-code-map
```

## Usage

```js
var currency = require('currency-code-map')

currency['AU']
=> 'AUD'

currency['CA']
=> 'CAD'

currency['DE']
=> 'EUR'
```

### Page weight (browserified)

| compression                 |    size |
| :-------------------------- | ------: |
| currency-code-map.js        | 3.26 kB |
| currency-code-map.min.js    | 2.26 kB |
| currency-code-map.min.js.gz | 1.04 kB |


## License

[MIT](http://opensource.org/licenses/MIT)
