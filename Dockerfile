# ベースイメージを指定
FROM node:14

# 作業ディレクトリを作成
WORKDIR /usr/src/app

# package.jsonとpackage-lock.jsonをコピーして、依存関係をインストール
COPY package*.json ./
RUN npm install

# アプリケーションソースをコピー
COPY . .

# アプリケーションを起動
EXPOSE 3000
CMD ["npm", "start"]
