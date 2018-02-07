# Docker

## 基本概念

* 镜像（Image）
* 容器（Container）
* 仓库（Repository）

## 命令总结

* docker pull...
* docker image ls         //列出镜像
* docker system df        //查看镜像、容器、数据卷所占用的空间。
* docker image ls -f dangling=true //列出都为none的image
* docker image prune      //none就随便删呗，占内存
* docker image rm xxxx    //删除镜像
* docker image rm $(docker image ls -q redis)   //用 docker image ls 命令来配合删除、-q 产生出指定范围的 ID 列表

## 操作容器

* docker run -t -i ubuntu:14.04 /bin/bash
  * -t 让Docker分配一个伪终端（pseudo-tty）并绑定到容器的标准输入上
  * -i 让容器的标准输入保持打开