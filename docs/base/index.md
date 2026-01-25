## 介绍

Go语言(又称 Golang)简称 Go 是由 Google 工程师
[Robert Griesemer](https://en.wikipedia.org/wiki/Robert_Griesemer)、
[Rob Pike](https://zh.wikipedia.org/wiki/%E7%BE%85%E5%8B%83%C2%B7%E6%B4%BE%E5%85%8B)
和 [Ken Thompson](https://zh.wikipedia.org/wiki/%E8%82%AF%C2%B7%E6%B1%A4%E6%99%AE%E9%80%8A)
于 2007 年开始设计, 并于 2009 年正式开源的一种编程语言, 它旨在解决大规模软件开发中的效率问题,
同时保持代码的简洁性和可维护性

> 提炼关键字

- 三位骨灰级大佬设计
- 效率: 说明执行速度较快
- 代码简洁和可维护性: 说明语法比较简单, 是 `C-Like`
- 编译型语言 + 自动类型推导

## go 语言的特点

- 简洁语法: Go 语言设计哲学是"少即是多", 语法精简, 关键字仅有 25 个
- 高效并发: 通过 goroutine(轻量级线程) 和 channel(通信机制)提供原生并发支持
- 快速编译: 编译速度极快, 大型项目也能在秒级完成编译
- 垃圾回收: 内置内存管理, 减轻开发者负担
- 静态类型: 提供类型安全, 同时通过类型推断减少冗余代码
- 接口实现: 采用"隐式实现"方式, 不需显式声明
- 标准库丰富: 包含 HTTP、JSON、加密、测试等强大功能的标准库

## 应用场景

- 云原生应用和微服务开发
- 网络服务器和 API 服务
- DevOps 工具链(如 [Docker](https://www.docker.com/)、[podman](https://podman.io/)、[Kubernetes](https://kubernetes.io/zh-cn/docs/home/) 等都是用 Go 编写的)
- 分布式系统
- 数据库和存储系统
- 命令行工具(如最知名的 git tui客户端 [lazygit](https://github.com/jesseduffield/lazygit) 就是由Go语言开发的)

## 线程模型与高并发

Go 语言的并发模型是其最突出的特性之一, 它基于 CSP (Communicating Sequential Processes) 并发理论,
通过 goroutine 和 channel 两个核心概念实现了高效、简洁的并发编程

- Goroutine：轻量级并发原语
- Channel：通信机制
- Go 的调度核心: GMP
  - G(Goroutine): 协程, 包含执行栈、状态和上下文
  - M(Machine): 操作系统线程, 真正执行代码的实体
  - P(Processor)：逻辑处理器, 包含任务队列和资源，连接 G 和 M

Channel 是 goroutine 之间通信的管道，实现了"通过通信共享内存，而非通过共享内存通信"的理念
