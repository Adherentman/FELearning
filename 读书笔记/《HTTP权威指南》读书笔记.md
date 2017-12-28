## URL语法

```
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