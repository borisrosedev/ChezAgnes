import button from "../components/button.js";

const home = function () {
  return `
            <main class="main home__main">
            
                <section>
                
                    <header>
                        <h1> Bienvenue sur Chez Agnes </h1>
                    </header>

                    <footer>
                        <!-- la fonction button attend un objet data que j'écris litéralement comme un argument de la fonction button  -->

                        ${button({ id: "home-login-button", type: "button", content: "Connectez-vous" })}
                    
                    </footer>
                
                
                </section>
            
            
            </main>
        
        `;
};

export default home;
