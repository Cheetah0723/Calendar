import expect from 'expect.js';
import Calendar from '../index';
import DatePicker from '../src/Picker';
import RangeCalendar from '../src/RangeCalendar';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
const Simulate = TestUtils.Simulate;
import async from 'async';
import DateTimeFormat from 'gregorian-calendar-format';
const formatter = new DateTimeFormat('yyyy-MM-dd');
import GregorianCalendar from 'gregorian-calendar';
import zhCn from 'gregorian-calendar/lib/locale/zh_CN';
import CalendarLocale from '../src/locale/zh_CN';
const VALUE = new GregorianCalendar(zhCn);
VALUE.set(2015, 5, 1);

describe('DatePicker', () => {
  let div;

  function noop() {
  }

  function renderOne({ value }) {
    return (<input
      className="rc-calendar-picker-input"
      onChange={noop}
      readOnly
      value={value && formatter.format(value)}
    />);
  }

  function renderRange({ value }) {
    return (<input
      className="rc-calendar-picker-input"
      onChange={noop}
      readOnly
      value={value && `${formatter.format(value[0])} - ${formatter.format(value[1])}`}
    />);
  }

  function renderPicker(props) {
    return ReactDOM.render(<DatePicker
      calendar={
      <Calendar
        locale={CalendarLocale}
      />
        }
      defaultValue={VALUE}
      {...props}
    >
      {renderOne}
    </DatePicker>, div);
  }

  function renderRangePicker(props) {
    return ReactDOM.render(<DatePicker
      calendar={
      <RangeCalendar
        locale={CalendarLocale}
      />
        }
      defaultValue={[VALUE, VALUE]}
      {...props}
    >
      {renderRange}
    </DatePicker>, div);
  }

  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });

  it('popup correctly', (done) => {
    let change;
    const picker = renderPicker({
      onChange(v) {
        change = v;
      },
    });
    expect(picker.state.open).not.to.be.ok();
    const input = TestUtils.scryRenderedDOMComponentsWithClass(picker,
      'rc-calendar-picker-input')[0];
    async.series([(next) => {
      Simulate.click(input);
      setTimeout(next, 100);
    }, (next) => {
      expect(TestUtils.scryRenderedDOMComponentsWithClass(picker.calendarInstance,
        'rc-calendar')[0]).to.be.ok();
      expect(picker.state.open).to.be(true);
      const day = TestUtils.scryRenderedDOMComponentsWithClass(picker.calendarInstance,
        'rc-calendar-date')[1];
      Simulate.click(day);
      setTimeout(next, 100);
    }, (next) => {
      expect(change).to.be.ok();
      expect(change.getYear()).to.be(2015);
      expect(change.getMonth()).to.be(5);
      expect(change.getDayOfMonth()).to.be(2);
      expect(ReactDOM.findDOMNode(input).value).to.be('2015-06-02');
      expect(picker.state.open).not.to.be.ok();
      next();
    }], () => {
      done();
    });
  });

  it('popup range calendar correctly', (done) => {
    let change;
    const picker = renderRangePicker({
      onChange(v) {
        change = v;
      },
    });
    expect(picker.state.open).not.to.be.ok();
    const input = TestUtils.scryRenderedDOMComponentsWithClass(picker,
      'rc-calendar-picker-input')[0];
    async.series([(next) => {
      Simulate.click(input);
      setTimeout(next, 100);
    }, (next) => {
      expect(TestUtils.scryRenderedDOMComponentsWithClass(picker.calendarInstance,
        'rc-calendar')[0]).to.be.ok();
      expect(picker.state.open).to.be(true);
      const day1 = TestUtils.scryRenderedDOMComponentsWithClass(picker.calendarInstance,
        'rc-calendar-date')[1];
      Simulate.click(day1);
      const day2 = TestUtils.scryRenderedDOMComponentsWithClass(picker.calendarInstance,
        'rc-calendar-date')[2];
      Simulate.click(day2);
      setTimeout(next, 100);
    }, (next) => {
      expect(change).to.be.ok();
      expect(change.length).to.be(2);
      expect(change[0].getYear()).to.be(2015);
      expect(change[0].getMonth()).to.be(5);
      expect(change[0].getDayOfMonth()).to.be(2);
      expect(change[1].getYear()).to.be(2015);
      expect(change[1].getMonth()).to.be(5);
      expect(change[1].getDayOfMonth()).to.be(3);
      expect(ReactDOM.findDOMNode(input).value).to.be('2015-06-02 - 2015-06-03');
      expect(picker.state.open).not.to.be.ok();
      next();
    }], () => {
      done();
    });
  });

  describe('render calendar to body', () => {
    it('support correctly', (done) => {
      let change;
      const picker = renderPicker({
        onChange(v) {
          change = v;
        },
      });
      expect(picker.state.open).not.to.be.ok();
      const input = TestUtils.scryRenderedDOMComponentsWithClass(picker,
        'rc-calendar-picker-input')[0];
      async.series([(next) => {
        Simulate.click(input);
        setTimeout(next, 100);
      }, (next) => {
        expect(TestUtils.scryRenderedDOMComponentsWithClass(picker,
          'rc-calendar')[0]).not.to.be.ok();
        expect(picker.state.open).to.be(true);
        const day = TestUtils.scryRenderedDOMComponentsWithClass(picker.calendarInstance,
          'rc-calendar-date')[1];
        Simulate.click(day);
        setTimeout(next, 100);
      }, (next) => {
        expect(change).to.be.ok();
        expect(change.getYear()).to.be(2015);
        expect(change.getMonth()).to.be(5);
        expect(change.getDayOfMonth()).to.be(2);
        expect(ReactDOM.findDOMNode(input).value).to.be('2015-06-02');
        expect(picker.state.open).not.to.be.ok();
        next();
      }], () => {
        done();
      });
    });

    it('destroy correctly', (done) => {
      if (navigator.userAgent.toLowerCase().indexOf('phantomjs') !== -1) {
        return done();
      }
      const picker = renderPicker();
      expect(picker.state.open).not.to.be.ok();
      const input = TestUtils.scryRenderedDOMComponentsWithClass(picker,
        'rc-calendar-picker-input')[0];
      async.series([(next) => {
        Simulate.click(input);
        setTimeout(next, 100);
      }, (next) => {
        expect(TestUtils.scryRenderedDOMComponentsWithClass(picker,
          'rc-calendar')[0]).not.to.be.ok();
        expect(picker.state.open).to.be(true);
        if (document.querySelectorAll) {
          expect(document.querySelectorAll('.rc-calendar-picker').length).not.to.be(0);
        }
        expect(TestUtils.scryRenderedDOMComponentsWithClass(picker.calendarInstance,
          'rc-calendar-date')[0]).to.be.ok();
        ReactDOM.unmountComponentAtNode(div);
        setTimeout(next, 100);
      }, (next) => {
        if (document.querySelectorAll) {
          expect(document.querySelectorAll('.rc-calendar-picker').length).to.be(0);
        }
        expect(picker.calendarInstance).not.to.be.ok();
        next();
      }], () => {
        done();
      });
    });
  });
});
