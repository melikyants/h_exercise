"use strict";

class Clients {
  constructor({ el, data }) {
    this._el = el;
    this._data = data;
    this._render(this._data);
  };

  _render(data) {
    let clientsName = '';

    data.forEach((client) => {
      clientsName += `<li><a href="client.html?id=${client.id}">${client.name}</a></li>`;
    });

    let innerHTML = '';

    this._el.innerHTML = `
    <ul>
        ${clientsName}
    </ul>
    `
  }
};

export default Clients;