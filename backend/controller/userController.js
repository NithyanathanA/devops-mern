import UserModel from "../model/user.js"

export const addUser = async() => {
    try {
        await UserModel.create({
            user_name:"nihty",
            email:"nithy@gmail.com"
        })
        return
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async() => {

    try {
        return await UserModel.find({});
    } catch (error) {
        
    }
}