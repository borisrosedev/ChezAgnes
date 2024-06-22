import LoginContainer from "./src/js/containers/LoginContainer.js";
import header from "./src/js/layouts/header.js";
import login from "./src/js/pages/login.js";
import notification from "./src/js/layouts/notification.js";
import home from "./src/js/pages/home.js";
import HomeContainer from "./src/js/containers/HomeContainer.js";

window.onpopstate = function () {
  //le state popping est une événement qui concerne toute modification apportée  à l'url. Quand une modification survient cet événement se déclence il est "triggered"

  console.log("🟢 popstate event has occurred ");
  navigate(window.location.hash);
};

window.onNavigate = function (h) {
  navigate(h);
};

const navigate = async function (h) {
  console.log("🔵 navigate has been called");
  const container = document.getElementById("container");
  container.innerHTML = "";
  container.innerHTML += notification();
  container.innerHTML += header();
  // parce que je vais mettre une position fixe sur l'interface de notfication je peux appeler la fonction notifcation() et l'ajouter au html de la page OU JE VEUX
  switch (h) {
    case "":
      console.log("🟠 case : home page");
      console.log("je suis sur la page home");

      container.innerHTML += home();
      new HomeContainer(window.onNavigate);

      break;
    case "#login":
      console.log("🟠 case : login page");

      container.innerHTML += login();
      console.log("🔴 login interface created");
      new LoginContainer(window.onNavigate);
      console.log("🔴 login business logic running");
      break;
  }
};

// j'ajoute une fonction qui va mettre de faire la navigation directement depuis la classe sans passer par window.location.hash = "" ce qui n'est pas une bonne pratique

// on peut créer toutes les propriétés que l'on veut sur l'objet window
// donc je décide d'en créer une qui s'appelle onNavigate

navigate(window.location.hash);
