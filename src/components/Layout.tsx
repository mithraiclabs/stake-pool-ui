import React from "react";
import styled from 'styled-components';
import UserStake from "./UserStake";
import TVL from "./TVL";
import WalletHeader from "./WalletHeader";
import Deposit from "./Deposit";

const TopContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;

const Layout: React.FC = () => {
  return (
    <TopContainer id='top'>
      <WalletHeader />
      <TVL />
      <UserStake />
      <Deposit />
    </TopContainer>
  );
};

export default Layout;
