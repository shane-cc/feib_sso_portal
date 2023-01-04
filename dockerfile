FROM nginx

COPY /nginx/nginx.conf /etc/nginx/nginx.conf
COPY /dist/apps/sso-admin/exported/ /usr/share/nginx/html