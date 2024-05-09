import userModel from "../Models/usersSchema.js";
import moment from 'moment'

export const userController = async (req,res) =>{
const {filename} = req.file;
const {fname} = req.body;

if(!fname|| !filename){
    res.status(401).json({message: "Fill all the data"})
}

try {
    const date = moment(new Date()).format("YYYY-MM-DD")
    const userdata = new userModel({
        fname: fname,
        imgpath: filename,
        date: date
    })

    const data = await userdata.save()
    res.status(200).json(data)
} catch (error) {
    res.status(401).json({message: error.message})
}
}

//getting user data
export const getUserData = async(req,res) =>{
    try {
        const getUser =  await userModel.find();
        res.status(200).json(getUser)
    } catch (error) {
        res.status(401).json({message: error.message})
    }
}

//deleting user data
export const deleteUserData = async (req,res) =>{
    try {
       const id = req.params.id;
       const dltUser = await userModel.findByIdAndDelete({_id: id}) 
       res.status(200).json(dltUser)
    } catch (error) {
        res.status(401).json({message: error.message}) 
    }
}