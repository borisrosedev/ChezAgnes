const button = function (data) {
  return `
        <button class="button" id="${data.id}" type="${data.type}">${data.content}</button>
    `;
};

export default button;
