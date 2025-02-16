var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
const router = Router();
router.get('/apology', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        recipient: 'Shully',
        message: "I sincerely apologize for my inappropriate behavior. I mistakenly addressed you as 'Sir,' which was inappropriate, and took it lightly in the stageThreeBackend Track. This mistake was caused by my phone's autocomplete feature, and I failed to review the message before sending it. I deeply regret any inconvenience this may have caused. Please accept my heartfelt apologies.",
    });
}));
export default router;
