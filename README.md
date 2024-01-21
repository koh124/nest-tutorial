## 【Nest.js × Prisma × Postgresql × コンテナ】Nest.js チュートリアル 【REST】

### Postgres と Nest.jsサーバーを起動

```bash
$ docker-compose up
```

### APIを叩く

- GET

```bash
$ curl localhost:3000/todo # [{ "id": 1, "name": "homework", "status": "doing" }]
```

- POST

```bash
$ curl localhost:3000/todo -X POST -d 'name=homework&status=doing'
```

- PUT

```bash
$ curl -X PUT localhost:3000/todo -d 'name=homework&status=done&id={id}'
```

- DELETE

```bash
$ curl -X DELETE localhost:3000/todo -d 'id={id}'
```
