import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Register");
  }

  async getHtml() {
    return `
    <div class="page">
      <h3 class="title">Register</h3>
      <form class="register-form" action="#">
        <input class="form-input" type="email" placeholder="Email" />
        <input class="form-input" type="password" placeholder="Password" />
        <input class="form-input" type="password" placeholder="Repeat password" />
        <button class="form-button" type="submit">Register</button>
      </form>
    </div>
    
    `;
  }
}
