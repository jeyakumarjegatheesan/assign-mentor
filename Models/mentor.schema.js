import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({
    mentor_name:String,
    subject:String
})

const Mentor = mongoose.model("Mentor",mentorSchema);


export default Mentor;


