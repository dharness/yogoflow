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
  el: ReactNode;
}

const FormItem: FC<FormItemProps> = ({ label, el }) => {
  return (
    <Layout>
      {label && <label>{label}</label>}
      {el}
    </Layout>
  );
};

export default FormItem;
