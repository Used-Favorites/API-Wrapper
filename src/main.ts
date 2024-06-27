import app from "./server";

import PythonRouter from "./routes/Python";
import userRouter from "./routes/User";
import TemplateRouter from "./routes/_Template";
import ProductRouter from "./routes/Product";

app.use(["/user", "/users"], userRouter);
app.use("/python", PythonRouter);
app.use("/template", TemplateRouter);
app.use(["/product", "products"], ProductRouter);

export default app;
