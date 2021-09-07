import React, { useState } from 'react';

import WalletAdapter from '../utils/wallet/walletAdapter';
import useWallet from '../hooks/useWallet';
import WalletSelect from './WalletSelect';
import SerumWalletAdapter from '@project-serum/sol-wallet-adapter';

const ConnectButton: React.FC = (props) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const { connect } = useWallet();
  const { children } = props;

  const handleConnect = async (adapter: WalletAdapter | SerumWalletAdapter) => {
    await connect(adapter, {});
    setIsSelectOpen(false);
  };

  return (
    <>
      <WalletSelect
        open={isSelectOpen}
        onClose={() => setIsSelectOpen(false)}
        handleConnect={handleConnect}
      />
      <button
        color="red"
        onClick={() => setIsSelectOpen(true)}
        style={{ whiteSpace: 'nowrap' }}
      >
        {children}
      </button>
    </>
  );
};

export default ConnectButton;
