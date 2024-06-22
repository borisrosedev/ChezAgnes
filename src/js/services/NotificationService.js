import section from "../components/section.js";

class NotificationService {
  // mais ou vais-je afficher les notifications ?
  // cela nous a conduit à créer une interface notification (layouts)
  constructor() {
    // ici je déclare une variable qui va stocker l'élément html  notification
    this.notifElement = document.getElementById("notification");
  }

  setMessage(val, type) {
    this.notifElement.innerHTML = section(
      `notification-animation notification-animation--${type}`,
      val,
    );
  }
}

export default NotificationService;
