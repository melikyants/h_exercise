"use strict";
//import Clients from './clients';

class Client {
  constructor({ el, data }) {
    this._el = el;
    this._data = data;

    this._render(this._data);

  };

  _render(data) {
    let innerHTML = '';
    let clientId = location.href.split('?id=')[1]

    data.forEach((client) => {

      if (+clientId === +client.id) {

        this._el.innerHTML = `
        <div>
          ${client.name}
          <br />
           ${client.email}
        </div>
      `
      }
    });

  }
}

export default Client;