import express from "express"
import wrapAsync from "../../utils/wrapAsync.js"
import { loginUser, signUpUser } from "../../controllers/AuthController/authUser.js";
const router = express.Router();

router.post("/u/signup", wrapAsync(signUpUser))
router.post("/u/login", wrapAsync(loginUser))

export default router;