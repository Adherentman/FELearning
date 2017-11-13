---
title: 《图解HTTP》读书笔记
date: 2017-11-07 14:21
comments: true
layout: post
tags: 读书笔记
categories: 读书笔记
---
# 图解HTTP

## TCP/IP协议族

* TCP/IP协议族按层次分别分为四层
  * 应用层
  * 传输层
  * 网络层
  * 数据链路层

<!--more-->

![TCP/IP通信传输流](http://ozar6ogjb.bkt.clouddn.com/TCPIP%E5%88%86%E5%B1%82.png)

URI, URL, URN

* “A Uniform Resource Identifier (URI) 是一个紧凑的字符串用来标示抽象或物理资源。”
* URL， URN是URI的子集，除了确定一个资源，还提供一种定位该资源的主要访问机制
* 换句通俗易懂的话说：
* URN作用就好像一个人的名字，URL就像一个人的地址。再换句话说：URN确定了东西的身份，URL提供了找到他的方式。

## 状态码的类别

|     | 类别 | 原因短语 |
| :-- | :-- | :-- |
| 1xx | Informational(信息状态码) | 接受的请求正在处理 |
| 2xx | Success(成功状态码) | 请求正常处理完毕 |
| 3xx | Redirection(重定向状态码) | 需要进行附加操作以完成请求 |
| 4xx | Client Error(客户端错误状态码) | 服务器无法处理请求 |
| 5xx | Server Error(服务器错误状态代码) | 服务器处理请求出错 |

最具有代表性的14个状态码：

_**2xx成功**_

* 200 OK
  * 表示从客户端发来的请求在服务器端被正常处理了。
* 204 No Content
  * 代表服务器接受的请求已成功处理，但在返回的响应报文中不含实体的主体部分。
* 206 Partial Content
  * 表示客户端进行了范围请求，而服务器成功执行了这部分的GET请求。

_**3xx重定向**_

当301， 302， 303响应状态码返回时，几乎所有的浏览器都会把POST改成GET，并删除请求报文内的主体，之后请求会自动再次发送。

* 301 Moved Permanently
  * 永久性重定向。
* 302 Found
  * 临时性重定向。
* 303 See Other
  * 由于请求对应的资源存在着另一个URI，应使用GET方法定向获取请求的资源。
* 304 Not Modified
  * 表示客户端发送附带条件的请求时，服务器端允许请求访问资源，但因发生请求为满足条件的情况后，直接返回304 Not Modified（服务器端资源未改变，可直接使用客户端未过期的缓存）。
* 307 Temporary Redirect
  * 临时重定向。该状态码与302有相同的含义，但是307不会从POST变成GET。

_**4xx客户端错误**_

* 400 Bad Request
  * 表示请求报文中存在语法错误。
* 401 Unauthorized
  * 表示发送的请求需要有通过HTTP认证的认证信息。
* 403 Forbidden
  * 表明对请求资源的访问被服务器拒绝了。
* 404 Not Found
  * 表明服务器上没有请求的资源。

_**5xx服务器错误**_

* 500 Internal Server Error
  * 表明服务器在执行请求时发生了错误。
* 503 Service Unavailbale
  * 表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。