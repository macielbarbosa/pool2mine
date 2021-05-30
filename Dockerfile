FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY build /usr/share/nginx/html
