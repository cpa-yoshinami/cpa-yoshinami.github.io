# 善波公認会計士税理士事務所ホームページ

大阪を拠点とする善波公認会計士税理士事務所の公式ホームページです。フレームワークやビルドプロセスを使用しない静的HTMLサイトとして構築されています。

## 技術スタック

- **HTML/CSS/JavaScript**: 純粋なフロントエンド技術（フレームワークなし）
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク
- **AOS (Animate On Scroll)**: スクロールアニメーション
- **Material Icons**: Googleのアイコンライブラリ
- **Live Server**: 開発用サーバー

## プロジェクト構成

### ディレクトリ構造

```
src/                    # メインソースディレクトリ
├── index.html             # ホームページ
├── about.html             # 事務所紹介ページ
├── services.html          # 提供サービスページ
├── contact.html           # お問い合わせページ
└── assets/
    ├── input.css          # Tailwind CSSソースファイル
    ├── styles.css         # コンパイル済みCSSファイル
    ├── script.js          # JavaScriptファイル
    └── images/           # 画像ファイル
        ├── airplane.jpg   # Experience Section背景
        ├── office.jpg     # Business Details背景
        ├── osakajo.jpg    # 大阪城の画像
        └── ...           # その他の画像ファイル
```

### 主要ページの特徴

1. **ホームページ (index.html)**
   - ヒーローセクション
   - 業務内容紹介
   - 大阪エリアの強み
   - 所長メッセージ
   - 主要サービス一覧
   - パートナー企業情報

2. **事務所について (about.html)**
   - 所長プロフィール
   - 経歴・資格情報
   - 大阪城の画像を使用したビジュアル

3. **提供サービス (services.html)**
   - Experience Sectionに飛行機の背景画像
   - Business Detailsにオフィスの背景画像
   - 詳細なサービス説明

4. **お問い合わせ (contact.html)**
   - 連絡先情報
   - アクセス情報

## セットアップ手順

1. **リポジトリのクローン**

   ```bash
   git clone <repository-url>
   cd ysnm-cpa-office-demo1
   ```

2. **依存関係のインストール**

   ```bash
   npm install
   ```

3. **開発サーバーの起動**

   ```bash
   npm start
   ```

   ブラウザで `http://localhost:8080` を開いてサイトを確認できます。

## 開発コマンド

```bash
# 開発サーバーを起動（srcディレクトリを配信）
npm start

# CSSをウォッチモードでビルド（開発用）
npm run build

# CSSを本番用にビルド（圧縮版）
npm run build-prod

# コードフォーマット
npm run format
```

## デザインの特徴

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **アニメーション**: AOS.jsによるスクロールアニメーション
- **背景画像**: Experience SectionとBusiness Detailsに背景画像を使用
- **カラフルなPartners Section**: グラデーション背景とカラーアクセントバー
- **Material Design**: Google Material Iconsとマテリアルデザインの要素

## GitHub Actions

このプロジェクトはGitHub Actionsを使用してCI/CDパイプラインを構築しています。

### ワークフロー

#### 1. CI (`ci.yml`)

- **トリガー**: mainブランチへのpushとすべてのpull request
- **Node.jsバージョン**: 20.x
- **実行内容**:
  - 依存関係のインストール
  - コードフォーマットチェック (`npm run format`)
  - CSS本番ビルド (`npm run build-prod`)
  - styles.css生成の確認

#### 2. Deploy (`deploy.yml`)

- **トリガー**: mainブランチへのpushまたは手動実行
- **Node.jsバージョン**: 20.x
- **実行内容**:
  - 依存関係のインストール
  - コードフォーマット実行
  - CSS本番ビルド（圧縮版）
  - GitHub Pagesへの自動デプロイ

### 重要な設定

- **styles.css除外**: 生成されるCSSファイルはリポジトリに含めず、GitHub Actions内でのみ生成
- **自動デプロイ**: mainブランチへのpushで自動的にGitHub Pagesが更新
- **キャッシュ機能**: npm依存関係のキャッシュでビルド時間を短縮

## 開発ワークフロー

### ローカル開発

1. ブランチを作成して開発
2. `npm start` で開発サーバーを起動
3. `npm run build` でCSSをウォッチモードでビルド
4. 変更をコミット・プッシュ

### プルリクエスト

- プルリクエスト作成時にCIワークフローが自動実行
- コードフォーマットとビルドチェックが実施
- マージ前に必ず確認

### デプロイメント

GitHub PagesとGitHub Actionsを使用した自動デプロイシステムです。

**デプロイフロー:**

1. mainブランチにマージ
2. Deploy ワークフローが自動実行
3. Tailwind CSSが本番用にビルド
4. `src/` ディレクトリがGitHub Pagesにデプロイ
5. サイトが自動更新

### 注意事項

- `src/assets/styles.css` はGitリポジトリに含まれません（.gitignoreで除外）
- CSSの変更は `src/assets/input.css` で行ってください
- GitHub Actionsでのみ本番用CSSが生成されます
- ローカル開発時は `npm run build` でCSSを生成してください

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
