import express from 'express';
import { assighnStudentMentor, createStudent, getAllStudent, getOneStudentMentor, getStudentWithoutMentor, getStudentsMentor, updateStudentMentor} from '../Controllers/student.controller.js';


const studentRouter = express.Router()


studentRouter.post('/create/student',createStudent)
studentRouter.get('/student',getAllStudent)
studentRouter.get('/student_Mentor',getStudentsMentor)
studentRouter.get('/one_student_mentor',getOneStudentMentor)
studentRouter.get('/student_without_mentor',getStudentWithoutMentor)
studentRouter.post('/Assign_Student_mentor',assighnStudentMentor)
studentRouter.post('/updateStudentMentor',updateStudentMentor)



export default studentRouter;
