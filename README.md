# Koa-mongo-cli

### 启动mongo 

>mongod --dbpath /Users/hebin/Desktop/tempdata

>mongod --dbpath [数据路径]

### 启动rides
>redis-server

### 介绍
>使用koa+mongodb开发NodeJS后端服务器脚手架

#### api接口文件夹说明
> 此文件夹放置前台请求的接口模块
> 小项目的话，可以只有一级路由，也就是一个接口一个路由文件（接口名和路由名相同）
> 大项目的话，可能会存在子路由，可以分出子路由文件夹，或者一个路由文件中编写多个子路由的代码
> 涉及到接口安全性问题：一般不做开放型接口，通过token判断登陆状态。只有登陆后接口才能跑通，否则返回403错误（请求被拒绝）
> 若token失效，则返401错误