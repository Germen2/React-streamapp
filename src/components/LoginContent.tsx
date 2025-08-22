import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "../css/loginContent.css";
import { KeyOutline, PersonCircleOutline } from "react-ionicons";
import { useNavigate } from "react-router-dom";
import { LoginRsponseInterface, SignInDto } from "../interfaces";

function LoginContent() {
  const operadorURL: string = import.meta.env.VITE_STREAMAPP_MS_OPERADOR;
  const navigate = useNavigate();

  const [username, seteUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const credentials: SignInDto = { username, password };

    console.log(`${operadorURL}/auth/login`);
    try {
      const response = await fetch(`${operadorURL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error("Error en login");
      }

      const data: LoginRsponseInterface = await response.json();
      console.log("Respuesta del backend:", data);

      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      navigate(`/dashboard`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-form-container">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h2 className="text-white mb-4 text-center">Iniciar Sesión</h2>

        <Form.Group controlId="formUsername" className="mb-3 user-input">
          <InputGroup>
            <InputGroup.Text>
              <PersonCircleOutline cssClasses={"user-icon"} color={"#ffffff"} />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Correo electrónico"
              value={username}
              onChange={(e) => seteUsername(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-4 password-input">
          <InputGroup>
            <InputGroup.Text>
              <KeyOutline cssClasses={"password-icon"} color={"#ffffff"} />
            </InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Entrar
        </Button>
      </Form>

      <Button variant="secondary" href="/signup" className="w-100 mt-2">
        Crear una cuenta
      </Button>
    </div>
  );
}

export default LoginContent;
