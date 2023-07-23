import { FC, ReactNode } from "react";
import styled, { css } from "styled-components/macro";
import { fonts, palette } from "./../utils/styleHelpers";

export enum ButtonVariantsEnum {
  Primary = "Primary",
  Secondary = "Secondary",
}

const buildButtonVariant = (
  $variant: ButtonVariantsEnum,
  $disabled: boolean
) => {
  if ($disabled) {
    return css`
      background-color: ${palette.greys.shade20};
      color: ${palette.greys.shade40};
    `;
  }

  if ($variant === ButtonVariantsEnum.Primary) {
    return css`
      background-color: ${palette.purples.shade70};
    `;
  }
  if ($variant === ButtonVariantsEnum.Secondary) {
    return css`
      background-color: ${palette.greys.white};
      color: ${palette.purples.shade70};
      border: solid 1px ${palette.purples.shade70};
    `;
  }
};

const StyledButton = styled.button<{
  $disabled: boolean;
  $variant: ButtonVariantsEnum;
}>`
  outline: none;
  font-size: 24px;
  font-family: ${fonts.dongle};
  font-weight: 500;
  padding: 7px 16px 7px 16px;
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? "" : "pointer")};
  &:hover {
    transform: ${({ $disabled }) => ($disabled ? "" : "scale(1.01)")};
  }

  border: none;
  color: white;
  ${({ $variant, $disabled }) => buildButtonVariant($variant, $disabled)}
`;

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariantsEnum;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  variant = ButtonVariantsEnum.Primary,
  disabled = false,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      $disabled={disabled}
      disabled={disabled}
      $variant={variant}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
