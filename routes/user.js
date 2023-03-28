const users = require("../data");

const router = require("express").Router();

router.get("/users", (req, res, next) => {
  res.json(users);
});

router.post("/add", (req, res, next) => {
  console.log(req.body);
  const user = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };

  users.push(user);
  res.status(201).json(user);
});
router.get("/user/:id", (req, res, next) => {
    const foundIndex = users.findIndex(current => current.id == req.params.id);
    console.log(users[foundIndex]);
    res.json(users[foundIndex]);
})

router.put("/update/:id", (req, res, next) => {
  const found = users.find((current) => current.id === parseInt(req.params.id));
  if (found) {
    const updatedUser = {
      id: req.params.id,
      name: req.body.name ? req.body.name : found.name,
      age: req.body.age ? req.body.age : found.age,
    };
    const foundIndex = users.findIndex(
      (current) => current.id === parseInt(req.params.id)
    );
    users[foundIndex] = updatedUser;
    res.json(updatedUser);
  }
});

router.delete("/delete/:id", (req, res, next) => {
    const foundIndex = users.findIndex(current => current.id === parseInt(req.params.id));
    if(foundIndex != -1) {
        users.splice(foundIndex,1);
        res.json("user deleted successfully!!!");
    }
    else res.json("user not found!!!")
});

module.exports = router;
