const express = require('express');
const { PostSkill } = require('../Controllers/PostSkillControler');
const { LoginControler } = require('../Controllers/LoginControler');
const { ResumeSaveControler } = require('../Controllers/ResumeSaveControler');
const { GetResumeControler, DeleteResumeControler } = require('../Controllers/GetResumeControler');
const { CustomLoginControler, CustomLogin } = require('../Controllers/CustomLoginControler');
const route = express.Router();

// --------add resume to dataBase-------
// --------add resume to dataBase-------
route.post('/skill', PostSkill)
route.post('/login', LoginControler)
route.post ('/ResumeSave', ResumeSaveControler)
route.get (`/getResume/:id`, GetResumeControler)
route.delete (`/deleteResume/:id`, DeleteResumeControler)
route.post('/customLogin', CustomLoginControler)
route.post('/customloginuser',CustomLogin)
route.post('/token')

module.exports = route;