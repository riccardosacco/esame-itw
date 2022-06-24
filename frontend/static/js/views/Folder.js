import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Folder");
  }

  async getHtml() {
    const folder = await this.getFolder({ id: this.params.id });

    return `
    <div class="page">
      <div onclick="history.back()" class="back">Indietro</div>
      <div class="folders">
        <div class="folder" data-id="${folder.id}">
          <span class="folder-name title">${folder.name}</span>
          <div class="subfolders">
            ${folder.documents
              .map((document) => {
                return `<a href="/documents/${document.id}" class="subfolder" data-id="${document.id}" data-link>${document.name}</a>`;
              })
              .join("")}
          </div>
        </div>
      </div>
    `;
  }
}
