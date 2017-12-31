# 《HTTP权威指南》读书笔记

## URL语法

```html
<scheme> :// <user> : <password> @ <host> : <port> / <path>; <params> ? <query> # <frag>
```

九个部分构成通用格式。URL中最重要的3个部分是 方案（scheme）、主机（host）、路径（path）。

URL有两种方式： 一种是绝对的，一种是相对的。

相对URL：

```html
<a href="./hammers.html">
```

## HTTP报文

* 报文流
  * 术语“流入”、“流出”、“上游”、“下游”
* 报文组成部分
  * 起始行（start line）、首部（包含属性）、主体（可选、包含数据）
* 报文语法
  * 请求报文（request）、响应报文（response）

```html
<!--请求报文格式-->
<method> <request-URL> <version>
<headers>

<entity-body>

<!--响应报文格式-->
<version> <status> <reason-phrase>
<headers>

<entity-body>

<!--
方法<method> -> GET/POST/HEAD/PUT/TRACE/OPTIONS/DELETE
请求URL<request-URL>
版本<version>
状态码<status-code>
原因短语<reason-phrase>
首部<header>
实体的主体部分<entity-body>
-->
```

### 状态码

| 整体范围   | 已定义范围 | 原因短语 |
| :--: | :--: | :--: |
| 100 ~ 199 | 100 ~ 101 | 信息提示 |
| 200 ~ 299 | 200 ~ 206 | 成功 |
| 300 ~ 399 | 300 ~ 305 | 重定向 |
| 400 ~ 499 | 400 ~ 415 | 客户端错误 |
| 500 ~ 599 | 500 ~ 505 | 服务器错误 |

### 首部分类

* 通用首部
* 请求首部
* 响应首部
* 实体首部
* 扩展首部

## 状态码详解

### 100 ~ 199 ————信息状态码

#### 客户端与100 Continue

客户端应用程序只有在避免向服务器发送一个服务器无法处理或使用的大实体时，才应该使用 `100 Continue`。

#### 服务器与100 Continue

也就是，如果服务器收到客户端发来的`100 Continue`，那么它会用 `100 Continue`来响应或者一条错误码（417）来进行响应。

#### 代理与100 Continue

代理维护一些有关下一跳服务器及其所支持的HTTP版本的状态信息。这样它们就可以更好的处理收到的那些带有`100 Continue`期望的请求

### 200 ~ 299 ————成功状态码

* 200 OK
* 201 Created
* 202 Accpted
* 203 Non-Authoritative Information
* 204 No Content
* 205 Reset Content
* 206 Partial Content

### 300 ~ 399 ————重定向状态码

重定向状态码要么告知客户端使用替代位置来访问它们所感兴趣的资源，要么就提供一个替代的响应而不是资源的内容。

* 300 Multiple Choices
* 301 Moved Permanently
* 302 Found
* 303 See Other
* 304 Not Modified
* 305 Use Proxy
* 306 (未使用)
* 307 Temporary Redirect

在HTTP/1.1中，用307状态码取代302状态码来进行临时重定向。这样服务器就可以将302状态码保留起来，为HTTP/1.0客户端使用。

### 400 ~ 499 ————客户端错误状态码

* 400 Bad Request
* 401 Unauthorized
* 402 Payment Required
* 403 Forbidden
* 404 Not Found
* 405 Method Not Allowed
* 406 Not Acceptable
* 407 Proxy Authentication Required
* 408 Request Timeout
* 409 Conflict
* 410 Gone
* 411 Length Required
* 412 Precondition Failed
* 413 Request Entity Too Large
* 414 Request URI Too Long
* 415 Unsupported Media Type
* 416 Requested Range Not Satisfiable
* 417 Expectation Failed

### 500 ~ 599 ————服务器错误状态码

* 500 Internal Server Error
* 501 Not Implemented
* 502 Bad Gateway
* 503 Service Unavailable
* 504 Gateway Timeout
* 505 HTTP Version Not Supported

## 首部

首部分成5个主要的类型

1. 通用首部
1. 请求首部
1. 响应首部
1. 实体首部
1. 扩展首部

## 连接管理

HTTP连接实际上就是TCP连接及其使用规则。

HTTP要传送一条**报文**时，会以流的形式将报文数据的内容通过一条打开的TCP连接按序传输。TCP收到数据流之后，会将数据流看成被称作**段**的小数据块，
并将**段**封装在IP分组中。

每个TCP段都是由IP分组承载。每个IP分组中都包括：

* 一个IP分组首部（通常20字节）
* 一个TCP段首部（通常为20字节）
* 一个TCP数据块（0个或多个字节）

IP首部包含了源和目的IP地址、长度和其他一些标记，

TCP段的首部包含了TCP端口号、TCP控制标记、以及用于数据排序和完整性检查的一些数字值。

TCP是通过端口号来保持所有这些连接持续不断地进行。

TCP相关时延：

* TCP连接建立握手;
* TCP慢启动拥塞控制;
* 数据聚集的Nagle算法;
* 用于捎带确认的TCP延迟确认算法;
* TIME_WAIT时延和端口耗尽;

提高HTTP的连接性能：

* 并行连接
  * 通过多条TCP连接发起并发的HTTP请求
* 持久连接
  * 重用TCP连接，以消除连接及关闭时延
* 管道化连接
  * 通过共享的TCP连接发起并发的HTTP请求
* 复用的连接
  * 交替传送请求和响应报文

并行连接的缺点：

* 每个事务都会打开/关闭一条新的连接，会耗费时间和带宽。
* 由于TCP慢启动特性的存在，每条新连接的性能都会有所降低。
* 可打开的并行连接数量实际上是有限的。

持久连接有两种类型：

* HTTP/1.0+ “keep-alive”连接
  * 客户端通过Connection： Keep-Alive首部请求将一条连接保持在打开
  * 如果服务器同意，那么在响应中包含相同的首部。
  * 参数timeout
  * 参数max
  * 诊断和调试，语法为： name [=value]
* HTTP/1.1 “persistent”连接
  * 它的持久连接在默认情况下是激活的，你想要关闭，除非你添加了一个Connection： close首部。

Proxy-Connection 解决代理不认识/盲目地转发Connection： Keep-Alive 和 Keep-Alive首部，它解决了客户端后面紧跟着一个**盲中继**所带来的问题——但并没有解决所有其他情况下存在的问题。

逐跳首部只与一条特定的连接有关，不能被转发。

聪明的代理可以认出Proxy-Connection，但是哑代理不行，所以如果多个代理其中有聪明也有哑就会造成Proxy-Connection也解决不了这问题。

## Web服务器

Web服务器有各种不同的形式。

* 可以在标准的计算机系统上安装并运行通用的软件Web服务器。
  * Nginx
  * Apache软件
  * 微软的Web服务器
  * sun的iPlanet
* 如果不想那么麻烦地去安装软件，可以买一台Web服务器设备，通常会是一台安装在时髦机架上的计算机，里面的软件会预装并配置好。
* 随着微处理器奇迹般地出现，有些公司甚至可以再少量计算机芯片上实现嵌入式Web服务器，使其成为完美的（便携式）消费类设备管理控制台。

Web服务器做什么

* 建立连接
* 接受请求
* 处理请求
* 访问资源
* 构建响应
* 发送响应
* 记录事务处理过程

![Web服务器做什么](http://ozar6ogjb.bkt.clouddn.com/Web%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BC%9A%E5%81%9A%E4%BB%80%E4%B9%88.jpeg)