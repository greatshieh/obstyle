const token = "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"

stargazers()

async function stargazers() {
  let finalURL = new URL("https://api.github.com/user/starred")

  const res = await request({
    url: finalURL.href,
    method: "GET",
    cache: "no-cache",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.100.4758.11 Safari/537.36",
    },
  })

  console.log(res)
}
