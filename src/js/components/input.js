const input = function (data) {
  return `
            <input 
            class="input"
            id="${data.id}" placeholder="${data.placeholder}"  type="${data.type}" />
        
        `;
};

export default input;
