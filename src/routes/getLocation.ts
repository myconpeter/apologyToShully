import express, { Express, Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/apology', async (req: Request, res: Response) => {
	res.json({
		recipient: 'Shully',
		message:
			"I sincerely apologize for my inappropriate behavior. It was caused by my phone's autocomplete feature, and I failed to review the message before sending it. I deeply regret any inconvenience this may have caused. Please accept my heartfelt apologies.",
	});
});

export default router;
