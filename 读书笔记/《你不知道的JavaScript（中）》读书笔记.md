
## string

翻转reverse() string没有，array有。

## number

* toExponential()  以指数形式输出
* toFixed()  带有多少位小数
* toPrecision()  有多少有效数字去显示这个值

```JavaScript
var a = 5E10;
a;					// 50000000000
a.toExponential();	// "5e+10"
```

```JavaScript
var a = 42.59;

a.toFixed( 0 ); // "43"
a.toFixed( 1 ); // "42.6"
a.toFixed( 2 ); // "42.59"
a.toFixed( 3 ); // "42.590"
a.toFixed( 4 ); // "42.5900"
```

```JavaScript
var a = 42.59;

a.toPrecision( 1 ); // "4e+1"
a.toPrecision( 2 ); // "43"
a.toPrecision( 3 ); // "42.6"
a.toPrecision( 4 ); // "42.59"
a.toPrecision( 5 ); // "42.590"
a.toPrecision( 6 ); // "42.5900"
```

如果你直接用number去访问这些方法，你必须要注意一点：

`.` 在数字中代表的是在这之后为小数，而在js里它代表了引用，所以下面这样会导致错误：

```JavaScript
42.toFixed(3); 			//SyntaxError
//我们需要这样写

(42).toFixed(3);		//42.000
0.42.toFixed( 3 );	// "0.420"

//还有个很奇怪的,第一眼会让人觉得很怪
42..toFixed( 3 );	// "42.000"

//还有这样，多了个空格
42 .toFixed(3); 	// "42.000" 
```

测试一个值是否是整数，你可以使用ES6定义的`Number.isInteger(..)`

32位（有符号）整数

因为`|`位操作符仅仅对32位值起作用（意味着它可以只关注32位，而其他的位将被丢掉）

### `void`操作符

```JavaScript
console.log(void a); //	undefined
```

`NaN`是一种“哨兵值”（一个被赋予了特殊意义的普通的值），它代表`number`集合内的一种特殊的错误情况。这种错误情况实质上是：“我试着进行数学操作但是失败了，而这就是失败的`number`结果。”

```JavaScript
var a = 2 / "foo";

a == NaN;	// false
a === NaN;	// false
```

检测是否为NaN：

```JavaScript
var a = 2 / "foo";
var b = "foo";

a; // NaN
b; // "foo"

window.isNaN( a ); // true
window.isNaN( b ); // true -- 噢!
//但是有个坑，我们可以用es6的方法
var a = 2 / "foo";
var b = "foo";

Number.isNaN( a ); // true
Number.isNaN( b ); // false -- 咻!
```

在ES6中，有一个新工具可以用于测试两个值的绝对等价性，而没有任何这些例外。它称为`Object.is(..)`:

```JavaScript
var a = 2 / "foo";
var b = -3 * 0;

Object.is( a, NaN );	// true
Object.is( b, -0 );		// true

Object.is( b, 0 );		// false 
```

### 使用`toString()`检测对象类型

```JavaScript
Object.prototype.toString.call( "abc" );	// "[object String]"
Object.prototype.toString.call( 42 );		// "[object Number]"
Object.prototype.toString.call( true );		// "[object Boolean]"
```



```JavaScript
var a = new Array( 3 );
var b = [ undefined, undefined, undefined ];
var c = [];
c.length = 3;

a;			//(3) [empty × 3]
b;			//(3) [undefined, undefined, undefined]
c;			//(3) [empty × 3]
```

JavaScript为基本类型提供了对象包装器，被称为原生类型（`String`，`Number`，`Boolean`，等等）。这些对象包装器使这些值可以访问每种对象子类型的恰当行为（`String#trim()`和`Array#concat(..)`）。

如果你有一个像`"abc"`这样的简答基本类型标量，而且你想要访问它的`length`属性或某些`String.prototype`方法，JS会自动地“封箱”这个值（用它所对应种类的对象包装器把它包起来），以满足这样的属性/方法访问。



## 强制转换



两种强制转换的方式：

```JavaScript
var a = 42;

var b = a + "";			// 隐含强制转换

var c = String( a );	// 明确强制转换
```

特别关注于：

* `ToString`

  * ```
    var a = [1,2,3];

    a.toString(); // "1,2,3"
    ```

* `JSON.stringify(value[, replacer [, space]])`

  * ```JavaScript
    JSON.stringify( 42 );	// "42"
    JSON.stringify( "42" );	// ""42"" （一个包含双引号的字符串）
    JSON.stringify( null );	// "null"
    JSON.stringify( true );	// "true"
    ```

* `ToNumber`

