import button from "./button.js"
import input from "./input.js"

const form = function(data){
    // on part de l'idée que data aura une propriété inputs qui sera un tableau

    return(
        `
        
            <form class="form" id="${data.formId}">
                <section>
                    ${data.inputs.map(inp => input(inp))}
                </section>
                <section>
                    ${data.buttons.map(btn => button(btn))}
                </section>

            </form>
        
        
        `
    )

}

export default form