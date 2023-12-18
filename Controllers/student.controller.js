import Student from "../Models/students.schema.js";



export const createStudent = async(req,res)=>{
    try {
        const student = new Student(req.body)
        await student.save()
    } catch (error) {
        res.status(500).json({error:"Erro in create student"})
    }

}

export const getAllStudent = async(req,res)=>{
    try {
        const student =await Student.find()
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({error:"Erro in get student"})
    }
}

export const getStudentsMentor = async(req,res)=>{
    try {
        const pipeline = [
                {
                  $lookup: {
                    from: 'mentors', 
                    localField: 'mentor_id', 
                    foreignField: '_id',
                    as: 'Student_mentor' 
                  }
                }
              ];
        const result =await Student.aggregate(pipeline);
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({error:"Error in get students mentor"})
    }


}



export const getOneStudentMentor = async(req,res)=>{
    try {

        const studentName = req.body.student_name; 
        const pipeline = [
                {
                  $lookup: {
                    from: 'mentors', 
                    localField: 'mentor_id', 
                    foreignField: '_id',
                    as: 'Student_mentor' 
                  }
                },
                {
                  $match:{student_name:studentName}
                }
              ];
             
        const result =await Student.aggregate(pipeline);
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({error:"Error in get particular student mentor"})
    }
}

export const getStudentWithoutMentor = async(req,res)=>{
    try {
        const pipeline = [
            {
              $lookup: {
                from: 'mentors', 
                localField: 'mentor_id', 
                foreignField: '_id',
                as: 'Student_mentor' 
              }
            },
            {
              $match:{Student_mentor:[]}
            }
          ];
          const result = await Student.aggregate(pipeline);
          res.status(200).json(result)
    } catch (error) {
        res.status(500).json({Error:"error in gettting student without mentor"})
    }
}


export const assighnStudentMentor = async(req,res)=>{
  try {
    await Student.updateOne({student_name:req.body.student_name},
      {$push:{mentor_id:req.body.mentor_id}})
    res.status(200).json({message:"assighned sucessfully"})
  } catch (error) {
    res.status(500).json({Error:"error in assighning mentor"})
  }
}


export const updateStudentMentor = async(req,res)=>{
  try {
    const result = await Student.updateOne({student_name:req.body.student_name},
      {$set:{mentor_id:req.body.mentor_id}})
      res.status(200).json({messege:"updated sucessfully",result})
  } catch (error) {
    res.status(500).json({Error:"error in updating"})
  }
}