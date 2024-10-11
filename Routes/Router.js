import express from 'express'
import { GetAllUsers,GetUserProfile, Login, Logout, Register, UpdateProfile,UpdatePassword, CheckToken, DeleteUser } from '../Controllers/UserController.js';
import { isAuthenticated } from '../Middlewares/Auth.js';
import { emailValidation, nameValidation, passwordValidation, phoneNumberValidation } from '../Middlewares/DataMiddleware.js';
const router = express.Router();

router.post("/register",nameValidation,emailValidation,phoneNumberValidation,passwordValidation,Register)
router.post("/login",Login)
router.get("/check-token",isAuthenticated,CheckToken)
router.get("/logout",isAuthenticated,Logout)
router.get("/get-all-users",isAuthenticated,GetAllUsers)
router.get("/getUserProfile",isAuthenticated,GetUserProfile)
router.put("/UpdateProfile",isAuthenticated,UpdateProfile)
router.delete("/delete-user/:id",isAuthenticated,DeleteUser)
router.post("/UpdatePassword",isAuthenticated,UpdatePassword)

export default router