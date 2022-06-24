import AbstractView from "./AbstractView.js";
import config from "../config.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Document");
  }

  async getHtml() {
    const document = await this.getDocument({ id: this.params.id });

    return `
    <div class="page">
      <div onclick="history.back()" class="back">Indietro</div>
      <div class="title">${document.name}</div>
      <div class="document-info">
        <div class=""><b>ID:</b> ${document.id}</div>
        <div class=""><b>Sommario:</b> ${document.summary}</div>
        <div class=""><b>Tipo:</b> ${document.type}</div>
        <div class=""><b>Creato il:</b> ${document.created}</div>
      </div>
      <a href="${document.url}" target="_blank" class="button-url">Apri il documento</a>
    </div>
    `;
  }
}
