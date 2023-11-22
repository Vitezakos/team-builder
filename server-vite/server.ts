const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const db = require("./db.json");

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get("/getTest", ({}, res: any) => {
  res.status(200).json({ message: "ok" });
});

server.post("/addUser", (req: any, res: any) => {
  const { userName } = req.body;
  const doesUserExist = userName in db.users;

  if (!doesUserExist) {
    const userRecord = router.db.get("users");
    userRecord.set(userName, {}).write();
    return res.status(200).json({ message: "new user added" });
  } else {
    return res.status(409).json({ message: "user already exists" });
  }
});

server.use(router);
server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
