# Description

Suflex test

## Important!
Check the .env to connection with databse

## Running the app with docker

```bash
docker-compose up
```

## Running the app manually
### Necessary have installed node:16 and postgres on your machine
```bash
npm install
npx prisma migrate dev
npm start
```

## POSTMAN
Arquivo de postman esta em /infra/
Arquivo de produtos.csv esta em /infra

## License
[MIT licensed](LICENSE).
