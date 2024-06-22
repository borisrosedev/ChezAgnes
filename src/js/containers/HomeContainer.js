class HomeContainer {
  constructor(onNavigate) {
    // définition d'un attribut onNavigate pour la classe HomeContainer
    this.onNavigate = onNavigate;

    const homeLoginButton = document.getElementById("home-login-button");

    // Je vous mets cette version là mais vous savez que vous auriez pu utiliser .onclick =

    homeLoginButton.addEventListener("click", this.onLoginClick.bind(this));
    // le bind me permet de lier la callback (onLoginClick) à l'actuel contexte d'exécution (la classe) comme cela dedans la référence à this fera référence ce contexte et pas à un autre
  }

  onLoginClick() {
    this.onNavigate("#login");
  }
}

export default HomeContainer;
