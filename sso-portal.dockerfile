FROM nginx

COPY /nginx/nginx.conf /etc/nginx/nginx.conf
COPY /dist/apps/sso-portal/exported/ /usr/share/nginx/html