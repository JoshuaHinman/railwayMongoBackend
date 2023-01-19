import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import EmployeeRouter from './routes/EmployeeRouter.js';
import RoleRouter from './routes/RoleRouter.js';
import TimeOffRequestRouter from './routes/TimeOffRequestRouter.js';
import ScheduleTemplateRouter from './routes/ScheduleTemplateRouter.js';

dotenv.config();
const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to database"));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Welcome to this API DOC'));
app.use('/api/Employee', EmployeeRouter);
app.use("/api/Role", RoleRouter);
app.use("/api/TimeOffRequest", TimeOffRequestRouter);
app.use("/api/ScheduleTemplate", ScheduleTemplateRouter);

app.listen(PORT, () => console.log(`listening on ${PORT}`));

