const AccountModel = require("../Models/AccountModel")
const UserModel = require("../Models/UserModel")

exports.LoginControler = async (req, res) => {
    const {photoURL,email,uid,displayName} = req?.body?.googleuser?.user
    const {providerId} = req.body.googleuser
    const {oauthAccessToken} = req.body.googleuser._tokenResponse
    const Accountid = await AccountModel.findOne({providerAccountId:uid})
    const providerIdexits =   await AccountModel.findOne({provider:providerId})
    if(Accountid && providerIdexits){
        return res.status(200).json({message:"User already exists"})
    }
    const accountCreate =  await AccountModel.create({ 
        userId:uid,
        provider:providerId,
        providerAccountId:uid,
        accessToken:oauthAccessToken,
    })
    await accountCreate.save()
    const userExits = await UserModel.findOne({email:email})
    if(userExits){
        return res.status(200).json({message:"User already exists"})
    }
    const userCreate = await UserModel.create({
        name:displayName,
        email:email,
        image:photoURL,
    })
    await userCreate.save()
    return res.status(200).json({message:"User created successfully"})
}
