// # Задание 4

// Напиши класс `StringBuilder`. На вход он получает один параметр - строку,
// которую записывает в свойство `_value`.

// Добавь классу следующий функционал:

// - Геттер `value` - возвращает текущее значение поля `_value`
// - Метод `append(str)` - получает парaметр str (строку) и добавляет ее в конец
//   `_value`
// - Метод `prepend(str)` - получает парaметр str (строку) и добавляет ее в начало
//   value
// - Метод `pad(str)` - получает парметр str (строку) и добавляет ее в начало и в
//   конец `_value`

// ```js
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
// ```

class StringBuilder {
  constructor(str) {
    this._value = str;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value += str;
    return this._value;
  }

  prepend(str){
    this._value = str + this._value
  }

  pad(str){
    this._value = str + this._value + str;
  }


}

const builder = new StringBuilder(".");
console.log(builder.value);

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='


