---
cssclass: cards, cards-cover, cards-2-3, table-max
obsidianUIMode: preview
banner: "zzz-attachment/banners/wallhaven-39qjjd_2560x1080.png"
banner_y: 0.5
---
```dataview
TABLE WITHOUT ID ("![](" + cover + ")") as 封面,file.link as 书名, author as 作者,publish as 出版社,rating AS 推荐值, status AS 状态, category AS 分类
from "001-library" and #book sort category
```
