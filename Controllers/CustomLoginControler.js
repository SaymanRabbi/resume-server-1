const CustomUserAccount = require("../Models/CustomUserAccount")
const bcrypt = require("bcryptjs");
exports.CustomLoginControler = async (req, res) => {
 try {
    const { email,password,displayName,photoURL} = req?.body?.data
    const userExits = await CustomUserAccount.findOne({email:email})
    if(userExits){
        return res.status(200).json({message:"User already exists"})
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const userCreate = await new CustomUserAccount({
        email,
        password:hashPassword,
        displayName,
        photoURL
    }).save()
    const skip = await CustomUserAccount.findOne({email:email}).select('-password')
    return res.status(200).json({message:"User created successfully",
    data:skip})
 } catch (error) {
    
 }
}

exports.CustomLogin = async (req, res) => {
    try {
        const { email, password } = req?.body?.data
        const findUser = await CustomUserAccount.findOne({email:email})
        if(!findUser){
            return res.status(400).json({message:"User not found"})
        }
        const isMatch = bcrypt.compare(password, findUser?.password);
        if(!isMatch){
            return res.status(200).json({message:"Password not matched"})
        }
        const skip = await CustomUserAccount.findOne({email:email}).select('-password')
        res.status(200).json({message:"Login successfully", data:skip})
    } catch (error) {
        
    }
}