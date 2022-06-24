import config from "../config.js";

export default class {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  async getFolders() {
    const { data: folders } = await axios.get(`/folders`);

    return folders;
  }

  async getFolder({ id }) {
    const { data: folder } = await axios.get(`/folders/${id}`);

    return folder;
  }

  async getDocument({ id }) {
    const { data: document } = await axios.get(`/documents/${id}`);

    return document;
  }

  async login({ username, password }) {
    const { data } = await axios.post("/auth/login", {
      username,
      password,
    });

    return data.token;
  }

  async register({ username, password, confirmPassword }) {
    const { data: user } = await axios.post("/auth/register", {
      username,
      password,
      confirmPassword,
    });

    return user;
  }

  async getHtml() {
    return "";
  }
}
