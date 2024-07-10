# XAT amb socket.io

Aquest és el projecte d'una aplicació bàsica de xat.
Els usuaris poden registrar-se, fer l'inici de sessió i xatejar amb els altres usuaris. Si dos usuaris estan en línia i en la mateixa conversa podran gaudir de la mateixa en temps real, gràcies a la comunicació bidireccional obtinguda amb la utilització de la biblioteca de JavaScript ***socket.io***.
Tots els usuaris, els xats i els missatges també tenen persistència en una base de dades de MongoDB (s'ha utilitzat Mongoose com ODM en la part del back-end)

##### IT ACADEMY | NODE JS | SPRINT 7
-------------------------

### Projecte desenvolupat amb:
![Javascript](https://img.shields.io/badge/-Javascript.js-black?style=flat-square&logo=javascript)
![Node.js](https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb&logoColor=green)
![Mongoose](https://img.shields.io/badge/-Mongoose-black?style=flat-square&logo=mongoose&logoColor=green)
![Socket.io](https://img.shields.io/badge/-Socket.io-black?style=flat-square&logo=socketdotio&logoColor=white)
![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&logoColor=cyan)
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-black?style=flat-square&logo=tailwindcss&logoColor=cyan)
![DaisyUI](https://img.shields.io/badge/-DaisyUI-black?style=flat-square&logo=daisyui&logoColor=white)

------------

### Característiques del projecte
##### Nivell 1 ⭐️
- [x] Xat en temps real amb socket.io
- [x] Autenticació amb Json Web Tockens
- [x] Persistència amb MongoDB

##### Nivell 3 ⭐️
- [x] Registre d'usuaris
- [x] Logout d'usuaris
- [x] Frontend amb React

-------------

### Estructura de carpetes i archius del Back-end

``` 
XAT
├── server/
│   ├── config/
│   │   └── connectDB.js
│   │
│   ├── controllers/
│   │   └── message.controllers/
│   │   │   └── getMessages.js
│   │   │   └── sendMessage.js
│   │   └── user.auth.controllers/
│   │   │   └── loginUser.js
│   │   │   └── logoutUser.js
│   │   │   └── registerUser.js
│   │   └── user.controllers/
│   │         └── getUsers.js
│   │
│   ├── middleware/
│   │   └── validateToken.js
│   │
│   ├── models/
│   │   └── chat.model.js
│   │   └── message.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   └── message.router.js
│   │   └── user.auth.router.js
│   │   └── user.router.js
│   │
│   ├── socket/
│   │   └── socket.js
│   │
│   ├── tokens/
│   │   └── createToken.js
│   │
│   └── index.js
```

------------

### Endpoints de la API

#### AUTENTICACIÓ D'USUARIS
- **POST /api/register**  --> Crea un nou usuari.
- **POST /api/login**  --> Login de usuari.
- **POST /api/logout**  --> Logout de usuari.

#### USUARIS
- **GET /api/users**  --> Retorna el llistat de tots els usuaris del xat.

#### MISSATGES
- **POST /api/messages/send/:id** --> Envio de missatge entre un usuari i un altre.
- **GET /api/messages/:id** --> Retorna tots els missatges de un xat.

------------------


### Prerequisits

Abans de llençar el projecte comprova de tenir instal·lat Node.js en el teu sistema operatiu i MongoDB corrent.


### Clonació del projecte

1. Clonació del repositori des de gitHub
```bash
git clone https://github.com/g-rise/7.1-giulio.parise
```
2. Accedeix a la carpeta del projecte
```bash
cd 7.1-giulio.parise
```

### Activació del Back-end
1. Accés a la carpeta del back-end
```bash
cd server
```
2. Instal·lació de les dependències
```bash
npm install
```
3. Execució de l'aplicació.
```bash
npm run dev
```

### Activació del Front-end
1. Accés a la carpeta del front-end
```bash
cd client
```
2. Instal·lació de les dependències
```bash
npm install
```
3. Execució de l'aplicació.
```bash
npm run dev
```

> [!IMPORTANT]
Abans de llençar l'aplicació utilitza el fitxer `.env.example` com a exemple per crear un fitxer `.env` que pugui anar bé en el teu entorn de desenvolupament.

-------------------

### Postman

En la carpeta **`/documents/postman`** hi ha una col·lecció de peticions HTTP que exemplifiquen el funcionament del projecte en la banda del servidor.

-------------------

:tw-1f47e: :tw-1f379: :tw-25aa: :tw-1f1f9: :tw-1f1ed: :tw-1f1ea: :tw-25aa: :tw-1f1ea: :tw-1f1f3: :tw-1f1e9: :tw-25aa: :tw-1f412: :tw-1f389:
