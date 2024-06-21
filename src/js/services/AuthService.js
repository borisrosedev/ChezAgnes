import UsersService from "./UsersService.js";

class AuthService {

   
    static async login(data){
        // pour la connexion sous-entendu il existe déjà en bdd
        const users = await UsersService.getUsers()
        if(users.length){
            const user = users.find((us) => us.email == data.email)
            if(user){
                console.log('user', user)
                if(user.password == data.password) {
                    return true
                } else {
                    return false
                }
             
            } else {
                return false
            }
        } else {
            return false
        }

    }

    static async register(){
        // inscription il n'existe donc pas en bdd

    }

    static logout(){
        // il se déconnecte de sa session
    }



}

export default AuthService