* `ToBoolean`

  * ```JavaScript
    var a = {
    	valueOf: function(){
    		return "42";
    	}
    };

    var b = {
    	toString: function(){
    		return "42";
    	}
    };

    var c = [4,2];
    c.toString = function(){
    	return this.join( "" );	// "42"
    };

    Number( a );			// 42
    Number( b );			// 42
    Number( c );			// 42
    Number( "" );			// 0
    Number( [] );			// 0
    Number( [ "abc" ] );	// NaN

    //JS中number就是number，而boolean就是boolean
    ```

* `ToPrimitive`


### “falsy”值列表：

- `undefined`
- `null`
- `false`
- `+0`, `-0`, and `NaN`
- `""`

"truthy":

**任何没有明确地存在于falsy列表中的东西，都是truthy**。



```JavaScript
var a = "false";
var b = "0";
var c = "''";

var d = Boolean( a && b && c );

d;		//true

//Why???
因为d所表示的东西都不在falsy列表里！
```

再来看一个

```JavaScript
var a = [];				// 空数组 -- truthy 还是 falsy?
var b = {};				// 空对象 -- truthy 还是 falsy?
var c = function(){};	// 空函数 -- truthy 还是 falsy?

var d = Boolean( a && b && c );

d;			//true
```

尽管它们看起来像，但是`[]`，`{}`，和`function(){}` *不在* falsy列表中，因此它们是truthy值。

string  <--> number

```JavaScript
var a = 42;
var b = String( a );

var c = "3.14";
var d = Number( c );

b; // "42"
d; // 3.14
```

一元`+`是一个 *明确的* 强制转换形式

```JavaScript
var b = 5.14;
var c = 5 + +b;
c;		//10.14
```



### ~

```JavaScript
var b = ~~49.55555;
b;		//49

var a = ~~-49.8888;
a;		//-49

Math.floor( -49.8888 );	// -50
//所以～～在负数上的工作的方式与Math.floor不一样。
```



第一个`~`实施`ToInt32`“强制转换”并进行按位取反，然后第二个`~`进行另一次按位取反，将每一个比特位都翻转回原来的状态。于是最终的结果就是`ToInt32`“强制转换”（也叫截断）。

### ！

`!!`双否定操作符进行`boolean`强制转换，因为第二个`!`将会把它翻转回原本的true或false：

```JavaScript
var a = "0";
var b = [];
var c = {};

var d = "";
var e = 0;
var f = null;
var g;

!!a;	// true
!!b;	// true
!!c;	// true

!!d;	// false
!!e;	// false
!!f;	// false
!!g;	// false
```



```JavaScript
var a = 42;
var b = a + "";

b; // "42"
```

```JavaScript
var a = "3.14";
var b = a - 0;

b; // 3.14
```

```JavaScript
var a = [3];
var b = [1];

a - b; // 2
```

`-`操作符是仅为数字减法定义的。



对于`||`操作符，如果测试结果为`true`，`||`表达式就将 *第一个操作数* 的值（`a`或`c`）作为结果。如果测试结果为`false`，`||`表达式就将 *第二个操作数* 的值（`b`）作为结果。

相反地，对于`&&`操作符，如果测试结果为`true`，`&&`表达式将 *第二个操作数* 的值（`b`）作为结果。如果测试结果为`false`，那么`&&`表达式就将 *第一个操作数* 的值（`a`或`c`）作为结果。

```JavaScript
a || b;
// 大体上等价于：
a ? a : b;

a && b;
// 大体上等价于：
a ? b : a;
```



`==`允许在等价性比较中进行强制转换，而`===`不允许强制转换”



1. 如果Type(x)是Number而Type(y)是String， 返回比较x == ToNumber(y)的结果。
2. 如果Type(x)是String而Type(y)是Number， 返回比较ToNumber(x) == y的结果。
3. 如果Type(x)是Boolean， 返回比较 ToNumber(x) == y 的结果。
4. 如果Type(y)是Boolean， 返回比较 x == ToNumber(y) 的结果。
5. 如果x是null而y是undefined，返回true。
6. 如果x是undefined而y是null，返回true。
7. 如果Type(x)是一个String或者Number而Type(y)是一个Object， 返回比较 x == ToPrimitive(y) 的结果。
8. 如果Type(x)是一个Object而Type(y)是String或者Number， 返回比较 ToPrimitive(x) == y 的结果。



```JavaScript
42 == "43";							// false
"foo" == 42;						// false
"true" == true;						// false

42 == "42";							// true
"foo" == [ "foo" ];					// true
```



```JavaScript
"0" == false;			// true -- 噢！
false == 0;				// true -- 噢！
false == "";			// true -- 噢！
false == [];			// true -- 噢！
"" == 0;				// true -- 噢！
"" == [];				// true -- 噢！
0 == [];				// true -- 噢！

这个列表中7个项目的4个与== false比较有关，我们早先说过你应当 总是，总是 避免的。
```



