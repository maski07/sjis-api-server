# ベースイメージを指定
FROM nginx:alpine

# Nginxの設定ファイルを上書き
COPY nginx.conf /etc/nginx/nginx.conf
