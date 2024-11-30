---
aliases: 
authors: easontseng
tags:
  - "#obsidian"
---

Obsidian 作為便捷的 md 編輯器，如果想要將 md 文章部署上網，除了其官方的 Obsidian Publish 服務外，還可以透過 [Obsidiosaurus 專案](https://cimsta.github.io/obsidiosaurus-docs/docs/main/Get%20started/quick_start) 將 Obsidian 筆記以 Docusaurus Blog 形式輕鬆部署到 Github Pages 上。

以下是我的設置經驗，但並非手把手教學：

## 設置前注意事項

### 預備知識

要完成設置還是有要基本的網頁概念，例如 `git clone` 專案、安裝 node runtime 以及執行 local server 的概念。

:::warning

一定要使用 node 18
:::

以 [Obsidiosaurus 專案](https://cimsta.github.io/obsidiosaurus-docs/docs/main/Get%20started/quick_start)  來說其實是藉由開發者開發的 Obsidian 外掛，讓你透過外掛按鈕，將 Obsidian 中的 md 格式修正成 Docusaurus 可接受的格式後，隨之自動化部署到 Github Page 中。

### 使用限制

目前 [Obsidiosaurus 專案](https://cimsta.github.io/obsidiosaurus-docs/docs/main/Get%20started/quick_start)  開發者支援的 Docusaurus 版本為 "@docusaurus/core": "2.4.1"，但最新的 Docusaurus 版本是 3.6，因此如果想要使用 Docusaurus 3.6 的功能並無法直接兼容，需要自行研究。

### 預先安裝相依套件 (以 mac 為例)

```bash
brew install imagemagick
brew install ghostscript
```

---
## 自定義首頁為 md

由於 Docusaurus 會有一個由 React 寫成的首頁，因此如果只是單純想用 md 當首頁，需要修改原先的根目錄註解掉，將 index.tsx 的部分改成一段重導向程式碼，並且將 docs 的資料夾中你希望作為首頁的 md 檔案 中 `fronter matter` 的欄位設定 `slug: /`。

https://docusaurus.io/docs/docs-introduction#docs-only-mode

當前你看到的這個 blog 就是這樣設定而成。

## 如何正式使用

### local 測試

如果是新建 Obsidian 文章就是需要先按 Obsidiosaurus 外掛按鈕，再執行 `npm run build`，然後執行 `npm run start` 就可以在 local server 看到變化。

如果是修改 Obsidian 文章則只要按 Obsidiosaurus 外掛按鈕，只要確保你一直處在 `npm run start` ，就可以在 local server 看到變化。

### 自動部署到 Github Page

#### 以 git push 形式
當確認好所有內容是可被上傳後，使用 `git push` 推到 main 分支。

此時 main 分支的 Github Actions 腳本會執行 `npm run build` 後，並轉而透過 `peaceiris/actions-gh-pages` 將內容以 gh-pages 分支形式自動部署到 Github Pages 上。
#### 以 deploy 指令

以 `npm run deploy` 透過 Docusaurus 本身的功能來自動化佈署到 Github Page。
## Obsidiain 書寫注意

一些特殊符號即便在 Obsidian 允許，但經過 Obsidiosaurus 外掛處理後，最終用於 Docusaurus 可能不如預期。例如要避免在標題使用 `()`，如 `mdName(XXX)` 就會引發錯誤。

而 Obsidian 中 internal link 和 link to heading (`mdName#heading`) 的功能，還是需要透過提示操作來轉成 Markdown link 格式 `[]()`，不支援 Wiki link 格式 `[[]]`。
## TODO

目前我對 Docusaurus 的 功能沒有研究很深，所以以下是我後續希望研究的功能：

- [ ] 設定 search

https://medium.com/@weiyun0912/docusaurus-%E5%9C%A8-docusaurus-%E4%B8%AD%E4%BD%BF%E7%94%A8-algolia-%E5%AF%A6%E4%BD%9C%E6%90%9C%E5%B0%8B%E5%8A%9F%E8%83%BD-4953b6ed4c34
