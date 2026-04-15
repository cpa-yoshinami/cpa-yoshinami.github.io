# 善波公認会計士税理士事務所ホームページ

大阪を拠点とする善波公認会計士税理士事務所の公式サイトです。

## 技術スタック

- HTML / CSS / JavaScript（フレームワークなし）
- [Tailwind CSS v4](https://tailwindcss.com/) — ユーティリティファースト CSS
- [AOS](https://michalsnik.github.io/aos/) — スクロールアニメーション
- [Material Icons](https://fonts.google.com/icons) — アイコン
- [five-server](https://github.com/nicedoc/five-server) — 開発サーバー

## セットアップ

```bash
npm install
npm start       # 開発サーバー起動 (http://localhost:8080)
npm run build   # CSS ウォッチビルド（開発用）
```

その他のコマンドは `npm run` で確認できます。

## デプロイ

GitHub Pages へ GitHub Actions で自動デプロイされます。

- **CI** — main push + 全 PR でフォーマットチェック・CSS ビルド検証
- **Deploy** — main push or 手動トリガーで `src/` をデプロイ

> `src/assets/styles.css` は `input.css` から自動生成されるため、Git 管理対象外です。
> CSS の変更は `src/assets/input.css` を編集してください。

## ライセンス

MIT
