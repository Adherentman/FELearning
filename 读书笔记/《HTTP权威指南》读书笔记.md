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
