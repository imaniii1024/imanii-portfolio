# Imanii's Portfolio Rebuild

Cloudflare Pagesへ移行しやすい、静的HTML/CSS/JavaScript構成のポートフォリオです。

## 構成

- `index.html`: トップページ
- `assets/css/style.css`: スタイル
- `assets/js/main.js`: ナビゲーション、問い合わせフォーム補助
- `assets/img/`: 画像素材
- `src/assets/scss/style.scss`: 編集用SCSS

## 開発

初回だけ依存関係を入れます。

```bash
npm install
```

SCSSを監視してCSSへ自動コンパイルします。

```bash
npm run sass:watch
```

一度だけコンパイルする場合はこちらです。

```bash
npm run sass:build
```

VS Codeでは `Terminal > Run Task... > Sass: watch` からも起動できます。

## Cloudflare Pages設定

- Framework preset: None
- Build command: `npm run sass:build`
- Build output directory: `/`

## お問い合わせフォーム

Formspreeで送信する構成です。

現在のendpoint:

```html
https://formspree.io/f/mpqneppv
```

公開後、Formspree側の確認メールを承認してから送信テストしてください。

設定前に送信した場合は、送信先未設定のメッセージが表示されます。
