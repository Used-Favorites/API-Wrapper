import app from "./server";

import PythonRouter from "./routes/Python";
import userRouter from "./routes/User";
import TemplateRouter from "./routes/_Template";
import ProductRouter from "./routes/Product";
import Categoryrouter from "./routes/Category";

import Cartrouter from "./routes/Cart";
import Productrouter from "./routes/Product";

app.use(["/user", "/users"], userRouter);
app.use("/python", PythonRouter);
app.use("/template", TemplateRouter);
app.use('/category', Categoryrouter);

app.use('/Cart', Cartrouter);
app.use('/Product', Productrouter);
app.use(["/product", "products"], ProductRouter);

export default app;
