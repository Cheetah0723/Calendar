# rc-calendar
---

calendar ui component for react, port from https://github.com/kissyteam/date-picker

[![NPM version][npm-image]][npm-url]
[![SPM version](http://spmjs.io/badge/rc-calendar)](http://spmjs.io/package/rc-calendar)
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![Sauce Test Status](https://saucelabs.com/buildstatus/rc-calendar)](https://saucelabs.com/u/rc-calendar)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/rc-calendar.svg)](https://saucelabs.com/u/rc-calendar)

[npm-image]: http://img.shields.io/npm/v/rc-calendar.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-calendar
[travis-image]: https://img.shields.io/travis/react-component/calendar.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/calendar
[coveralls-image]: https://img.shields.io/coveralls/react-component/calendar.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/calendar?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/calendar.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/calendar
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-calendar.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-calendar

## Screenshots

<img src="http://gtms02.alicdn.com/tps/i2/TB1luFKHXXXXXb3XXXXl4OqLpXX-574-596.png" width="288"/>

<img src="http://gtms04.alicdn.com/tps/i4/TB1yVNEHXXXXXc5XFXXbyv.ZFXX-528-586.png" width="288"/>

<img src="http://gtms03.alicdn.com/tps/i3/TB1lmz_GFXXXXbEXVXXbMpwQXXX-692-732.png" width="288"/>

## Feature

* support ie8,ie8+,chrome,firefox,safari
* support date, month, year, decade select panel
* support week number
* support en-us and zh-cn locale (ui and timeOffset)
* support aria and keyboard accessibility

### Keyboard

* Previous month (PageUp)
* Next month (PageDown)
* tab into hour input: Last hour(Up), Next hour(Down)
* tab into hour input: Last minute(Up), Next minute(Down)
* tab into hour input: Last second(Up), Next second(Down)
* Last year (Control + left)
* Next year (Control + right)

## install

[![rc-calendar](https://nodei.co/npm/rc-calendar.png)](https://npmjs.org/package/rc-calendar)

## Usage

```js
var Calendar = require('rc-calendar');
var React = require('react');
React.render(<Calendar />, container);
```

For details to see: [https://github.com/yiminghe/learning-react/tree/master/example/rc-calendar](https://github.com/yiminghe/learning-react/tree/master/example/rc-calendar)

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>className</td>
          <td>String</td>
          <td></td>
          <td>additional css class of root dom node</td>
        </tr>
        <tr>
          <td>orient</td>
          <td>String[]</td>
          <td></td>
          <td>affect the position of arrow. exp: ['left','top']</td>
        </tr>
        <tr>
          <td>locale</td>
          <td>Object</td>
          <td>require('rc-calendar/lib/locale/en-use')</td>
          <td>calendar locale</td>
        </tr>
        <tr>
          <td>showWeekNumber</td>
          <td>Boolean</td>
          <td>false</td>
          <td>whether to show week number of year</td>
        </tr>
        <tr>
          <td>showToday</td>
          <td>Boolean</td>
          <td>true</td>
          <td>whether to show today button</td>
        </tr>
        <tr>
          <td>showTime</td>
          <td>Boolean</td>
          <td>true</td>
          <td>whether to support time select</td>
        </tr>
        <tr>
           <td>focused</td>
           <td>Boolean</td>
           <td>false</td>
           <td>whether to focus on render</td>
        </tr>
        <tr>
          <td>onSelect</td>
          <td>Function(GregorianCalendar date)</td>
          <td>function(){}</td>
          <td>called when a date is selected from calendar</td>
        </tr>
        <tr>
           <td>onBlur</td>
           <td>Function()</td>
           <td>function(){}</td>
           <td>called when calendar loose focus</td>
         </tr>
    </tbody>
</table>


online docs: http://spmjs.io/docs/rc-calendar/

## Development

```
npm install
npm start
```

## Example

http://localhost:8001/examples/index.md

online example: http://spmjs.io/docs/rc-calendar/examples/

## Test Case

http://localhost:8001/tests/runner.html?coverage

## Coverage

http://localhost:8001/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:8001/tests/runner.html?coverage

## License

rc-calendar is released under the MIT license.