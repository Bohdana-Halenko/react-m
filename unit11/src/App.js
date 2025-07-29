import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
    };
  }

  // Завантаження даних із локального сховища при монтуванні
  componentDidMount() {
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");

    if (savedUsername || savedEmail) {
      this.setState({
        username: savedUsername || "",
        email: savedEmail || "",
      });
      console.log("Дані завантажено з localStorage");
    }
  }

  // Збереження даних у локальне сховище після оновлення стану
  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      localStorage.setItem("username", this.state.username);
    }

    if (prevState.email !== this.state.email) {
      localStorage.setItem("email", this.state.email);
    }
  }

  // Оновлення стану при зміні вмісту полів вводу
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email } = this.state;

    return (
      <div>
        <h1>Форма введення користувача</h1>
        <form>
          <label>
            Ім&apos;я користувача:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <div>
          <h2>Введені дані:</h2>
          <p>Ім&apos;я користувача: {username}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    );
  }
}

export default UserForm;
