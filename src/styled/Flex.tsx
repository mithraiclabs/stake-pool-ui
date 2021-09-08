import styled from "styled-components";
import { CSSProps } from "./common";

const Flex = styled.div<CSSProps>`
  display: flex;
  flex-direction: column;
  ${({css = ''}) => css}
`;

export default Flex;
