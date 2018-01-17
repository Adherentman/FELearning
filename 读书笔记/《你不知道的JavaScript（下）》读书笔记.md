# 《你不知道的JavaScript（下）》读书笔记

## 块儿作用域函数

```JavaScript
{
    foo();                    // 好用！

    function foo() {
        // ..
    }
}

foo();                        // ReferenceError
```

在es6中函数foo是在`{}`块儿内被声明。所以我们在外面用`foo（）`是无效的。

## 扩散/剩余（...）

```javascript
function foo(x,y,z) {
  console.log( x, y, z );
}

foo( ...[1,2,3] );      // 1 2 3
foo.apply( null, [1,2,3] );   // 1 2 3
```

```javascript
var a = [2,3,4];
var b = [ 1, ...a, 5 ];

console.log( b );     // [1,2,3,4,5]
```

## 迭代器

迭代器（iterator） 是一种结构化的模式，用于从一个信息源中以一次一个的方式抽取信息。

迭代器是一种消费数据的方法，它是组织有顺序的，相继的，基于抽取的。

```JavaScript
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]
```

next()迭代：

```JavaScript
var arr = [1,2,3];

var it = arr[Symbol.iterator]();

it.next();    // { value: 1, done: false }
it.next();    // { value: 2, done: false }
it.next();    // { value: 3, done: false }

it.next();    // { value: undefined, done: true }
```

```javascript
// 启动generator
it.next();          // { value: 1, done: false }

// 回答第一个问题
it.next( "foo" );   // { value: 2, done: false }

// 回答第二个问题
it.next( "bar" );   // { value: 3, done: false }

// 回答第三个问题
it.next( "baz" );   // "foo" "bar" "baz"
// { value: undefined, done: true }
```

其实是这样运行的：

```javascript
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
  //it.next();          // { value: 1, done: false }
    yield 1;
  //it.next( "foo" );   // { value: 2, done: false }
    yield 2;
  //it.next();    // { value: 3, done: false }
    yield 3;
  //it.next();    // { value: undefined, done: true }
};
```

### 提前完成

```JavaScript
function *foo() {
    yield 1;
    yield 2;
    yield 3;
}

var it = foo();

it.next();          // { value: 1, done: false }

it.return( 42 )；   // { value: 42, done: true }

it.next();         // { value: undefined, done: true }
```