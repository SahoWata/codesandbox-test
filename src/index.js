/**
 * const,let等の変数宣言
 */

//

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";
// //→エラーが表示される

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可能
// //val3 = "const変数を上書き";
// //→read-onlyのエラーがでる

// const val3 = "const変数を再宣言";
// //→エラーが表示される

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28,
// };

// val4.name = "jack";

// val4.address = "Hiroshima";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push("monkey");
// console.log(val5);
