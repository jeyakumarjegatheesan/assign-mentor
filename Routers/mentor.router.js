import { createMentor, getMentorWithoutStudents, getMentoredStudents, getOneMentorStudents, getallMentor } from "../Controllers/mentor.controller.js";
import express from 'express';


const router = express.Router()


router.post('/create/mentor',createMentor);
router.get('/mentor',getallMentor);
router.get('/mentoredstudents',getMentoredStudents);
router.get('/one_mentor_students',getOneMentorStudents)
router.get('/mentor_wituhout_students',getMentorWithoutStudents)



export default router;