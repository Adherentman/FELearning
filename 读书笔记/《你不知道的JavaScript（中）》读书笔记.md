
## string

翻转reverse() string没有，array有。

## number

* toExponential()  以指数形式输出
* toFixed()  带有多少位小数
* toPrecision()  有多少有效数字去显示这个值

```
var a = 5E10;
a;					// 50000000000
a.toExponential();	// "5e+10"
```

```
var a = 42.59;

a.toFixed( 0 ); // "43"
a.toFixed( 1 ); // "42.6"
a.toFixed( 2 ); // "42.59"
a.toFixed( 3 ); // "42.590"
a.toFixed( 4 ); // "42.5900"
```

```
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

```
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

```
console.log(void a); //	undefined
```

`NaN`是一种“哨兵值”（一个被赋予了特殊意义的普通的值），它代表`number`集合内的一种特殊的错误情况。这种错误情况实质上是：“我试着进行数学操作但是失败了，而这就是失败的`number`结果。”

```
var a = 2 / "foo";

a == NaN;	// false
a === NaN;	// false
```

检测是否为NaN：

```
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

```
var a = 2 / "foo";
var b = -3 * 0;

Object.is( a, NaN );	// true
Object.is( b, -0 );		// true

Object.is( b, 0 );		// false 
```

### 使用`toString()`检测对象类型

```
Object.prototype.toString.call( "abc" );	// "[object String]"
Object.prototype.toString.call( 42 );		// "[object Number]"
Object.prototype.toString.call( true );		// "[object Boolean]"
```



```
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

```
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

  * ```
    JSON.stringify( 42 );	// "42"
    JSON.stringify( "42" );	// ""42"" （一个包含双引号的字符串）
    JSON.stringify( null );	// "null"
    JSON.stringify( true );	// "true"
    ```

* `ToNumber`

* `ToBoolean`

  * ```
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



```
var a = "false";
var b = "0";
var c = "''";

var d = Boolean( a && b && c );

d;		//true

//Why???
因为d所表示的东西都不在falsy列表里！
```

再来看一个

```
var a = [];				// 空数组 -- truthy 还是 falsy?
var b = {};				// 空对象 -- truthy 还是 falsy?
var c = function(){};	// 空函数 -- truthy 还是 falsy?

var d = Boolean( a && b && c );

d;			//true
```

尽管它们看起来像，但是`[]`，`{}`，和`function(){}` *不在* falsy列表中，因此它们是truthy值。

string  <--> number

```
var a = 42;
var b = String( a );

var c = "3.14";
var d = Number( c );

b; // "42"
d; // 3.14
```

一元`+`是一个 *明确的* 强制转换形式

```
var b = 5.14;
var c = 5 + +b;
c;		//10.14
```



### ~

```
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

```
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



```
var a = 42;
var b = a + "";

b; // "42"
```

```
var a = "3.14";
var b = a - 0;

b; // 3.14
```

```
var a = [3];
var b = [1];

a - b; // 2
```

`-`操作符是仅为数字减法定义的。



对于`||`操作符，如果测试结果为`true`，`||`表达式就将 *第一个操作数* 的值（`a`或`c`）作为结果。如果测试结果为`false`，`||`表达式就将 *第二个操作数* 的值（`b`）作为结果。

相反地，对于`&&`操作符，如果测试结果为`true`，`&&`表达式将 *第二个操作数* 的值（`b`）作为结果。如果测试结果为`false`，那么`&&`表达式就将 *第一个操作数* 的值（`a`或`c`）作为结果。

```
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



```
42 == "43";							// false
"foo" == 42;						// false
"true" == true;						// false

42 == "42";							// true
"foo" == [ "foo" ];					// true
```



```
"0" == false;			// true -- 噢！
false == 0;				// true -- 噢！
false == "";			// true -- 噢！
false == [];			// true -- 噢！
"" == 0;				// true -- 噢！
"" == [];				// true -- 噢！
0 == [];				// true -- 噢！

这个列表中7个项目的4个与== false比较有关，我们早先说过你应当 总是，总是 避免的。
```



```
"" == 0;				// true -- 噢！
"" == [];				// true -- 噢！
0 == [];				// true -- 噢！
```

1. 如果比较的任意一边可能出现`true`或者`false`值，那么就永远，永远不要使用`==`。
2. 如果比较的任意一边可能出现`[]`，`""`，或`0`这些值，那么认真地考虑不使用`==`。



## 文法

```
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