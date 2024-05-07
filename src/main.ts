import {
  randomEmail,
  randomName,
  randomProduct,
  randomLocation,
} from "./utils/randomData";
import PythonRouter from "./routes/Python";
import userRouter from "./routes/User";
import app from "./server";
import TemplateRouter from "./routes/_Template";

app.use("/user", userRouter);
app.use("/products", PythonRouter);

app.use("/template", TemplateRouter);

console.log(
  `Name: ${randomName}\nlocation: ${randomLocation.latitude}, ${randomLocation.longitude}\nEmail: ${randomEmail}\nProduct: ${randomProduct.name}`
);
