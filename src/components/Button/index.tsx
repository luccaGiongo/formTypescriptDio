import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, block }: IButtonProps) => {
  return <ButtonContainer disabled={block} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
