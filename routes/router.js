import express from 'express'
import multer from 'multer'
import { deleteUserData, getUserData, userController } from '../Controllers/userController.js'

const router = express.Router()

//image storage path
const imgConfig = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, './uploads')
    },
    filename: (req, file, callback) =>{
        callback(null, `image-${Date.now()}. ${file.originalname}`)
    }
})

//image filter
const isImage = (req,file,callback) =>{
    if(file.mimetype.startsWith('image')){
        callback(null, true)
    }else{
        callback(new Error("only images are allowed"))
    }
}

const upload = multer({
storage: imgConfig,
fileFilter: isImage
})

//api
router.post("/register", upload.single("image"), userController)
router.get("/getdata",getUserData)
router.get("/:id", deleteUserData)
export default router