class ApiDataSource {

    // je crée la méthode statique ( de classe) get qui admet un paramètre url
    static async get(url){
        // axios  (autre façon de faire des call API)
        // FETCH est LA méthode utilisée pour faire des requêtes HTTP , la méthode numéro 1 pour communiquer avec des services distants

        /* gestion de la requête */
        // le result est en format json nous devons le parser en JavaScript
        const result = await fetch(url, {
                method: "GET"
        })
        // la méthode .json() permet  de faire passer le JSON en javascript pour qu'il soit utilisable dans notre code
        const jsResult = await result.json()
        return jsResult
    }

    static send(data, method){
        // j'ai fait cette fonction send pour que je puisse utiliser fetch avec des valeurs determinées en fonction de l'endroit (sous-entendu en fonction du service) où j'appelle la fonction send 
        fetch(url, {
            method: method,
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
    }
}

export default ApiDataSource