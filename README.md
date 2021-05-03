



# ToDo APi


### Introduction

- A ToDo API with user authentication and CRUD operation.

- A user first need to create an account.

- Then login with the same credential, you will get a token.

- Use this token as Bearer token in Header for crud operation in ToDo.

  

### Base Url

```
https://todo-2-api.herokuapp.com/api/v1/
```

### Sample User

- You can use sample user for login or create new one.

```
email: a@b.com
password: 1234
```



### <span style="color:orangered">POST</span> Sign Up

```
https://todo-2-api.herokuapp.com/api/v1/users/sign-up
```

**Body urlencoded**

| email    | a@b.com |
| -------- | ------- |
| password | 1234    |

**Response**

```json
{
    "message": "User Created",
    "newUser": {
        "todos": [],
        "_id": "608f8a105d01a50015f7b79d",
        "email": "a@b.com",
        "password": "$2b$10$NqlQC4r5Q8gOklIGfpF2Yu4SOLrH7EEqVAtc20m7KeulOL3IxYTli",
        "createdAt": "2021-05-03T05:28:48.533Z",
        "updatedAt": "2021-05-03T05:28:48.533Z",
        "__v": 0
    }
}
```



### <span style="color:orangered">POST</span> Login

```
https://todo-2-api.herokuapp.com/api/v1/users/login
```

**Body urlencoded**

| email    | a@b.com |
| -------- | ------- |
| password | 1234    |

**Response**

```json
{
    "message": "User Authenticated",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2RvcyI6WyI2MDhlZTMzNDM4YmJjYzczY2MzYWEzN2IiXSwiX2lkIjoiNjA4ZWUyZTgzOGJiY2M3M2NjM2FhMzdhIiwiZW1haWwiOiJhQGIuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkUEo1ZmhUaHFzSk9lNjgvV05BMXNtLlZPalQ5S01mcy5ZSHFkL09sbWF6OXhpL29MSXVJcnEiLCJjcmVhdGVkQXQiOiIyMDIxLTA1LTAyVDE3OjM1OjM2Ljg3NVoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA1LTAyVDE3OjM2OjUyLjQ2NloiLCJfX3YiOjEsImlhdCI6MTYyMDAxODIyMCwiZXhwIjoxNjIwMDE5MjIwfQ.tpPdzctQqtDvkGT-ZJ4D3q_YKLOa5VrapxcwTtJOYK8"
    }
}
```



### <span style="color:orangered">Get</span> Fetch all ToDos

```
https://todo-2-api.herokuapp.com/api/v1/todos/
```

**Header**

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2RvcyI6WyI2MDhlZTMzNDM4YmJjYzczY2MzYWEzN2IiXSwiX2lkIjoiNjA4ZWUyZTgzOGJiY2M3M2NjM2FhMzdhIiwiZW1haWwiOiJhQGIuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkUEo1ZmhUaHFzSk9lNjgvV05BMXNtLlZPalQ5S01mcy5ZSHFkL09sbWF6OXhpL29MSXVJcnEiLCJjcmVhdGVkQXQiOiIyMDIxLTA1LTAyVDE3OjM1OjM2Ljg3NVoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA1LTAyVDE3OjM2OjUyLjQ2NloiLCJfX3YiOjEsImlhdCI6MTYyMDAxODIyMCwiZXhwIjoxNjIwMDE5MjIwfQ.tpPdzctQqtDvkGT-ZJ4D3q_YKLOa5VrapxcwTtJOYK8
```





**Response**

```json
{
    "message": "List of ToDos",
    "data": {
        "todos": [
            {
                "deadLine": "4 May",
                "_id": "608ee33438bbcc73cc3aa37b",
                "description": "ToDo 1",
                "createdBy": "A",
                "user": "608ee2e838bbcc73cc3aa37a",
                "createdAt": "2021-05-02T17:36:52.107Z",
                "updatedAt": "2021-05-02T17:36:52.107Z",
                "__v": 0
            }
        ]
    }
}
```



### <span style="color:orangered">Post</span> Create ToDo

```
https://todo-2-api.herokuapp.com/api/v1/todos/create
```

**Header**

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2RvcyI6WyI2MDhlZTMzNDM4YmJjYzczY2MzYWEzN2IiXSwiX2lkIjoiNjA4ZWUyZTgzOGJiY2M3M2NjM2FhMzdhIiwiZW1haWwiOiJhQGIuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkUEo1ZmhUaHFzSk9lNjgvV05BMXNtLlZPalQ5S01mcy5ZSHFkL09sbWF6OXhpL29MSXVJcnEiLCJjcmVhdGVkQXQiOiIyMDIxLTA1LTAyVDE3OjM1OjM2Ljg3NVoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA1LTAyVDE3OjM2OjUyLjQ2NloiLCJfX3YiOjEsImlhdCI6MTYyMDAxODIyMCwiZXhwIjoxNjIwMDE5MjIwfQ.tpPdzctQqtDvkGT-ZJ4D3q_YKLOa5VrapxcwTtJOYK8
```

