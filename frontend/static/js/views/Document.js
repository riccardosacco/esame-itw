import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Document");
  }

  async getHtml() {
    console.log(this.params.id);
    return `
    <h3>Documento</h3>

    
    `;
  }
}
