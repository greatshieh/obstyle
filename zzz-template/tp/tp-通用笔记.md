---

<%-*
let filename
if(tp.file.title.includes("未命名") || tp.file.title.toLowerCase().includes("untitled")){
  filename = await tp.system.prompt("请输入笔记名称")
}
await tp.file.rename(filename)
-%>


<%-*
await tp.file.rename(filename)
// 获取所有文件夹
let folders = this.app.vault.getAllLoadedFiles().filter(i => i.children).map(folder => folder.path);
// 排除特定文件夹
let newFolders = folders.filter(e=>e.search(/attachment|template|image|图书馆/)===-1)
let dir = await tp.system.suggester(newFolders,newFolders,false,"保存位置")

let filePath = `${dir}/${filename}`
await tp.file.move(filePath)

-%>
UID: <% tp.date.now("YYYYMMDDHHmmss") %> 
banner: "zzz-attachment/banners/wallhaven-n6v69l_1280x720.png"
aliases: 
tags: 
author: 谢伟
created: <% tp.date.now("YYYY-MM-DD") %>
Update: <%+ tp.file.last_modified_date("YYYY-MM-DD dddd HH:mm:ss") %>
---