**Body raw**

```json
{
    "description": "ToDo 1",
    "deadLine": "4 May",
    "createdBy": "A"
}
```





**Response**

```json
{
    "message": "Task Created",
    "data": {
        "deadLine": "4 May",
        "_id": "608f8c0d5d01a50015f7b79e",
        "description": "ToDo 1",
        "createdBy": "A",
        "user": "608ee2e838bbcc73cc3aa37a",
        "createdAt": "2021-05-03T05:37:17.183Z",
        "updatedAt": "2021-05-03T05:37:17.183Z",
        "__v": 0
    }
}
```



### <span style="color:orangered">Patch</span> Update ToDo

```
https://todo-2-api.herokuapp.com/api/v1/todos/update/:id
```

**Header**

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2RvcyI6WyI2MDhlZTMzNDM4YmJjYzczY2MzYWEzN2IiXSwiX2lkIjoiNjA4ZWUyZTgzOGJiY2M3M2NjM2FhMzdhIiwiZW1haWwiOiJhQGIuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkUEo1ZmhUaHFzSk9lNjgvV05BMXNtLlZPalQ5S01mcy5ZSHFkL09sbWF6OXhpL29MSXVJcnEiLCJjcmVhdGVkQXQiOiIyMDIxLTA1LTAyVDE3OjM1OjM2Ljg3NVoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA1LTAyVDE3OjM2OjUyLjQ2NloiLCJfX3YiOjEsImlhdCI6MTYyMDAxODIyMCwiZXhwIjoxNjIwMDE5MjIwfQ.tpPdzctQqtDvkGT-ZJ4D3q_YKLOa5VrapxcwTtJOYK8
```

**Body raw**

```json
{
    "description": "ToDo 1 Updated",
    "deadLine": "4 May",
    "createdBy": "A"
}
```





**Response**

```json
{
    "message": "Task Updated",
    "data": {
        "deadLine": "4 May",
        "_id": "608f8c0d5d01a50015f7b79e",
        "description": "ToDo 1 Updated",
        "createdBy": "A",
        "user": "608ee2e838bbcc73cc3aa37a",
        "createdAt": "2021-05-03T05:37:17.183Z",
        "updatedAt": "2021-05-03T05:37:17.183Z",
        "__v": 0
    }
}
```

### <span style="color:orangered">DELETE</span> Delete ToDo

```
https://todo-2-api.herokuapp.com/api/v1/todos/delete/:id
```

**Header**

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2RvcyI6WyI2MDhlZTMzNDM4YmJjYzczY2MzYWEzN2IiXSwiX2lkIjoiNjA4ZWUyZTgzOGJiY2M3M2NjM2FhMzdhIiwiZW1haWwiOiJhQGIuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkUEo1ZmhUaHFzSk9lNjgvV05BMXNtLlZPalQ5S01mcy5ZSHFkL09sbWF6OXhpL29MSXVJcnEiLCJjcmVhdGVkQXQiOiIyMDIxLTA1LTAyVDE3OjM1OjM2Ljg3NVoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA1LTAyVDE3OjM2OjUyLjQ2NloiLCJfX3YiOjEsImlhdCI6MTYyMDAxODIyMCwiZXhwIjoxNjIwMDE5MjIwfQ.tpPdzctQqtDvkGT-ZJ4D3q_YKLOa5VrapxcwTtJOYK8
```



**Response**

```json
{
    "message": "Task Deleted",
    "data": {
        "deadLine": "4 May",
        "_id": "608f8c0d5d01a50015f7b79e",
        "description": "ToDo 1 Updated",
        "createdBy": "A",
        "user": "608ee2e838bbcc73cc3aa37a",
        "createdAt": "2021-05-03T05:37:17.183Z",
        "updatedAt": "2021-05-03T05:39:31.310Z",
        "__v": 0
    }
}
```

