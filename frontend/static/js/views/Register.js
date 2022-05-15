import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Register");
  }

  async getHtml() {
    return `
    <h3>Register</h3>
    <form action="#">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Repeat password" />
      <button type="submit">Register</button>
    </form>
    `;
  }
}
