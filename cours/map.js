
const inputs = [{
    type: "email",
    id: "email",
    placeholder: "Entrez votre email"
}, {
    type: "password",
    id: "password",
    placeholder: "Entrez votre mot de passe"
}];

console.log(inputs.map((input) =>  "<p>" + input.placeholder + " " + input.id +"</p>"));