const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;

const user = {
  username: "test",
  password: "1234",
  fullname: "Sergi Chitadze",
  sex: "male",
  birthdate: "1997-10-24",
  activityLevel: "moderatelyActive",
  weight: 75,
  height: 172
}

app.get("/", (request, response) => {
  response.send("Hello from backend!");
});


app.post("/auth/login", (request, response) => {
  console.log(request.body);

  response.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});