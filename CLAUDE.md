# CLAUDE.md

## Project Overview

善波公認会計士税理士事務所（Yoshinami CPA & Tax Office）の静的Webサイト。
Vanilla HTML/CSS/JavaScript + Tailwind CSS で構築。フレームワーク不使用。

## Commands

```bash
npm start        # 開発サーバー起動 (src/ を http://localhost:8080 で配信)
npm run build    # CSS ウォッチビルド (開発用)
npm run build-prod  # CSS プロダクションビルド (minified)
npm run format   # Prettier でフォーマット (HTML, CSS, JS)
```

## Directory Structure

```
src/
├── index.html        # トップページ
├── about.html        # 事務所紹介
├── services.html     # サービス紹介
├── contact.html      # お問い合わせ
└── assets/
    ├── input.css     # Tailwind CSS ソース (CSS変更はここを編集)
    ├── styles.css    # 生成CSS (編集禁止, git-ignored)
    ├── script.js     # クライアントJS
    └── images/       # 画像アセット
```

## CSS Build Process

- `src/assets/styles.css` は `input.css` から自動生成される（**gitにコミット禁止**）
- CSS変更は必ず `src/assets/input.css` を編集する
- 本番CSSはGitHub Actionsデプロイ時に自動生成される
- ローカル開発では `npm run build` で生成

## Technology Stack

- **Tailwind CSS** - カスタムカラー・コンポーネント定義あり（`tailwind.config.js` 参照）
- **AOS** - スクロールアニメーション
- **Material Icons** - アイコン
- **Noto Sans JP** - フォント (Google Fonts)

## Styling Guidelines

1. Tailwind ユーティリティクラスを優先的に使用
2. `input.css` に定義済みのカスタムコンポーネントを活用
3. Material Design の原則に従う（シャドウ、トランジション、カラー）
4. 既存のカラーパレット・スペーシングを維持
5. モバイルファーストでレスポンシブ対応

## Content Guidelines

- **言語:** 日本語 (ja)
- **ブランドカラー:** Primary blue (#4a6fa5), white, grays
- **アイコン:** Material Icons or mask-image SVG
- **画像:** `src/assets/images/` に配置

## Code Formatting

Prettier 設定: printWidth 100 / 2スペース / シングルクォート / HTML whitespace: ignore
コミット前に `npm run format` を実行すること。

## Deployment

GitHub Pages へ GitHub Actions でデプロイ:

- **CI** (`.github/workflows/ci.yml`): main push + 全PR でフォーマットチェック・CSSビルド検証
- **Deploy** (`.github/workflows/deploy.yml`): main push or 手動トリガーで `src/` をデプロイ
