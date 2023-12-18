import Mentor from "../Models/mentor.schema.js";


export const createMentor = async(req,res)=>{
    try {
        const mentor = new Mentor(req.body)
        await mentor.save()
    } catch (error) {
        res.status(500).json({error:"Error in create mentor"})
    }

}


export const getallMentor = async(req,res)=>{
    try {
        const mentor =await Mentor.find()
        res.status(200).json(mentor)

    } catch (error) {
        res.status(500).json({error:"Error in get mentor"})
    }

}


export const getMentoredStudents = async(req,res)=>{
    try {
        const pipeline = [
                {
                  $lookup: {
                    from: 'students', 
                    localField: '_id', 
                    foreignField: 'mentor_id',
                    as: 'mentored_students' 
                  }
                }
              ];
        const result =await Mentor.aggregate(pipeline);
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({error:"Error in get mentored students"})
    }


}

export const getOneMentorStudents = async(req,res)=>{
    try {
        const mentorName= req.body.mentor_name;
        const pipeline = [
            {
              $lookup: {
                from: 'students', 
                localField: '_id', 
                foreignField: 'mentor_id',
                as: 'mentored_students' 
              }
            },
            {
              $match:{mentor_name:mentorName}
            }
          ];
          const result = await Mentor.aggregate(pipeline);
          res.status(200).json(result);
        
    } catch (error) {
        res.status(500).json({error:"Error in get One mentor students"})
    }
}

export const getMentorWithoutStudents = async(req,res)=>{
    try {
        const pipeline = [
            {
              $lookup: {
                from: 'students', 
                localField: '_id', 
                foreignField: 'mentor_id',
                as: 'mentored_students' 
              }
            },
            {
              $match:{mentored_students:[]}
            }
            
          ];
          const result = await Mentor.aggregate(pipeline);
          res.status(200).json(result);
    } catch (error) {
        res.status(500).json({Error:"error in getting mentor without student"})
    }
}