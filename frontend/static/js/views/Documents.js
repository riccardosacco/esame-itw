import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Documents");
  }

  async getHtml() {
    return `
    <h3>Documenti</h3>

    <ul>
      <li>
        Cartella 11
        <ul>
          <li>Documento 1 > <span>accedi</span> > <span>sposta</span></li>
          <li>Documento 2 > <span>accedi</span> > <span>sposta</span></li>
          <li>Documento 3 > <span>accedi</span> > <span>sposta</span></li>
        </ul>
      </li>
    </ul>
    `;
  }
}
