import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "../css/signUpContent.css";
import { KeyOutline, PersonCircleOutline } from "react-ionicons";
import { LoginRsponseInterface } from "../interfaces";
import { useNavigate } from "react-router-dom";

function SignUpContent() {
  const operadorURL: string = import.meta.env.VITE_STREAMAPP_MS_OPERADOR;
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${operadorURL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en registro");
      }

      const data: LoginRsponseInterface = await response.json();

      console.log(data);

      // Si tu backend devuelve token al registrarse
      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        navigate("/dashboard");
      } else {
        // Si solo devuelve confirmación, redirigimos a login
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup-form-container">
      <Form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="text-white mb-4 text-center">Registrate</h2>

        <Form.Group controlId="formFirstName" className="mb-3 user-input">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Nombre(s)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formLastName" className="mb-3 user-input">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Apellido(s)"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formUsername" className="mb-3 user-input">
          <InputGroup>
            <InputGroup.Text>
              <PersonCircleOutline cssClasses={"user-icon"} color={"#ffffff"} />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          Registrarse
        </Button>
      </Form>
    </div>
  );
}

export default SignUpContent;
