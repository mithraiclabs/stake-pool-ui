import React from "react";
import styled from "styled-components";
import ConnectButton from "./ConnectButton";

const FixedHeader = styled.div`
padding-top: 2rem;
position: fixed;
top: 0;
background-color: orange;
`;

const WalletHeader: React.FC = () => {
  return (
    <FixedHeader>
      <ConnectButton />
    </FixedHeader>
  );
};

export default WalletHeader;
