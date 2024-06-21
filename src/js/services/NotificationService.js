import paragraph from "../components/paragraph.js";

class NotificationService {
    // mais ou vais-je afficher les notifications ?
    // cela nous a conduit à créer une interface notification (layouts)
    constructor(){
        // ici je déclare une variable qui va stocker l'élément html  notification
        this.notifElement = document.getElementById('notification');
    }

    setMessage(val){
        this.notifElement.innerHTML = paragraph("notifcation--animation", val)  
    }


}

export default NotificationService