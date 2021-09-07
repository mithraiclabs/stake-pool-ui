import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import WalletAdapter from "../utils/wallet/walletAdapter";
import useWallet from "../hooks/useWallet";
import WalletSelect from "./WalletSelect";
import SerumWalletAdapter from "@project-serum/sol-wallet-adapter";

const ConnectButton: React.FC = (props) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const { connect, connected } = useWallet();

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
      <Button
        color="primary"
        onClick={() => setIsSelectOpen(true)}
        variant="outlined"
        style={{ whiteSpace: "nowrap" }}
        {...props}
      >
        {connected ? "connected" : "connect wallet"}
      </Button>
    </>
  );
};

export default ConnectButton;
