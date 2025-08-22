import { CardOutline } from "react-ionicons";
import "../css/button.css";
import { ButtonInterface, OperationEnum } from "../interfaces";
import { sendOperation } from "../utils/operations.util";
import { useNavigate } from "react-router-dom";
function Button(props: ButtonInterface) {
  const navigate = useNavigate();

  const handleOperation = async (operationType: OperationEnum) => {
    await sendOperation(props.movieId, operationType);
    navigate("/dashboard"); // redirige al dashboard
  };

  return (
    <button
      onClick={() => handleOperation(props.operationType)}
      className="mainBtn"
    >
      <CardOutline cssClasses={"btn-icon"} /> {props.text}
    </button>
  );
}
export default Button;
