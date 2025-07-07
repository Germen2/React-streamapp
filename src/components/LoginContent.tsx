import { Button, Form, InputGroup } from "react-bootstrap";
import "../css/loginContent.css";
import { KeyOutline, PersonCircleOutline } from "react-ionicons";

function LoginContent() {
  return (
    <div className="login-form-container">
      <Form className="login-form">
        <h2 className="text-white mb-4 text-center">Iniciar Sesión</h2>

        <Form.Group controlId="formUsername" className="mb-3 user-input">
          <InputGroup>
            <InputGroup.Text>
              <PersonCircleOutline cssClasses={"user-icon"} color={"#ffffff"} />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Usuario" />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-4 password-input">
          <InputGroup>
            <InputGroup.Text>
              <KeyOutline cssClasses={"password-icon"} color={"#ffffff"} />
            </InputGroup.Text>
            <Form.Control type="password" placeholder="Contraseña" />
          </InputGroup>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Entrar
        </Button>
      </Form>
    </div>
  );
}
export default LoginContent;