```JavaScript
"" == 0;				// true -- 噢！
"" == [];				// true -- 噢！
0 == [];				// true -- 噢！
```

1. 如果比较的任意一边可能出现`true`或者`false`值，那么就永远，永远不要使用`==`。
2. 如果比较的任意一边可能出现`[]`，`""`，或`0`这些值，那么认真地考虑不使用`==`。



## 文法

```JavaScript
var a = 3 * 6;		//声明语句（declaration statments）
var b = a;			//赋值语句（assignment expressions）
b;					//赋值表达式（expression statement）
```

```
[] + {}; // "[object Object]"
//+{} 被翻译成一个空的object， 
//[]被强制转换为"",所以{}也会被强制转化为一个string： "[object Object]"

{} + []; // 0
//+[]是一个将[]明确强制转换为number，值为0。 {}则被翻译成{}空代码块。
```



`？：`是右结合，

`&&`和`||`是左结合。

优先级

`&&` > `||` > `?:`

## 异步

### 回调

首先，我们的大脑用顺序的，阻塞的，单线程的语义方式规划事情，但是回调使用非线性，非顺序的方式表达异步流程，这使我们正确推理这样的代码变得非常困难。不好推理的代码是导致不好的Bug的不好的代码。

我们需要一个种方法，以更同步化，顺序化，阻塞的方式来表达异步，正如我们的大脑那样。

细节：

```JavaScript
function addNumbers(x,y) {
	// + 操作符使用强制转换重载为字符串连接
	// 所以根据传入参数的不同，这个操作不是严格的安全。
	return x + y;
}

addNumbers( 21, 21 );	// 42
addNumbers( 21, "21" );	// "2121"

//这样是不是太不安全了？？

//我们可以这样：

function addNumbers(x, y) {
  if(typeof x != "number" || typeof y != "number){
    throw Error("不是number");
  }
  return x + y;
}

//甚至我们可以这样：

function addNumbers(x, y) {
  x = Number(x);
  y = Number(y);

  return x + y;
}

```
所以在回调中我们应该也要做出很多判断：

```JavaScript

function timeoutify(fn,delay) {
	var intv = setTimeout( function(){
			intv = null;
			fn( new Error( "Timeout!" ) );
		}, delay )
	;

	return function() {
		// 超时还没有发生？
		if (intv) {
			clearTimeout( intv );
			fn.apply( this, [ null ].concat( [].slice.call( arguments ) ) );
		}
	};
}

// 使用“错误优先”风格的回调设计
function foo(err,data) {
	if (err) {
		console.error( err );
	}
	else {
		console.log( data );
	}
}

ajax( "http://some.url.1", timeoutify( foo, 500 ) );
```

```javascript
var p3 = new Promise( function(resolve,reject){
	resolve( "B" );
} );

var p1 = new Promise( function(resolve,reject){
	resolve( p3 );
} );

var p2 = new Promise( function(resolve,reject){
	resolve( "A" );
} );

p1.then( function(v){
	console.log( v );
} );

p2.then( function(v){
	console.log( v );
} );

// A B  <-- 不是你可能期望的 B A

```

思考下以下代码有没有方法能写得更好？
```javascript
var p = Promise.resolve( 21 );

var p2 = p.then( function(v){
	console.log( v );	// 21

	// 使用值`42`完成`p2`
	return v * 2;
} );

// 在`p2`后链接
p2.then( function(v){
	console.log( v );	// 42
} );

var p = Promise.resolve( 21 );

p
.then( function(v){
	console.log( v );	// 21

	// 使用值`42`完成被链接的promise
	return v * 2;
} )
// 这里是被链接的promise
.then( function(v){
	console.log( v );	// 42
} );
```
### Promise API概览

* new Promise(..)构造器

  ```javascript
    var p = new Promise( function(resolve,reject){
    // `resolve(..)`给解析/完成的promise
    // `reject(..)`给拒绝的promise
    } );
  ```
* Promise.resolve(..) 和 Promise.reject(..)
  ```javascript
  var p1 = new Promise( function(resolve,reject){
	reject( "Oops" );
  } );

  var p2 = Promise.reject( "Oops" );
  ```
* then(..) 和 catch(..)
  ```javascript
  p.then( fulfilled );

  p.then( fulfilled, rejected );

  p.catch( rejected ); // 或者`p.then( null, rejected )`
  ```
* Promise.all([ .. ]) 和 Promise.race([ .. ])
  > 对于Promise.all([ .. ])，为了被返回的promise完成，所有你传入的promise都必须完成.
  >
  > 对于Promise.race([ .. ])，只有第一个解析（成功或拒绝）的promise会“胜出”，而且不论解析的结果是什么，都会成为被返回的promise的解析结果。