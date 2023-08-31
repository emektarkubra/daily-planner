import { StyledContainer } from "./styled/Container.styled";

export default function Container({ children }) {
  return (
    <>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
}
