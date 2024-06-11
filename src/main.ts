import PythonRouter from "./routes/Python";
import userRouter from "./routes/User";
import app from "./server";
import TemplateRouter from "./routes/_Template";

app.use("/user", userRouter);
app.use("/python", PythonRouter);

app.use("/template", TemplateRouter);
