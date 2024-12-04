---
title: "[Vercel] 如何將Node.js後端專案部署到Vercel"
aliases: 
authors: easontseng
enableComments: "true"
draft: true
last_update: {"date":"2024-12-04"}
---

## 目標

持續提供作品集預覽，不用擔心額外成本問題 (儘管響應時間較長)。
## 概念

Vercel Page <-> Vercel Function（Express） <-> Serverless 資料庫

透過 `Vercel.json` 可以將後端伺服器架構 (如 express) 改寫成 Vercel function。
## Vercel Page

 可以是靜態頁面或動態頁面，根據需要渲染內容。Vercel 支援伺服器端渲染（SSR）和增量靜態再生（ISR），可以實現動態內容的呈現。
### Vercel Function

當將 **Express** 應用部署到 **Vercel** 時，Express 並非作為一個持續運行的伺服器，而是被轉換為 **無伺服器函式**。這是因為 Vercel 基於 **無伺服器架構（Serverless）**，每個請求處理邏輯都會被轉換為獨立的函式，並在每次請求到來時觸發該函式。

基本上，如果要將專案轉為無伺服器架構，只要把 index.js 的 `app.listen` 改成 Serverless 函式的寫法。入口文件不一定要是 index.js ，可以透過 vercel.json 設置。

https://medium.com/@megablazikenabhishek/how-to-deploy-node-express-server-on-vercel-serverless-0af1f46c8cc9

```js
// app.listen(port, () => { 
// console.log(`Server is running on port ${port}`); 
// }); 

// 將 Express 應用包裝成 Serverless 函數 
module.exports = app;

```

Vercel 和其他無伺服器平台（如 AWS Lambda）有一個內建的機制，會根據請求觸發相應的處理邏輯，所以不需要自行包裝 `app` 成 Serverless 函式形式： `module.exports = (req, res) => { app(req, res); };`。

https://vercel.com/guides/using-express-with-vercel
### Serverless 資料庫

若未升級成 Vercel Pro 即便有固定的 Deployment 連結，還是會使用動態 IP，這時需要在防火牆設定允許全部來源才能正常讀寫資料。

https://github.com/orgs/Vercel/discussions/3981

## 部署

對專案執行 `vercel` 命令，即可單獨部署一個新的部署版本。只有使用 `vercel --prod` 命令才會生成固定 URL。

不過，無論是免費版還是付費版的使用者，部署後的 URL 都是公開可見的。
- 免費使用者可以透過 CORS 或 JWT 來限制訪問權限。
	- https://vercel.com/guides/how-to-enable-cors
- Vercel Pro 或企業用戶則可以使用 Vercel 的 Deployment Protection 功能來設定訪問控制服務，或是設置 IP 白名單。
