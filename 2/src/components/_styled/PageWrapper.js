import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 800px;
  padding: 100px 0;
  margin: 0 auto;
  background-color: ${({ isChecked = true }) => (isChecked ? "green" : "red")};
`;
