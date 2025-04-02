import User from "../models/User"
import { Request, Response } from "express" // Types de express nativos
import { hashPassword } from "../utils/Auth"
//Evitar simore los tipos de dato any

export const createAccount = async (req: Request,res: Response)=>{
    const {email, password, handle} = req.body

    const userExists = await User.findOne({email})
    if(userExists){
        const error = new Error("El usuario ya existe")
        res.status(409).json({error: error.message}) 
        return
    }else{
        console.log("El usuario no existe")
    }
  
    const user = new User(req.body)
    user.password =await hashPassword(password)
    const { default: slug } = await import('slug');
    console.log(slug(handle, ""))
    await user.save()

    res.status(201).json({msg:"Registro creado correctamente"})
}  