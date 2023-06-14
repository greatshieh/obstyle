# Callout和Admonition

## Callout

`Callouts` 是obsian的一个内置功能，不需要安装第三方插件即可实现。
 
`Callouts` 是在markdown的引用基础上实现的。一共有12种默认的风格，也可以自定义风格。

`Callouts` 的基本语法是:
```
>[!note]+ | - 标题
>内容
```

其中，`[!note]`中的`note`是 `Callouts`的类型。`+`或`-`是可选项。`+`表示展开, `-`表示折叠。没有符号 `Callouts`将不会显示折叠，默认展开。如果只有标题，没有内容，`Callouts`只显示标题行。如果没有标题，将默认显示 `Callouts` 的类型名称。

>[!tip]+ 展开内容
>默认展开内容

>[!tip]- 折叠内容
>默认折叠内容

>[!tip] 没有符号
>不能折叠

>[!tip]+ 只有标题

>[!tip]
>tip




### 默认Callouts风格

>[!note]

>[!abstract] *==summary==*, **==tldr==**

>[!summary]

>[!tldr]

>[!info]

>[!todo]

>[!tip] 别名: *==hint==*, **==important==**

>[!hint]

>[!important]

>[!success]-
>别名: *==check==*, **==done==**

>[!check]

>[!done]

>[!question] 别名: *==help==*, **==faq==**

>[!help]

>[!faq]

>[!warning] *==caution==*, **==attention==**

>[!caution]

>[!attention]

>[!failure] 别名: *==fail==*, **==missing==**

>[!fail]

>[!missing]

>[!danger] 别名: *==error==*

>[!error]

>[!bug]

>[!example]

>[!quote] 别名: *==cite==*

>[!cite]

### 自定义Callouts

#### 全透明blank

>[!blank]+ 全透明blank
>全透明blank

#### 字体模糊

>[!cloze]
>字体模糊

#### 看板样式

>[!kanban] Callouts实现的看板样式
>- 看板1
>- 看板2
>- 看板3
>- 看板4
>- 看板5

#### 图书信息

