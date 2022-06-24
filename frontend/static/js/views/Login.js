import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Login");
  }

  async getHtml() {
    return `
    <div class="page">
      <h3 class="title">Login</h3>
      <form class="login-form" action="#">
        <input class="form-input" type="email" placeholder="Email" />
        <input class="form-input" type="password" placeholder="Password" />
        <button class="form-button" type="submit">Login</button>
      </form>
    </div>
    
    `;
  }
}
