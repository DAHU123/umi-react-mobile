# umi project

## Getting Started

Install dependencies,

```bash
$ npm 
```

Start the dev server,

```bash
$ npm start
```

> 本项目采用umi\^3+dva\^2来搭建的一套移动端开发环境，用到的技术如下列表，具体可以参考如何官方API来了解来具体了解学习：

[umi](https://umijs.org/zh-CN/docs)：开箱即用的react脚手架。

[dva](https://dvajs.com/guide/concepts.html#%E6%95%B0%E6%8D%AE%E6%B5%81%E5%90%91)：处理数据流，在redux的基础上进行了封装。

[umi-request](https://github.com/umijs/umi-request)：前后端工程师在联调接口，进行数据交互的时候用到的一个插件，是在原生的fetch上进行了一下封装，而不是在XMLhttpRequest进行封装的，这里要注意下。

[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)：把px转换成vw来做处理，本项目没有采用rem的方式，这里要格外注意。
