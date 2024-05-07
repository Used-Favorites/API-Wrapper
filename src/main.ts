import {
  randomEmail,
  randomName,
  randomProduct,
  randomLocation,
} from "./utils/randomData";
import ProductsRouter from "./routes/Products";
import userRouter from "./routes/User";
import app from "./server";
import TemplateRouter from "./routes/_Template";

app.use("/user", userRouter);
app.use("/products", ProductsRouter);

app.use("/template", TemplateRouter);

console.log(
  `Name: ${randomName}\nlocation: ${randomLocation.latitude}, ${randomLocation.longitude}\nEmail: ${randomEmail}\nProduct: ${randomProduct.name}`
);
