import ApiDataSource from "../data-sources/api-data-source.js"

class UsersService {

    static async getUsers(){
        // j'ai envie que l'administrateur puisse récupérer toutes les informations utilisateur
        return await ApiDataSource.get("./src/js/data-sources/users.json")
    }

    static getUserById(id){
     
    } 

    static createUser(data){

    }

    static deleteUserById(id){

    }

    static updateUserById(id){

    }




}

export default UsersService