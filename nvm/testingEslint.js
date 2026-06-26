var name = 'Lera';
var age = 21;
var email = 'nampan.valeriya@gmail.com';

function greet(user) {
  if (user) {
    return 'Hello, ' + user + '!';
  } else {
    return 'Hello, Guest!';
  }
}

var users = [
  { name: 'Lera', age: 21 },
  { name: 'Edik', age: 21 },
  { name: 'Bob', age: 17 },
];

users.forEach(function (user) {
  console.log(greet(user.name));
  console.log('Age:', user.age);
});
