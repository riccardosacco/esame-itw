import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
    <h3>Home page</h3>
    <ul>
      <li>
        Cartella 1
        <ul>
          <li>Cartella 11</li>
          <li>Cartella 12</li>
          <li>Cartella 13</li>
        </ul>
      </li>
      <li>
        Cartella 2
        <ul>
          <li>Cartella 21</li>
        </ul>
      </li>
      <li>
        Cartella 3
        <ul>
          <li>Cartella 31</li>
        </ul>
      </li>
    </ul>
    `;
  }
}
