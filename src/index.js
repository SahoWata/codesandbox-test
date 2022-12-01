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
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);

// //...のスプレッド構文を使用すると、配列を順番に処理してくれる
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;

// console.log(num1); //1
// console.log(num2); //2
// console.log(arr3); //3,4,5

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// arr6[0] =100;
// console.log(arr6); //100,20
// console.log(arr4); //10,20 arr4は影響を受けない

// const arr7 = [...arr4, ...arr5];
// console.log(arr7); //10,20,30,40

// //イコールでつないではいけない。以下駄目な例
// const arr8 =arr4;
// console.log(arr8); //10,20

// arr8[0] = 100;
// console.log(arr8); //100,20
// console.log(arr4); //100,20 arr4の値も変わってしまう

/**
 * 三項演算子
 */
//ある条件? 条件がtureの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "tureです" : "falseです";
// console.log(val1); //tureです

//const num = 1300;
//console.log(num.toLocaleString()); //1,300

// const num = "1300";
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください" ;
// console.log(formattedNum); //数値を入力してください

// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です" ;
// };
// console.log(checkSum(40,90)); //100を超えています！！
