import express, { Express, Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/apology', async (req: Request, res: Response) => {
	res.json({
		recipient: 'Shully',
		message:
			'I sincerely apologize for my wrong behavior in the #stageThreeBackend Track, Please accept my apologies',
	});
});

export default router;
