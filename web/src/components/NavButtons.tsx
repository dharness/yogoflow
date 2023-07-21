import styled from "styled-components";

const ButtonLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavButtons = () => {
  return (
    <ButtonLayout>
      <button>Back</button>
      <button>Next</button>
    </ButtonLayout>
  );
};

export default NavButtons;
