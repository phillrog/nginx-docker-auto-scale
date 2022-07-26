FROM node:18-alpine3.15 AS build

RUN npm install -g @angular/cli
ADD ./portal/package.json /app/package.json

WORKDIR /app/ 

RUN npm install
ADD ./portal /app/
ARG configuration=

RUN ng build

RUN rm -rf /usr/share/nginx/html/*


FROM nginx:alpine
COPY --from=build /app/dist/portal /usr/share/nginx/html
RUN echo $(ls)
COPY ./portal/nginx-custom.conf /etc/nginx/conf.d/
COPY ./portal/entrypoint.sh .
RUN chmod +x entrypoint.sh
ENTRYPOINT ["sh","/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]