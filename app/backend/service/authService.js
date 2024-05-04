import UserService from "./userService"
export class AuthService {
  constructor() {
    this.userService = UserService 
  }

  register = async(email,password) => {
    return await this.userService.insertUser(email, password)
  }

  login = async(email,password) => {
    const user = await this.userService.getUserByEmail(email)

    if(!user){
      return null
    }

    if(user.email !== email || user.password !== password){
      return null
    }

    return user
  }
}

export default new AuthService()
