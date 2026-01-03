import express from 'express';
const router = express.Router();

router.use((req, res) => {
	res.status(404).send({ error: 'Not Found', code: 404 });
});

export default router;
