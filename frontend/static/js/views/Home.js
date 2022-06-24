import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    const folders = await this.getFolders();

    return `
    <div class="page">
      <h3 class="title">Home page</h3>
      <div class="folders">
        ${folders
          .map((folder) => {
            return `
            <div class="folder" data-id="${folder.id}">
              <span class="folder-name">${folder.name}</span>
              <div class="subfolders">
                ${folder.subfolders
                  .map((subfolder) => {
                    return `<a href="/folders/${subfolder.id}" class="subfolder" data-id="${subfolder.id}" data-link>${subfolder.name}</a>`;
                  })
                  .join("")}
              </div>
            </div>
            `;
          })
          .join("")}
      </div>
    </div>
    `;
  }
}
