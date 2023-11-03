FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY build /usr/share/nginx/html

#   commands
#   npm install
#   npm run build
#   docker image build --tag react-app .
#   docker container run --detach --publish 9000:80 react-app

#   Open localhost:9000 in the browser