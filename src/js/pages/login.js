import form from "../components/form.js";

const login = function () {
  const data = {
    formId: "login-form",
    inputs: [
      {
        type: "email",
        id: "email",
        placeholder: "Entrez votre email",
      },
      {
        type: "password",
        id: "password",
        placeholder: "Entrez votre mot de passe",
      },
    ],
    buttons: [
      {
        type: "submit",
        content: "Valider",
        id: "login-submit-button",
      },
      {
        type: "reset",
        content: "Réinitialiser",
        id: "login-reset-button",
      },
    ],
  };

  return `
            <main class="main login__main">

                <section>
                    ${form(data)}
                </section>

            </main>
        
        `;
};

export default login;
