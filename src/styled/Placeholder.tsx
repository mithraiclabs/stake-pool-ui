import styled from 'styled-components';

export default styled.div<{bg?: string}>`
height: 100px;
width: 200px;
margin: 16px;
background: ${({bg}) => bg? bg : 'black'};
`;