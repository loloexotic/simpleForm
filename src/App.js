import { useState } from "react";
import "./App.css";
import Results from "./components/Results";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="App">
      <div>
        <h1>Create account</h1>
      </div>

      <form
        action="SimpleForm"
        onSubmit={(event) => {
          event.preventDefault();
          if (password !== confirmPassword) {
            setErrorMessage("Vos MDP doivent être identique");
            alert("Vos MDP doivent être identique");
          } else {
            alert("Your account is created");
          }
        }}
      >
        <label htmlFor="Name">
          <input
            value={name}
            type="text"
            name="username"
            placeholder="Jean Dupont"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label htmlFor="Email">
          <input
            value={email}
            type="email"
            placeholder="dupont@lereacteur.io"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <label htmlFor="Password">
          <input
            value={password}
            type="password"
            placeholder="lEeacteur2023"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <label htmlFor="Confirm your password">
          <input
            value={confirmPassword}
            type="password"
            placeholder="lEeacteur2023"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
        </label>
        <button type="submit">Register</button>
        {/* il faut return setEmail, setName, setPassword but how??
        that's doesn't work */}
      </form>

      <footer>Made with React at Le Reacteur By Laura ✌🏾 </footer>
    </div>
  );
}

export default App;
