## 介绍

这个章节主要学习使用 Go 编写一些非服务端数据处理程序

而是用来编写直接与用户打交道的程序入口, 由于 Go 比我之前学习的语言 JS/PHP/Python 要更底层

所以 Go 语言比他们更适合编写 cli-app / tui-app / gui-app

编译型语言, 可以直接安装编译好的二进制文件, 而不需要像 node/PHP/python 那样,

为了一个 cli-app 运行起来, 还需要安装一个对应的编程语言环境(解释器)

## CLI

Command Line Interface: 命令行界面应用, 简单来说就是命令(ls/cat/git)

- 优势: 性能高 & 跨平台移植简单
- 缺点: 纯命令需要一定的学习成本

## TUI

TUI 的全称解释有2个, 但是意思是一样的

- Text-based User Interface: 基于文本的的用户界面
- Terminal User Interface: 终端用户界面

示例的软件有: top/htop/lazygit/yazi/ranger/vifm

- 优势: 跨平台移植简单
- 缺点: 学习成本较低 & 一般就记住几个快捷键就行, 如 htop/lazygit

## GUI

Graphical User Interface: 图形化用户接口, 就是最常用的"电脑软件", 如 chrome/vscode

- 优势: 傻瓜式操作, 鼠标点击键盘输入都非常符合人类直觉
- 缺点: 移植困难 & 开发难度高
