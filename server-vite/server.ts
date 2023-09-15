const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const db = require("./db.json");

server.use(middlewares);

console.log("line 10");
// server.patch("/champs/:id", (response: any, request: any) => {
//   debugger;
//   console.log("response ", response);
//   console.log("request ", request);
// });

// server.use((req: any, res: any, next: any) => {
//   debugger;
//   // if (req.method === "GET") {
//   //   console.log("response ", req);
//   //   console.log("request ", res);
//   // }
//   console.log("response ", req);
//   console.log("request ", res);
//   // Continue to JSON Server router
//   next();
// });
// jsonServer.router("/cats", (response: any, request: any) => {
//   console.log("response ", response);
//   console.log("request ", request);
// });

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.use((req: any, res: any, next: any) => {
  // if (req.method === "POST") {
  //   req.body.createdAt = Date.now();
  // }
  debugger;
  console.log(req, res);
  // Continue to JSON Server router
  next();
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/addtasks", (req: any, res: any) => {
  const db = router.db; // Assign the lowdb instance
  console.log(req);
  res.status(200).json({ message: db });
});

server.get("/getTest", ({}, res: any) => {
  res.status(200).json({ message: "ok" });
});

server.use(router);
server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
