import React from "react";
import styled from 'styled-components';
import UserStake from "./UserStake";
import TVL from "./TVL";
import WalletHeader from "./WalletHeader";
import Deposit from "./Deposit";

const TopContainer = styled.div`
position: fixed;
left: 50%;
right: 50%;
min-height: 100vh;
min-height: -webkit-fill-available;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding-top: 40px;
padding-bottom: 40px;
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
