const notice = (msg) => new Notice(msg, 5000)

module.exports = bookfromweread

let QuickAdd

async function bookfromweread(params) {
  QuickAdd = params
  const http_reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g
  const http_reg_book =
    /(http:\/\/weread.qq.com|https:\/\/weread.qq.com)((\w|=|\?|\.|\/|&|-)+)/g
  let detailurl
  const query = await QuickAdd.quickAddApi.inputPrompt("请输入微信读书网址:")

  if (!query) {
    notice("No url entered.")
    throw new Error("No url entered.")
  }

  if (!http_reg.exec(query)) {
    new Notice("复制的内容需要包含微信读书网址", 3000)
    throw new Error("No results found.")
  } else {
    detailurl = query.match(http_reg)[0]
  }

  if (http_reg_book.exec(detailurl)) {
    let bookdata = await getbookByurl(detailurl)
    if (bookdata) new Notice("图书数据获取成功！", 3000)
    QuickAdd.variables = {
      ...bookdata,
    }
  } else {
    new Notice("只能解析weread.qq.com相关网址", 3000)
    throw new Error("No results found.")
  }
}

function isNotEmptyStr(s) {
  s = s.trim()
  if (typeof s == "string" && s.length > 0) {
    return true
  }
  return false
}

async function getbookByurl(url) {
  let page = await urlGet(url)

  if (!page) {
    notice("No results found.")
    throw new Error("No results found.")
  }
  let p = new DOMParser()
  let doc = p.parseFromString(page, "text/html")
  let $ = (s) => doc.querySelector(s)
  let $2 = (z) => doc.querySelectorAll(z)
  let author = ""
  let bookname = ""
  let intro = ""
  let cover = ""
  let publish = ""
  let publishyear = ""
  let category = ""
  let wordcount = ""
  let wereadurl = ""
  let rating = ""

  bookname = $("h2.bookInfo_right_header_title_text").innerText
  author = $("a.bookInfo_author").innerText.split(" ").join(", ")
  intro = $("div.bookInfo_intro").innerText.trim()
  cover = $("img.wr_bookCover_img").getAttribute("src")
  wereadurl = $("meta[property='og:url']")?.content

  if ($("div.book_ratings_header>span") !== null) {
    rating = $("div.book_ratings_header>span").innerText.trim()
  } else {
    rating = $("span.book_rating_item_label_number").innerText.trim()
  }

  let pub_line_list = $2("span.introDialog_content_pub_title")

  for (var i = 0; i < pub_line_list.length; i++) {
    if (pub_line_list[i].innerText === "出版社") {
      publish = pub_line_list[i].nextElementSibling.innerText
    } else if (pub_line_list[i].innerText === "出版时间") {
      publishyear = pub_line_list[i].nextElementSibling.innerText
    } else if (pub_line_list[i].innerText === "分类") {
      category = pub_line_list[i].nextElementSibling.innerText
    } else {
      wordcount = pub_line_list[i].nextElementSibling.innerText
    }
  }

  let bookinfo = {}

  bookinfo.bookname = bookname
  bookinfo.author = author
  bookinfo.intro = intro
  bookinfo.wereadurl = wereadurl
  bookinfo.category = category
  bookinfo.publish = publish
  bookinfo.publishyear = publishyear
  bookinfo.wordcount = wordcount
  bookinfo.rating = rating
  bookinfo.filename = bookname
    .replace(
      /(^\s*)|\^|\.|\*|\?|\!|\/|\\|\$|\#|\&|\||,|\[|\]|\{|\}|\(|\)|\-|\+|\=|(\s*$)/g,
      ""
    )
    .replace(/[\\\\/:*?\"<>|]/g, "_")
  bookinfo.cover = cover
  bookinfo.type = "book"
  for (var i in bookinfo) {
    if (bookinfo[i] == "" || bookinfo[i] == null) {
      bookinfo[i] = "未知"
    }
  }
  return bookinfo
}

async function urlGet(url) {
  let finalURL = new URL(url)
  const res = await request({
    url: finalURL.href,
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.100.4758.11 Safari/537.36",
    },
  })

  return res
}
