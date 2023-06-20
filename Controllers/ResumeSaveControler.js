const ResumeSchema = require('../Models/SaveResume')

exports.ResumeSaveControler = async (req, res) => {
    try {
        const  { email, resumeId } = req.body
        const findUser = await ResumeSchema.findOne({email:email})
        if(findUser){
            const updateResume = await ResumeSchema.findByIdAndRemove(findUser._id)
            const resume = await new ResumeSchema(req.body).save();
            return res.status(200).json({message:"Resume updated successfully"})
        } 
        const resume = await new ResumeSchema(req.body).save();
        res.status(200).json({
            status: "success",
            data: resume
        })
    } catch (error) {
        
    }
}