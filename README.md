I'm trying to build a chat app using React, Redux, and Phoenix.

Running currently requires two different processes, one for frontend and one for backend:

```
cd client
npm install
npm start
```

```
cd server
mix ecto.create && mix ecto.migrate
mix ecto.server
```
