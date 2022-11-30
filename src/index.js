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
//   name: "とまと",
//   age: 28,
// };

// val4.name = "jack";

// val4.address = "Tokyo";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "とまと";
// const age = 28;
// //私の名前はとまとです。年齢は28歳です。

// //従来の方法
// const message1 = "私の名前は" + name +"です。年齢は" + age +"歳です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
//
// function func1(str){
//   return str;
// };
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// //アロー関数
// //const func2 = (str) => str;
// //もしくは
// const func2 = (str) =>{
//   return str;
// };
// console.log(func2("func2です"));

// // const func3 =(num1,num2) =>{
// //   return num1 + num2;
// // };
// //もしくは
// const func3 =(num1,num2) =>num1 +num2;
// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "とまと",
//   age: 28,
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age} = myProfile;

// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["とまと",28];

// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `俺の名前は${name}だ。年齢は${age}だ！`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
//nameの初期設定で「ゲスト」と入力しておく
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("すいか");
// sayHello();

/**
 * スプレッド構文 ...
 */
