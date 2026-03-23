import { Hono } from "hono";
import contactRouter from "./routes/contact";
import resumeRouter from "./routes/resume";

const app = new Hono<{ Bindings: Env }>();

app.route('/api/contact', contactRouter);
app.route('/api/resume', resumeRouter);

export default app;
