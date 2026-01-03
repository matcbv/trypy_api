import { config } from 'dotenv';
import cors from 'cors';
import express from 'express';
import oauthRoutes from './routes/oauth.routes.js';
import authRoutes from './routes/auth.routes.js';
//import errorRoutes from './routes/error.routes.js';

config();

const app = express();

app.use(express.json());

app.use(
	cors({
		origin: '*',
	}),
);

app.use('/auth', authRoutes);
app.use('/auth/oauth', oauthRoutes);

app.listen(process.env.SERVER_PORT, () => {
	console.log(`Server running on port ${process.env.SERVER_PORT}`);
});
