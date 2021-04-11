FROM node:latest

ARG UID
RUN adduser frontend --uid $UID --disabled-password --gecos ""

ENV APP /home/app
RUN mkdir $APP
RUN chmod -R 777 $APP
RUN chown -R frontend:frontend $APP
RUN rm -rf  /home/app/node_modules
RUN npm config set unsafe-perm true
WORKDIR $APP

RUN yarn cache clean



COPY package.json yarn.lock $APP/
RUN yarn

COPY . $APP/

USER frontend

CMD ["yarn", "run", "dev"]