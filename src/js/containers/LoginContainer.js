import NotificationService from "../services/NotificationService.js";
import UsersService from "../services/UsersService.js";

class LoginContainer {

    // le constructeur est ce qui permet à une classe de donner son prototype à d'autres objets que l'on va alors appelés des instances de cette classe
    // un constructeur est une fonction spéciale qui est facultative 
    constructor(){
        // tout ce qui existe sur l'interface et que vous souhaitez manipuler vous allez le déclarer dans le constructeur 
        const form = document.getElementById('login-form');
        console.log(this)
        const self = this
        form.onsubmit = function(e){
            //console.log('this ?', this)
            self.onSubmit(e)
        }
    
    }

    async onSubmit(e){
        e.preventDefault()
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailValue = emailInput.value 
        const passwordValue = passwordInput.value 
        console.log(emailValue, passwordValue)

        if(!passwordValue || !emailValue){
            new NotificationService().setMessage("Email ou Mot de passe oublié")
            return
        }

        const allUsers = await UsersService.getUsers()
        
        const user = allUsers.find((us) => us.email == emailValue)
        if(user){
            if(user.password == passwordValue){
                new NotificationService().setMessage("Bienvenue ! Session en cours de chargement")
            } else {
                new NotificationService().setMessage("Informations invalides")
            }
        }


    }




}

export default LoginContainer