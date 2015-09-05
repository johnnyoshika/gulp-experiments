/* @flow */

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  say(message) {
    console.log(message);
  }
  static create() {
    return new User('', '');
  }
}

class Employee extends User {
  constructor(number, firstName, lastName) {
    super(firstName, lastName);
    this.number = number;
  }
  say(message) {
    super.say('Employee says: ' + message);
  }
}



var user = User.create();

var employee = new Employee(123, 'John', 'Smith');
