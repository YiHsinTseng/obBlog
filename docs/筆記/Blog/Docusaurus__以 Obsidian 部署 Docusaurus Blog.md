---
title: "[Docusaurus] 以 Obsidian 部署 Docusaurus Blog"
aliases: 
authors: easontseng
tags:
  - "#obsidian"
enableComments: true
draft: true
last_update: {"date":"2024-12-03"}
---

Obsidian 作為便捷的 Markdown (以下簡稱 MD) 編輯器，如果想要將 MD 文章部署上網，除了其官方的 Obsidian Publish 服務外，還可以透過 [Obsidiosaurus 專案](https://cimsta.github.io/obsidiosaurus-docs/docs/main/Get%20started/quick_start) ，將 Obsidian 筆記以 Docusaurus Blog 形式輕鬆部署到 Github Pages 上。

以下是我的設置經驗，但並非手把手教學：

## 設置前注意事項

### 需有預備知識

以 [Obsidiosaurus 專案](https://cimsta.github.io/obsidiosaurus-docs/docs/main/Get%20started/quick_start) 來說，其實是藉由開發者開發的 [Obsidian 外掛](https://github.com/CIMSTA/obsidiosaurus)，讓你透過外掛按鈕，將 Obsidian 中的 MD 格式修正成 Docusaurus 可接受的格式後，隨之自動化部署到 Github Pages 中 ([開發者的範例 Vault](https://github.com/CIMSTA/obsidiosaurus-docs))。

但要完成設置以及成功部署還是要有基本的網頁概念，例如能夠 `git clone` 專案、安裝 `Node.js` 、有執行 local server 概念以及懂得 Github Repo 和 Github Actions 機制等。

:::warning

一定要使用 node 18
:::

但如果沒有想要太多客製化的話，單純改一改專案中的個人設定還是可以簡單上手。
### 專案本身的使用限制

目前 [Obsidiosaurus 專案](https://cimsta.github.io/obsidiosaurus-docs/docs/main/Get%20started/quick_start)  開發者支援的 Docusaurus 版本為 "@docusaurus/core": "2.4.1"，但最新的 Docusaurus 版本是 3.6，因此如果想要使用 Docusaurus 3.6 的功能並無法直接兼容，需要自行研究，而且 3.6 版本中可能隱含一些小 bug (移動端無法正常點擊側邊欄)。

### 預先安裝相依套件 (以 mac 為例)

```bash
brew install imagemagick
brew install ghostscript
```

---
## 自定義首頁為特定 MD 檔案

由於 Docusaurus 通常會有一個由 React 寫成的首頁，因此如果只是單純想用 MD 當首頁，需要修改原先的根目錄註解掉，將 index.tsx 的部分改成一段重導向程式碼，並且將 docs 的資料夾中你希望作為首頁的 MD 檔案 中 `fronter matter` 的欄位設定 `slug: /`。

https://docusaurus.io/docs/docs-introduction#docs-only-mode

當前你看到的這個 blog 就是這樣設定而成。

## 如何正式使用

### local 測試

如果是新建 Obsidian 文章就是需要先按 Obsidiosaurus 外掛按鈕，再執行 `npm run build`，然後執行 `npm run start` 就可以在 local server 看到變化。

如果是修改 Obsidian 文章則只要按 Obsidiosaurus 外掛按鈕，只要確保你一直處在 `npm run start` ，就可以在 local server 看到變化。

### 自動部署到 Github Pages

#### 以 git push 形式

當確認好所有內容是可被上傳後，使用 `git push` 推到 main 分支。此時 main 分支的 Github Actions 腳本會執行 `npm run build` 後，並轉而透過 `peaceiris/actions-gh-pages` 將內容以 gh-pages 分支形式自動部署到 Github Pages 上。

:::tip

若有設定 `showLastUpdateTime` 的話，更新日期會以 push 的日期為主。推測是因為 `peaceiris/actions-gh-pages` 會重新執行 git clone，導致舊有的 git 資訊消失。

如果還是希望兼容 git push 自動部署與正確顯示更新日期，可以設置 last_update 屬性來硬性指令更新日期。

 Linter 外掛支援自動更新 FrontMatter 屬性，因此只要 Linter 外掛中設定 `Date Modified Key` 為 `last_update`，模板 `Format` 為 `{"\d\a\t\e":"YYYY-MM-DD"}`，就可以確保正確顯示更新日期。同時在將 `YAML Keys to Remove` 加入 `last_update`，這樣就可以避免修正其他屬性時導致 `last_update` 格式更新錯誤。
:::



#### 以 deploy 指令（建議使用）

以 `npm run deploy` 透過 Docusaurus 本身的功能來自動化佈署到 Github Pages。

:::tip

若有設定 `showLastUpdateTime` 的話，使用 `npm run deploy` 的更新日期才是正常的。
:::

## Obsidiain 書寫注意

###  標題受限可用符號，可善用 title 屬性

Obsidian 本身不支持在標題使用 `[]`， 因此需要透過 FrontMatter 中 `title` 屬性來協助修改標題。

即便在 Obsidian 中一些特殊符號被允許在標題輸入，但由於有 Obsidiosaurus 外掛處理以及 Docusaurus 轉換成靜態網頁的過程，可能導致潛在錯誤。例如要避免在標題使用 `()`，如 `MDName(XXX)` ；或是在標題開頭使用 `<>`，以免被誤認為是 React Component。
###  使用連結時依彈出提示操作

 Obsidian 中 internal link 和 link to heading (`MDName#heading`) 的功能，還是需要透過提示操作來轉成 MD link 格式 `[]()`，不支援 Wiki link 格式 `[[]]`。
### Heading 須與 blockquote 間隔一行

Heading 須與 blockquote 間隔一行，以免渲染時受到影響。

## 加入 giscus 留言板

參考以下連結設定 Blog 留言板，並且也自行研究設置 Doc 留言板。
https://m19v.github.io/blog/how-to-add-giscus-to-docusaurus

### build 時錯誤原因

注意可能會發生 Can't resolve 'react/jsx-runtime' 的問題，目前解法是引入外掛 `@cookbookdev/docusaurus-jsx-runtime-fallback-plugin` 來解決。

```js
//docusaurus.config.js
   plugins: [
      [
        '@docusaurus/plugin-content-blog',
        {
          id: 'release_notes',
          routeBasePath: 'release_notes',
          path: './release_notes__blog',
        },
      ],
      [
        '@cookbookdev/docusaurus-jsx-runtime-fallback-plugin',
        {
          alias: {
            'react/jsx-runtime': 'react/jsx-runtime.js',
          },
        },
      ],
    ],
```

### Blog 留言板潛在問題

在 `src/theme/BlogPostItem/index.tsx` 中，
`isBlogPostPage` 屬性無法被讀取，因此選擇先移除。
且要修正用 `enableComments === "true"` 作為在 Obsidian 中以 MD frontmatter 控制的設定。
### Doc 留言板潛在問題

主要設置在 `src/theme/DocItem/Footer/index.tsx` 中，只有正確設置才能避免 useDoc 錯誤問題，此並非版本兼容問題。可以參考以下連結：

https://ouch1978.github.io/docs/docusaurus/customization/add-giscus-to-docusaurus

## 使用 Algolia 優化站內搜尋

Algolia 是一個托管搜索引擎，使用者需要將結構化資料上傳到 Algolia，以利於透過 Algolia API 藉由關鍵字搜尋，重新導向特定網頁。

在 Docusaurus 有 [外掛](https://docusaurus.io/docs/search#using-algolia-docsearch) 支持使用 Algolia DocSearch，以下內容將討論自己如何執行 DocSearch 爬蟲。
###  使用 algolia/docsearch-scraper 自行爬蟲

Algolia 提供了一個 Docker image `algolia/docsearch-scraper`，用於自動抓取網站內容並生成符合 Algolia 要求的結構化資料。
### 開始設置環境

可以參考這個 [設置教學](https://weiyun0912.github.io/Wei-Docusaurus/docs/Docusaurus/Algolia/)，以下簡單描述大致流程以及注意事項：
1. 註冊 Algolia 並創建允許特定權限的 api key
2. 安裝 `Jq` 用於將設定的 JSON 檔轉換成 command-line
	- `brew install jq` (mac)
3. 設定 `.env` ,` config.json` 以利於 `algolia/docsearch-scraper` 使用。
4. 執行 `algolia/docsearch-scraper` ，以便根據設定將爬取網頁生成結構化資料上傳到 Algolia。
	- ⚠️ Warning: 
		- mac M1 需要在 docker 指令前加入 `--platform linux/amd64`。
	- 完整形式如：
	```shell
	docker run --platform linux/amd64 -it --env-file=.env -e "CONFIG=$(cat config.json | jq -r tostring)" algolia/docsearch-scraper
	```
5. 若以上流程順利執行，就可以在 Algolia 看到你索引資料了。
### 建議使用流程

因此若要讓 Docusaurus 可以自動化部署與建立索引，有兩種可行的做法：
- `git push` 觸發 Github Actions 自動化
	- Github Actions 在執行文章自動化部署的同時，透過額外加入 Action 執行 `algolia/docsearch-scraper ` 實現新文章的索引更新。
- 利用 `package.json script` 自定義命令 (建議使用)
	- 自定義腳本，將原先的 `npm run deploy` 與 local 端執行 `algolia/docsearch-scraper` 的 Docker 操作腳本。

:::tip

若要結合部署與索引兩個指令，在新建索引指令的 CONFIG 部分需要以 `\` 轉義雙引號，以免識別錯誤。形式如：
```
//package.json
"deploy-index": "docusaurus deploy && docker run --platform linux/amd64 -it --env-file=./yourpath/.env -e CONFIG=\"$(cat ./yourpath/config.json | jq -r tostring)\" algolia/docsearch-scraper",
```
:::

## 更好地寫作部署

可以搭配 Obsidian 中的 [Terminal 外掛](https://github.com/polyipseity/obsidian-terminal) 在 Obsidian vault 中設定 website 資料夾為目錄（透過視窗右鍵編輯重設），方便使用 `npm run build`、`npm run start` 以及 `npm run deploy` 來測試以及部署。

## TODO

目前我對 Docusaurus 的 功能沒有研究很深，所以以下是我後續希望研究的功能：

- [x] 將專案適配到新版 Docusaurus
	- [ ] 新版 3.6 的移動端側邊欄與按鈕無法使用
- [x] 只有新版 Docusaurus 的 sitemap.xml 可以設置 `lastmod` 屬性，不確定是否導致 google search console 無法順利解析。
- [ ] google search console 還是無法讀取到 sitemap.xml，但可以透過網頁審查功能要求索引特定網頁。

