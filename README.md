# KIZUNAノート：親のスマホで困っている家族のためのブログ

GitHub Pagesでそのまま公開できる、HTML・CSS・JavaScriptだけのブログサイトです。高齢の親のスマホ、詐欺対策、教え方、家族の悩み、Project KIZUNAの開発・体験を、子ども世代の目線で発信します。

## ファイル構成

```text
.
├─ index.html              トップページ
├─ blog.html               ブログ一覧・カテゴリ絞り込み
├─ article.html            記事ページのひな形
├─ profile.html            プロフィール
├─ contact.html            お問い合わせ
├─ assets/
│  ├─ css/style.css        全ページ共通の見た目
│  ├─ js/main.js           メニュー・絞り込み・フォーム表示
│  └─ images/              記事画像・OGP画像
├─ .nojekyll               GitHub Pages向け設定
└─ README.md               管理・公開手順
```

## GitHubへアップロードして公開する

1. GitHubで新しいリポジトリを作成します。
2. このフォルダ内のファイルとフォルダを、リポジトリ直下へアップロードします。
3. リポジトリの `Settings` → `Pages` を開きます。
4. `Build and deployment` の `Source` は `Deploy from a branch` を選びます。
5. Branchは `main`、フォルダは `/(root)` を選び、`Save` を押します。
6. 数分後に表示される公開URLを開きます。

公開後は各HTMLのOGP情報に、公開URLを使った `og:url` と絶対URLの `og:image` を設定すると、SNS共有がより安定します。

## ブログ記事を追加する

1. `article.html` を複製し、`article-smartphone-camera.html` のような半角英数字の名前に変更します。
2. `<title>`、`meta description`、記事タイトル、日付、カテゴリ、本文を変更します。
3. 記事画像を `assets/images/` に保存し、記事内から相対パスで読み込みます。
4. `blog.html` の `.post-list` 内へ、既存の `article` 要素を複製して概要を追加します。
5. `index.html` の新着記事も必要に応じて差し替えます。

カテゴリを増やす場合は、一覧カードの `data-category` と絞り込みボタンの `data-filter` に同じ半角英字を指定します。タグは `.tags` 内の `span` を追加するだけです。

## お問い合わせフォームについて

GitHub Pagesにはメール送信機能がありません。現在のフォームは入力確認まで動作します。実際に受信するには、Formspreeなどのフォーム受付サービスを契約し、サービス指定の送信先を `contact.html` の `form` に設定してください。

## Project KIZUNA公式サイトへ発展させる

ヘッダーのナビゲーションへページを追加し、既存ページを複製して本文を差し替える方法が簡単です。次の順で追加できます。

- `about-kizuna.html`：Project KIZUNAとは
- `features.html`：機能紹介
- `pricing.html`：料金
- `faq.html`：よくある質問
- `news.html`：お知らせ
- `download.html`：ダウンロード案内
- `privacy.html`：プライバシーポリシー
- `terms.html`：利用規約

共通ヘッダーや記事数が増え、同じ修正を複数ファイルへ行う負担が大きくなった段階で、静的サイトジェネレーターへの移行を検討してください。それまでは、この構成が最も管理しやすく高速です。

## 広告を追加する

`ADVERTISEMENT` と表示されている `.ad-slot` または `.ad-inline` の中身を、広告サービスから提供されたコードへ置き換えます。広告サービスの規約、Cookie表示、プライバシーポリシーも公開前に確認してください。
