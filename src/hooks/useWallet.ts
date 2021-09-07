import SerumWalletAdapter from '@project-serum/sol-wallet-adapter';
import { useContext } from 'react';
import WalletAdapter from 'src/utils/wallet/walletAdapter';
import { WalletContext } from '../contexts/Wallet';

const useWallet = () => {
  const {
    balance,
    loading,
    setLoading,
    wallet,
    setWallet,
    connected,
    setConnected,
    pubKey,
    setPubKey,
  } = useContext(WalletContext);

  // Reset state in case user is changing wallets
  const connect = async (walletAdapter: WalletAdapter | SerumWalletAdapter, args: any) => {
    setPubKey(null);
    setConnected(false);
    setLoading(true);

    setWallet(walletAdapter);

    walletAdapter.on('disconnect', () => {
      setConnected(false);
      setPubKey(null);
      console.log('Disconnected');
    });

    walletAdapter.on('connect', (key) => {
      setLoading(false);
      setConnected(true);
      setPubKey(key);
      console.log('connected');
    });

    await walletAdapter.connect(args);
  };

  const disconnect = () => {
    wallet && wallet.disconnect();
    setPubKey(null);
    setConnected(false);
  };

  return {
    balance,
    wallet,
    connect,
    disconnect,
    connected,
    loading,
    pubKey,
  };
};

export default useWallet;
