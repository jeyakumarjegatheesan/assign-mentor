import mongoose, { isObjectIdOrHexString} from "mongoose";



const studentSchema = mongoose.Schema({
    student_name:String,
    subject:String,
    mentor_id:{
        type:mongoose.Schema.ObjectId,
            }
   
})

const Student = mongoose.model("Student",studentSchema)

export default Student;