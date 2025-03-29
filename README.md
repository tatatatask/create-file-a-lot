# Create file a lot

たくさんのファイルを生成するときに

## Requirements

- Node.js v23.10.0

## Install

```bash
cd create-file-a-lot
npm install
```
## Directory Structure

```
├── dist		---		(out)
├── README.md
├── action.bat			---		(Windows)
├── action.command		---		(macOS)
├── package-lock.json
├── package.json
├── script.js
└── source.json
```

## How to Use

1. source.jsonを作成
2. (macOS)action.command または (Windows)action.batをダブルクリック
3. コマンドプロンプトで処理が実行されます
4. distディレクトリに出力される

### コマンドで実行する場合

```bash
npm run action
```
