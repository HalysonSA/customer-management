# Projeto NestJS com Auth0 e CRUD de Clientes

Este projeto foi criado para praticar o uso do **NestJS** em conjunto com o **Auth0** para autenticação e gerenciamento de sessões de usuários, além de implementar um **CRUD** de clientes.

---

## Tecnologias Utilizadas

- **NestJS**: Framework para construção de APIs e servidores backend.
- **Auth0**: Plataforma de autenticação e autorização.
- **Prisma**: ORM para interação com o banco de dados.
- **TypeScript**: Linguagem para garantir tipagem estática e facilitar a manutenção.
- **Libphonenumber**: Biblioteca para validação e formatação de números de telefone.
- **cpf-cnpj-validator**: Biblioteca para gerar e validar CPFs e CNPJs brasileiros.

---

### Requisitos

- Node.js >= 22.x
- pnpm >= 9.x
- Banco de dados configurado (PostgreSQL, MySQL, etc)

### Compile and run the project

```bash
$ pnpm install

#Prisma
$ pnpm migration:dev
$ pnpm prisma generate

#Opcional
$ pnpm migration:seed

$ pnpm start:dev
```

### Insomnia

```json
{
  "_type": "export",
  "__export_format": 4,
  "__export_date": "2024-11-18T04:24:00.079Z",
  "__export_source": "insomnia.desktop.app:v10.0.0",
  "resources": [
    {
      "_id": "req_3eed98e6a60b48d7afb6e4468cf89c63",
      "parentId": "fld_f5196e580fbe4e26999ada49bb30048d",
      "modified": 1731901805715,
      "created": 1731897646914,
      "url": "{{baseURL}}/user",
      "name": "Create User",
      "description": "",
      "method": "POST",
      "body": {},
      "parameters": [
        {
          "id": "pair_9eecab24e65843b190dda4512d37d879",
          "name": "id_token",
          "value": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9HSUNsZU9Lcld4cXo0b3NNWWlzdSJ9.eyJuaWNrbmFtZSI6ImpvYW8iLCJuYW1lIjoiam9hb0BjbGFyby5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvYTYwYTdhNDQ0MWEwYTE4NDJiMDM5ZTcxMTc5OWUwZWE_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZqby5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyNC0xMS0xOFQwMzo0ODoxMS4wMzBaIiwiZW1haWwiOiJqb2FvQGNsYXJvLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9kZXYtbnh0ejU1cHk3NGxuODFwZS51cy5hdXRoMC5jb20vIiwiYXVkIjoiQjR6YU1XeHYwekdMQkxGbU9FOG1FbVZOeWtNOHRmSkwiLCJpYXQiOjE3MzE5MDE3NzEsImV4cCI6MTczMTkzNzc3MSwic3ViIjoiYXV0aDB8NjczYTliYTUwMmI3MTE3MmI1NjQ1NmVhIiwic2lkIjoiUjdZWTAydzl3MEMxbDB4b095YWxpWDJUdExJcVVMcGsifQ.cskOyqSepKnKCvx-dtEn0pXrfzzKs1dg_NgwfpS3pmGEYydgTLol9v4CmfavrQveGsqMOYDbjh_FHtQFPJ42-x6LBpcYTi-URrv_lcjd40sBApNwCVVdfOm0Kf8aGHYaYjPt_kU89Sybh-YUIei_ASpTbyplGjj2w8fkL27Pycy58z4-saEDVmBaVtn5jfQtnmClez4lHHHTbMT9lfyLflk-smMWs5JWW-Wd7FQjgmq-AvSp6OU7V2TajaEg4QEwNAYbgnsuKYIOIB6Uaqtqffz3NzK-omBrcILfC2kEYhDKsTkQFnqs-qudbGVKjChSQnZuHQQ9u53S2wk7EMGIoQ",
          "description": "",
          "disabled": false
        }
      ],
      "headers": [{ "name": "User-Agent", "value": "insomnia/10.0.0" }],
      "authentication": { "type": "bearer", "token": "{{token}}" },
      "metaSortKey": -1731897635041,
      "isPrivate": false,
      "pathParameters": [],
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_f5196e580fbe4e26999ada49bb30048d",
      "parentId": "wrk_42573c8db19248bfaef30adfe1885d54",
      "modified": 1731897632747,
      "created": 1731897632747,
      "name": "User",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1731897632747,
      "_type": "request_group"
    },
    {
      "_id": "wrk_42573c8db19248bfaef30adfe1885d54",
      "parentId": null,
      "modified": 1731903812541,
      "created": 1728791755695,
      "name": "Customer-management",
      "description": "",
      "scope": "collection",
      "_type": "workspace"
    },
    {
      "_id": "req_25bd6c6d8680463198b322d2d3709ae6",
      "parentId": "fld_abdd9beae7ea49daabba2ede2d28c263",
      "modified": 1731902909998,
      "created": 1731893519016,
      "url": "{{baseURL}}/user/login",
      "name": "get JWT",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"code\": \"XN1UUM7_lHM9OIuD4_ZlXRBFXq2PP-Z4pfLCsrbJP-9gl\"\n}"
      },
      "parameters": [
        {
          "id": "pair_6aac473c95b24e16a40c2975652d1b37",
          "name": "search",
          "value": "hally",
          "description": "",
          "disabled": false
        },
        {
          "id": "pair_9aa96cdc723141e884aa4775335af4e8",
          "name": "page",
          "value": "1",
          "description": "",
          "disabled": false
        },
        {
          "id": "pair_152fccbf56644d749987912920daeacf",
          "name": "limit",
          "value": "10",
          "description": "",
          "disabled": false
        }
      ],
      "headers": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "User-Agent", "value": "insomnia/10.0.0" }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{token}}",
        "disabled": true
      },
      "metaSortKey": -1731893049827,
      "isPrivate": false,
      "pathParameters": [],
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_abdd9beae7ea49daabba2ede2d28c263",
      "parentId": "wrk_42573c8db19248bfaef30adfe1885d54",
      "modified": 1731892590635,
      "created": 1731892590635,
      "name": "AUTH0",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1731892590635,
      "_type": "request_group"
    },
    {
      "_id": "req_a4830808d7974f73b76adfbe5197d7f4",
      "parentId": "fld_abdd9beae7ea49daabba2ede2d28c263",
      "modified": 1731895284083,
      "created": 1731892593232,
      "url": "https://dev-nxtz55py74ln81pe.us.auth0.com/authorize",
      "name": "Login to get code",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_ad6fe780b5b745bf8bf24cf8b9046936",
          "name": "response_type",
          "value": "code",
          "description": "",
          "disabled": false
        },
        {
          "id": "pair_12501ad551484abbba50726f4f33209a",
          "name": "client_id",
          "value": "B4zaMWxv0zGLBLFmOE8mEmVNykM8tfJL",
          "description": "",
          "disabled": false
        },
        {
          "id": "pair_236f743f5c574e4e8f67bec8677d3aab",
          "name": "connection",
          "value": "Username-Password-Authentication",
          "description": "",
          "disabled": false
        },
        {
          "id": "pair_5637cf56de184fa78ebe7db116e8dc9f",
          "name": "redirect_uri",
          "value": "http://localhost:3000/callback",
          "description": "",
          "disabled": false
        },
        {
          "id": "pair_e46f9c56d592402fa293717498fb10df",
          "name": "scope",
          "value": "openid%20profile%20email",
          "description": "",
          "disabled": false
        },
        {
          "id": "pair_8e249be4e1824630bc809c6eb81454ca",
          "name": "audience",
          "value": "local",
          "description": "",
          "disabled": false
        }
      ],
      "headers": [{ "name": "User-Agent", "value": "insomnia/10.0.0" }],
      "authentication": {},
      "metaSortKey": -1731892593232,
      "isPrivate": false,
      "pathParameters": [],
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_9241225253fa447fa43a8539f5a7db5f",
      "parentId": "fld_17eb81fc8e9f44a18529d2d10b89c603",
      "modified": 1731902983811,
      "created": 1731868711723,
      "url": "{{baseURL}}/customer",
      "name": "List Customer",
      "description": "",
      "method": "GET",
      "body": {},
      "parameters": [
        {
          "id": "pair_6aac473c95b24e16a40c2975652d1b37",
          "name": "search",
          "value": "luiza",
          "description": "",
          "disabled": true
        },
        {
          "id": "pair_9aa96cdc723141e884aa4775335af4e8",
          "name": "page",
          "value": "1",
          "description": "",
          "disabled": false
        },
        {
          "id": "pair_152fccbf56644d749987912920daeacf",
          "name": "limit",
          "value": "10",
          "description": "",
          "disabled": false
        }
      ],
      "headers": [{ "name": "User-Agent", "value": "insomnia/10.0.0" }],
      "authentication": { "type": "bearer", "token": "{{token}}" },
      "metaSortKey": -1731888102743,
      "isPrivate": false,
      "pathParameters": [],
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "fld_17eb81fc8e9f44a18529d2d10b89c603",
      "parentId": "wrk_42573c8db19248bfaef30adfe1885d54",
      "modified": 1731888095720,
      "created": 1731888095720,
      "name": "Customer",
      "description": "",
      "environment": {},
      "environmentPropertyOrder": null,
      "metaSortKey": -1731888095720,
      "_type": "request_group"
    },
    {
      "_id": "req_af28027031dc4cf6abe4c9b31717b743",
      "parentId": "fld_17eb81fc8e9f44a18529d2d10b89c603",
      "modified": 1731902540564,
      "created": 1731888087408,
      "url": "{{baseURL}}/customer/bde391b1-4b49-496d-93bf-665a13f2c190",
      "name": "Update Customer",
      "description": "",
      "method": "PATCH",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\"document\":\"342.921.310-07\"\n}"
      },
      "parameters": [],
      "headers": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "User-Agent", "value": "insomnia/10.0.0" }
      ],
      "authentication": { "type": "bearer", "token": "{{token}}" },
      "metaSortKey": -1731888102643,
      "isPrivate": false,
      "pathParameters": [],
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_fd262c7bf113426ea950553021f877af",
      "parentId": "fld_17eb81fc8e9f44a18529d2d10b89c603",
      "modified": 1731901598775,
      "created": 1731615390260,
      "url": "{{baseURL}}/customer",
      "name": "Create Customer",
      "description": "",
      "method": "POST",
      "body": {
        "mimeType": "application/json",
        "text": "{\n\t\t\"name\": \"Hally\",\n\t\"document\": \"421.693.540-00\",\n\t\"birthdate\": \"2024-11-16T14:30:00Z\",\n\t\"email\": \"gfgfg@gmail.om\",\n\t\"phone\": \"999743432\"\n}"
      },
      "parameters": [],
      "headers": [
        { "name": "Content-Type", "value": "application/json" },
        { "name": "User-Agent", "value": "insomnia/10.0.0" }
      ],
      "authentication": {
        "type": "bearer",
        "token": "{{token}}",
        "disabled": false
      },
      "metaSortKey": -1731888102543,
      "isPrivate": false,
      "pathParameters": [],
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "req_913babdadac2475cabe6b2ff661308d5",
      "parentId": "fld_17eb81fc8e9f44a18529d2d10b89c603",
      "modified": 1731891955968,
      "created": 1731887802906,
      "url": "{{baseURL}}/customer/eb719b53-0b70-4686-a176-2bd2d14b1991",
      "name": "Delete Customer",
      "description": "",
      "method": "DELETE",
      "body": {},
      "parameters": [],
      "headers": [{ "name": "User-Agent", "value": "insomnia/10.0.0" }],
      "authentication": { "type": "bearer", "token": "{{token}}" },
      "metaSortKey": -1731888102443,
      "isPrivate": false,
      "pathParameters": [],
      "settingStoreCookies": true,
      "settingSendCookies": true,
      "settingDisableRenderRequestBody": false,
      "settingEncodeUrl": true,
      "settingRebuildPath": true,
      "settingFollowRedirects": "global",
      "_type": "request"
    },
    {
      "_id": "env_385cbdf48347ea8c3c2709d31381e633448957a4",
      "parentId": "wrk_42573c8db19248bfaef30adfe1885d54",
      "modified": 1731901725861,
      "created": 1728791755696,
      "name": "Base Environment",
      "data": {
        "baseURL": "http://localhost:5000/v1",
        "token": "{% response 'body', 'req_25bd6c6d8680463198b322d2d3709ae6', 'b64::JC5hY2Nlc3NUb2tlbg==::46b', 'never', 60 %}"
      },
      "dataPropertyOrder": { "&": ["baseURL", "token"] },
      "color": null,
      "isPrivate": false,
      "metaSortKey": 1728791755696,
      "_type": "environment"
    },
    {
      "_id": "jar_385cbdf48347ea8c3c2709d31381e633448957a4",
      "parentId": "wrk_42573c8db19248bfaef30adfe1885d54",
      "modified": 1731894061845,
      "created": 1728791755697,
      "name": "Default Jar",
      "cookies": [
        {
          "key": "did",
          "value": "s%3Av0%3Af438168d-ced4-4b27-aa6d-ac9ae35c3e72.%2Fa0XXYfD7Gvo%2Bhhsam3kFxW50Ejy6Pm078VUm%2FQubCo",
          "expires": "2025-11-18T07:19:01.000Z",
          "maxAge": 31557600,
          "domain": "dev-nxtz55py74ln81pe.us.auth0.com",
          "path": "/",
          "secure": true,
          "httpOnly": true,
          "hostOnly": true,
          "creation": "2024-11-18T01:19:01.616Z",
          "lastAccessed": "2024-11-18T01:19:01.616Z",
          "sameSite": "none",
          "id": "1f233785-d8d1-4215-90d7-40792af15228"
        },
        {
          "key": "did_compat",
          "value": "s%3Av0%3Af438168d-ced4-4b27-aa6d-ac9ae35c3e72.%2Fa0XXYfD7Gvo%2Bhhsam3kFxW50Ejy6Pm078VUm%2FQubCo",
          "expires": "2025-11-18T07:19:01.000Z",
          "maxAge": 31557600,
          "domain": "dev-nxtz55py74ln81pe.us.auth0.com",
          "path": "/",
          "secure": true,
          "httpOnly": true,
          "hostOnly": true,
          "creation": "2024-11-18T01:19:01.617Z",
          "lastAccessed": "2024-11-18T01:19:01.617Z",
          "id": "7e667174-e58b-4a2b-8923-88950d35d2d4"
        },
        {
          "key": "auth0",
          "value": "s%3Av1.gadzZXNzaW9ugqZoYW5kbGXEQOkRQ-3ZhXKdvRZZvvbX5xog0ZrkN9pMEzf2m4gMsqE1Vs3dL_H80PsBF3DzDG5-CmRK33CjaINfDHixX_cmJIemY29va2llg6dleHBpcmVz1_9I9MIAZz6Pra5vcmlnaW5hbE1heEFnZc4PcxQAqHNhbWVTaXRlpG5vbmU.7kS%2BUfTNqZuGh3uVmiCoDBuynlAmHqFYROxSflce6sI",
          "expires": "2024-11-21T01:41:01.000Z",
          "domain": "dev-nxtz55py74ln81pe.us.auth0.com",
          "path": "/",
          "secure": true,
          "httpOnly": true,
          "hostOnly": true,
          "creation": "2024-11-18T01:41:01.845Z",
          "lastAccessed": "2024-11-18T01:41:01.845Z",
          "sameSite": "none",
          "id": "01bb8e5e-29a4-48a1-80d4-1c68bc8317ad"
        },
        {
          "key": "auth0_compat",
          "value": "s%3Av1.gadzZXNzaW9ugqZoYW5kbGXEQOkRQ-3ZhXKdvRZZvvbX5xog0ZrkN9pMEzf2m4gMsqE1Vs3dL_H80PsBF3DzDG5-CmRK33CjaINfDHixX_cmJIemY29va2llg6dleHBpcmVz1_9I9MIAZz6Pra5vcmlnaW5hbE1heEFnZc4PcxQAqHNhbWVTaXRlpG5vbmU.7kS%2BUfTNqZuGh3uVmiCoDBuynlAmHqFYROxSflce6sI",
          "expires": "2024-11-21T01:41:01.000Z",
          "domain": "dev-nxtz55py74ln81pe.us.auth0.com",
          "path": "/",
          "secure": true,
          "httpOnly": true,
          "hostOnly": true,
          "creation": "2024-11-18T01:41:01.845Z",
          "lastAccessed": "2024-11-18T01:41:01.845Z",
          "id": "17b5c627-7fcc-42fe-a9d7-467ac2d97e11"
        }
      ],
      "_type": "cookie_jar"
    }
  ]
}
```
