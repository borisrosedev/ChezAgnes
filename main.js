import LoginContainer from "./src/js/containers/LoginContainer.js"
import header from "./src/js/layouts/header.js"
import login from "./src/js/pages/login.js"
import notification from "./src/js/layouts/notification.js"
import UsersService from "./src/js/services/UsersService.js"


window.onpopstate = function(){
    //le state popping est une événement qui concerne toute modification apportée  à l'url. Quand une modification survient cet événement se déclence il est "triggered"

    console.log('🟢 popstate event has occurred ')
    navigate(window.location.hash)
}


const navigate = async function(h){
   console.log('🔵 navigate has been called')
   const container = document.getElementById('container')
   container.innerHTML = ""
   container.innerHTML += notification()
   container.innerHTML += header();
   // parce que je vais mettre une position fixe sur l'interface de notfication je peux appeler la fonction notifcation() et l'ajouter au html de la page OU JE VEUX
   switch(h){
        case "":
                console.log('🟠 case : home page')
                console.log('je suis sur la page home')
                container.innerHTML = "" 
                
            break;
        case "#login":
                console.log('🟠 case : login page')
    
                container.innerHTML +=  login() 
                console.log('🔴 login interface created')
                new LoginContainer() 
                console.log('🔴 login business logic running')
            break;

    }
}

navigate(window.location.hash)