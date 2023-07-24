import { FC, ReactNode } from "react";
import styled from "styled-components";
import { fonts } from "../../utils/styleHelpers";

const FormLayout = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: ${fonts.dongle};
  font-size: 25px;
  font-weight: 500;
  padding-right: 50px;
`;

interface FormProps {
  children: ReactNode;
}

const Form: FC<FormProps> = ({ children }) => {
  return <FormLayout>{children}</FormLayout>;
};

export default Form;
