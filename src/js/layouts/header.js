import nav from "../components/nav.js"

const header = function(){
    return(
        `
            <header class="app__header">
                <a href="">Chez Agnes</a>
                ${nav()}
            </header>
        
        `
    )
}

export default header;