import admin from '../services/firebaseAdmin.js';
import express from 'express';
const router = express.Router();

router.post('/verify-token', async (req, res) => {
	try {
		const authorization = req.header('authorization');
		const idToken = authorization.split('Bearer ')[1];
		const payload = await admin.auth().verifyIdToken(idToken);
		res.status(200).json(payload);
	} catch (e) {
		res.status(401).json(e);
	}
});

export default router;
