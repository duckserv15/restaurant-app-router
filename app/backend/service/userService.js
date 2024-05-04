import prismaClient from "../lib/prismaSingleton"

class UserService {
  insertUser = async(email , password) => {

    console.log("ini dah",email, password)
       await prismaClient.user.create({
        data : {
          email,
          password
        }
      })
  }
  getUserByEmail =async(email)=> {
    const user = await prismaClient.user.findFirst({
      where: {
        email,
      }
    })

    return user
  } 

  getUserById =async(id)=> {
    const user = await prismaClient.user.findFirst({
      where: {
        id,
      }
    })

    return user
  } 
}

export default new UserService()