# Node.js API orçamentos

Essa é uma API do teste prático em Node.JS

## Tech Stack

**Server:** Node, Express

## API Reference

### User domain

#### Obter todos os users

```http
  GET /users
```

#### Obter user por id

```http
  GET /users/{id}
```

| URL parameter | Type     | Description                               |
| :------------ | :------- | :---------------------------------------- |
| `id`          | `number` | **Required** - Id do usuário a ser obtido |

#### User model

| Property | Type     |
| :------- | :------- |
| `id`     | `number` |
| `name`   | `string` |
| `tax`    | `number` |

### Product domain

#### Obter todos os produtos

```http
  GET /products
```

#### Obter produto por id

```http
  GET /products/{id}
```

| URL parameter | Type     | Description                               |
| :------------ | :------- | :---------------------------------------- |
| `id`          | `number` | **Required** - Id do produto a ser obtido |

#### Product model

| Property | Type     |
| :------- | :------- |
| `id`     | `number` |
| `name`   | `string` |
| `price`  | `number` |

### Budget domain

#### Calcular preço final com base na taxa do usuário e preços dos produtos

```http
  GET /budget/calculate?uid={uid}&pid={pid}
```

| Query parameter | Type             | Description                                                                                                                   |
| :-------------- | :--------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| `uid`           | `number`         | **Required** - Id do usuário a ser usado no cálculo                                                                           |
| `pid`           | `number, string` | **Required** - Id(s) do(s) produto(s) a ser(em) usado(s) no cálculo. Se mais de um, pode ser separado por vírgulas: pid=1,2,3 |

#### Budget model

| Property     | Type                       |
| :----------- | :------------------------- |
| `user`       | `User object`              |
| `products`   | `array of Product objects` |
| `finalPrice` | `number`                   |
