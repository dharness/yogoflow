import styled from "styled-components/macro";
import logoImg from "../assets/logo.png";
import { fonts } from "../utils/styleHelpers";

const StyledHeader = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Title = styled.div`
  color: white;
  font-size: 45px;
  font-family: ${fonts.dongle};
  font-weight: 700;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  height: 30px;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo src={logoImg} />
      <Title>yogoflow</Title>
    </StyledHeader>
  );
}

export default Header;