> [!bookinfo]+ **《140亿年宇宙演化全史》**
> ![bookcover|200](https://wfqqreader-1252317822.image.myqcloud.com/cover/891/29629891/t6_29629891.jpg)
>
| 属性   | 内容                                       |
|:------ |:------------------------------------------ |
| 作者   | 尼尔·德格拉斯·泰森, 唐纳德·戈德史密斯                           |
| 出版年 | 2019年8月                      |
| 出版社 | 北京联合出版公司                          |
| 来源   | [140亿年宇宙演化全史](https://weread.qq.com/web/bookDetail/a14327e071c41dc3a14f66e) |
| 推荐值   | 92.6%                           |
| 字数   | 166,497                        |
| 分类   | 科学技术-科学科普                        |

#### 自定义宽度

支持10%~100%的宽度调整，步长5%。

同时支持 `left`， `right`， `center` 方式调整位置

> [!note|left 30%] left 30% 

> [!tips left 30%] left 30% 

>[!note|30%] left 30%

#### 时间线样式

> [!timeline] 演示
>> 左栏目内容左栏目内容左栏目内容左栏目内容左栏目内容左栏目内容
>--- 
>- 右栏目内容右栏目内容
>- 可以用列表 等md语法 但同类型格式才能排布一起
>
>> 需要右栏目的话 多加一个引用符号即可
>
>右栏目跟左栏目内容需要空一行进行分割
>这样就会识别
>>这是左栏目内容
>
>右栏目内容
>> 左边内容输入完回车两次即可
>
>右栏目内容
>右边内容
>支持复杂的md语法 比如下面的例子

## Admonition

### 分栏显示

分栏显示需要在 `Admonition` 插件中添加新的类型，分栏显示分为三种 `flex`，`col2`，`col3`

#### 固定分栏

```ad-col2
title: col2 分两栏
collapse: open
color: 89,78,126
- [ ] to-do      `- [ ]`  
- [/] incomplete `- [/]`  
- [x] done       `- [x]`  
- [-] canceled   `- [-]`  
- [>] forwarded  `- [>]`  
- [<] scheduling `- [<]`  
- [?] question   `- [?]`  
- [!] important  `- [!]`  
- [*] star       `- [*]`  
- ["] quote      `- ["]`  
- [l] location   `- [l]`  
- [b] bookmark   `- [b]`  
- [i] information`- [i]`  
- [s] savings    `- [S]`  
- [I] idea       `- [I]`  
- [p] pros       `- [p]`  
- [c] cons       `- [c]`  
- [f] fire       `- [f]`  
- [k] key        `- [k]`  
- [w] win        `- [w]`  
- [u] up         `- [u]`  
- [d] own        `- [d]`
- [#] Tags       `- [#]`
- [r] rules      `- [r]`
```

```ad-col3
title: col3 分三栏
collapse: open
color: 13, 127, 227
- [ ] to-do      `- [ ]`  
- [/] incomplete `- [/]`  
- [x] done       `- [x]`  
- [-] canceled   `- [-]`  
- [>] forwarded  `- [>]`  
- [<] scheduling `- [<]`  
- [?] question   `- [?]`  
- [!] important  `- [!]`  
- [*] star       `- [*]`  
- ["] quote      `- ["]`  
- [l] location   `- [l]`  
- [b] bookmark   `- [b]`  
- [i] information`- [i]`  
- [s] savings    `- [S]`  
- [I] idea       `- [I]`  
- [p] pros       `- [p]`  
- [c] cons       `- [c]`  
- [f] fire       `- [f]`  
- [k] key        `- [k]`  
- [w] win        `- [w]`  
- [u] up         `- [u]`  
- [d] own        `- [d]`
- [#] Tags       `- [#]`
- [r] rules      `- [r]`
```

```ad-col4
title: col4 分三栏
collapse: open
color: 13, 127, 227
- [ ] to-do      
- [/] incomplete   
- [x] done         
- [-] canceled     
- [>] forwarded    
- [<] scheduling   
- [?] question     
- [!] important    
- [*] star         
- ["] quote        
- [l] location     
- [b] bookmark     
- [i] information  
- [s] savings      
- [I] idea         
- [p] pros         
- [c] cons         
- [f] fire         
- [k] key          
- [w] win          
- [u] up           
- [d] own        
- [#] Tags       
- [r] rules      
```

````ad-col3
title: 手动分栏（*==ad-==*实现）
collapse: open
color: 215,155,255
```ad-blank

> **==工作计划==**

- [x] 数据库迁移
- [ ] 网页架构设计
- [i] 编写api文档
```
```ad-blank

> **==学习计划==**

- [*] 《Go专家编程》第三章
- [?] `Golang` 并发编程
```

```ad-blank
> **==锻炼计划==**

- [x] 五公里
- [ ] 平板支撑 3 分钟
- [ ] 拉伸
```
````

```ad-col3
title: 手动分栏（`<div></div>`实现）
collapse: open
color: 68, 201, 219
<div>

**==工作计划==**
- [x] 数据库迁移
- [ ] 网页架构设计
- [x] 编写api文档
</div>

<div>

**==学习计划==**
- [x] 《Go专家编程》第三章
- [ ] `Golang` 并发编程
</div>

<div>

**==锻炼计划==**
- [x] 五公里
- [ ] 平板支撑 3 分钟
- [ ] 拉伸
</div>

```

#### 自适应分栏

````ad-flex
title: ad-flex分栏（ad-blank实现）
collapse: open
color: 41, 187, 22
```ad-note
title: **==工作计划==**
- [x] 数据库迁移
- [ ] 网页架构设计
- [x] 编写api文档
```
```ad-note
title: **==学习计划==**
- [x] 《Go专家编程》第三章
- [ ] `Golang` 并发编程
```
```ad-note
title: **==锻炼计划==**
- [x] 五公里
- [ ] 平板支撑 3 分钟
- [ ] 拉伸
```
```ad-note
title: **==追剧==**
- [ ] 罪恶黑名单
- [x] 海豹突击队
- [ ] 权力的游戏
```
````


```ad-flex
title: ad-flex分栏（div实现）
collapse: open
color: 68, 201, 219
<div>

>**==工作计划==**
- [x] 数据库迁移
- [ ] 网页架构设计
- [x] 编写api文档
</div>

<div>

>**==学习计划==**
- [x] 《Go专家编程》第三章
- [ ] `Golang` 并发编程
</div>

<div>

>**==锻炼计划==**
- [x] 五公里
- [ ] 平板支撑 3 分钟
- [ ] 拉伸

</div>

<div>

>**==追剧==**
- [ ] 罪恶黑名单
- [x] 海豹突击队
- [ ] 权力的游戏
</div>
```


>[!important] `<div>`和内容之间需要空一行

### 伪看板

```ad-kanban

-  [ ] 这是一个项目列表
	- [ ] 这是子项目1
	- [ ] 这是子项目2
	- [ ] 这是子项目3
-  [ ] 这是另外一个项目
	- [ ] 任务1
	- [ ] 任务2
```

> [!kanban]+ Callout 看板测试
>- [ ] callout 看板测试
>	- [ ] 3333
>	- [ ] 3333
>		- [ ] 333
>		- [ ] 333
>- [ ] 第二个菜单22
>	- [ ] 子列表
>- [ ] 第三个菜单 最好在源码模式下编辑
>	- [ ] 测试测333
>	- [ ] 测试测444
>- [ ] 22222
>- [ ] 2234444
>- 555555
>- 777777