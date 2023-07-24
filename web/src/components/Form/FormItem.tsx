import { FC, ReactNode } from "react";
import styled from "styled-components";

const Layout = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface FormItemProps {
  label?: string;
  element: ReactNode;
}

const FormItem: FC<FormItemProps> = ({ label, element }) => {
  return (
    <Layout>
      {label && <label>{label}</label>}
      {element}
    </Layout>
  );
};

export default FormItem;
