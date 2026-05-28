## 🚀 ローカル環境での起動手順（個人PC・開発者向け）

本プロジェクトをローカル環境（Windows / Mac）で起動するための手順です。
※本手順は、PCに Docker がインストールされていない環境（Node.js のみ）でも動作します。

### 📋 前提条件
事前にご自身のPCへ以下のツールをインストールしておいてください。
* **Git**
* **Node.js** (推奨: v20 または v22 以上のLTS版)

---

### 🛠️ 起動ステップ

#### 1. リポジトリのクローン
ターミナル（Windowsの場合は PowerShell やコマンドプロンプト、Macの場合は ターミナル）を開き、任意のディレクトリで以下のコマンドを実行します。

```
git clone [https://github.com/shimolten/react-webtest-v01_test.git](https://github.com/shimolten/react-webtest-v01_test.git)
cd react-webtest-v01_test
```

### 🛠️ クローン後の起動・操作手順（Dockerなし）

GitHubからプロジェクトをクローンした後の、具体的な起動から終了までの流れです。

#### Step 1. プロジェクトのディレクトリに移動
`git clone` が完了したら、作成されたフォルダの中にコマンドで移動します。

cd react-webtest-v01_test

### Step 2. 依存ライブラリのインストール（初回のみ）
Reactを動かすための必要なパッケージ（node_modules）を一括ダウンロードします。

```
npm install
```
※完了すると、フォルダ内に node_modules フォルダが自動生成されます。

### Step 3. 開発サーバーの起動
PCローカルの Node.js 環境で、直接Vite（開発サーバー）を立ち上げます。

```
npm run dev
```
### Step 4. ブラウザからURLへアクセス

ブラウザ（Chrome、Edgeなど）を開きます。

URL欄に http://localhost:5173/ と入力してアクセスします。

Reactの画面が表示されれば無事起動完了です！以降はコードを変更すると、リアルタイムにブラウザへ反映されます。

### ⏱️ 開発の終了と再開

・開発を終了する（サーバーの停止）
ターミナル上で「 Ctrlキー 」を押しながら「 C 」を押すと、開発サーバーが停止します。

・次回以降の再開
2回目以降は npm install の実行は不要です。フォルダに移動して以下のコマンドを叩くだけで起動します。

```
cd react-webtest-v01_test
npm run dev
```



