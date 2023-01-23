FROM cypress/base
COPY . .
RUN npm install
CMD npm run cypress:execution