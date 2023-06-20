const ResumeSchema = require('../Models/SaveResume')
exports.GetResumeControler = async (req, res) => {
    try {
        const email = req.params.id
         const resume = await ResumeSchema.findOne({email:email})
      return res.send({
        data : resume
      })
    } catch (error) {
        
    }
}

exports.DeleteResumeControler = async (req, res) => {
  try {
    const {id} = req.params
    const resume = await ResumeSchema.deleteOne({resumeId:id})
    return res.send({
      success : 'deleted successfully'
    })
  } catch (error) {
    
  }
}