import express from 'express'
import { isAuthenticated, isAuthorised } from '../Middlewares/Auth.js';
import { PostJob,AllJobs,MyJob,DeleteJob,JobDetails, SaveJob,UnSaveJob } from '../Controllers/JobsController.js';
const jobRouter = express.Router();

jobRouter.post("/post-job",isAuthenticated,isAuthorised("Employer"),PostJob)
jobRouter.get("/all-jobs",isAuthenticated,AllJobs)
jobRouter.get("/my-jobs",isAuthenticated,isAuthorised("Employer"),MyJob)
jobRouter.delete("/delete-job/:id",isAuthenticated,isAuthorised("Employer"),DeleteJob)
jobRouter.get("/job-details/:id",isAuthenticated,JobDetails)
jobRouter.post("/save-job/:id",isAuthenticated,SaveJob)
jobRouter.post("/un-save-job/:id",isAuthenticated,UnSaveJob)

export default jobRouter;