## Link

[deployed](https://meal-planner-pink.vercel.app/)

## Local instance

### Pre reqs

1. node
2. local postgres [follow](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database)
3. vercel CLI [follow](https://vercel.com/docs/cli)
4. prisma CLI [follow](https://www.prisma.io/docs/orm/tools/prisma-cli)
5. table plus is recommended [follow](https://tableplus.com/) db Beaver is a good shout [follow](https://dbeaver.io/)

if you struggle with your local db instance

1. [follow](https://www.prisma.io/docs/orm/reference/connection-urls)
2. [here provides a url construction example](https://www.prisma.io/docs/orm/overview/databases/postgresql).
3. [this vid was helpful](https://www.youtube.com/watch?v=_ER9jHiylAo&t=152s)

### your ENV

if you struggle to out the connection string see above or reach out to me here or on [linkedIn](https://www.linkedin.com/in/georgia-h-b48434150/)

- POSTGRES_PRISMA_URL = "YOUR CONNECTION to local db"
- POSTGRES_URL_NON_POOLING = "duplicate your connection to local db for local instance"

### start app

1. npm i or your package manager of choice
2. `npx prisma generate`
3. `npx prisma migrate dev --"MIGRATIONNAME"`
4. `npx prisma db seed`
5. start app with `npm run dev`

### technologies

- Next 14
- Prisma ORM
- Postgres
- SCSS
- BEM
- Next Auth
- TypeScript
- zustland
- jest
