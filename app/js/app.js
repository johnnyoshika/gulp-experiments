'use strict';

document.querySelector('[data-action="dosomething"]').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('[data-target="dosomething"]').style.display = 'block';;
}, false);
'use strict';

(function () {
  var foo = [1, 2, 3].map(function (i) {
    return i * 2;
  });
  var test = [1, 2, 3].map(function (i) {
    return i * 7;
  });
})();

function flow(x, y) {
  return x.length * y;
}

flow('hello', 42);
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var User = (function () {
  function User(firstName, lastName) {
    _classCallCheck(this, User);

    this.firstName = firstName;
    this.lastName = lastName;
  }

  _createClass(User, [{
    key: 'say',
    value: function say(message) {
      console.log(message);
    }
  }], [{
    key: 'create',
    value: function create() {
      return new User('', '');
    }
  }]);

  return User;
})();

var Employee = (function (_User) {
  _inherits(Employee, _User);

  function Employee(number, firstName, lastName) {
    _classCallCheck(this, Employee);

    _get(Object.getPrototypeOf(Employee.prototype), 'constructor', this).call(this, firstName, lastName);
    this.number = number;
  }

  _createClass(Employee, [{
    key: 'say',
    value: function say(message) {
      _get(Object.getPrototypeOf(Employee.prototype), 'say', this).call(this, 'Employee says: ' + message);
    }
  }]);

  return Employee;
})(User);

var user = User.create();

var employee = new Employee(123, 'John', 'Smith');
//# sourceMappingURL=app.js.map