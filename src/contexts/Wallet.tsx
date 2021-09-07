import SerumWalletAdapter from '@project-serum/sol-wallet-adapter';
import { PublicKey } from '@solana/web3.js';
import React, { createContext, useEffect, useState } from 'react';
import useConnection from '../hooks/useConnection';
// import useNotifications from '../hooks/useNotifications';
import getPhantomAdapter from '../utils/wallet/adapters/phantom';

import type WalletAdapter from '../utils/wallet/walletAdapter';

const WalletContext = createContext<{
  balance: number;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  wallet?: WalletAdapter;
  setWallet: React.Dispatch<React.SetStateAction<WalletAdapter | SerumWalletAdapter | undefined>>;
  connected: boolean;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
  pubKey?: PublicKey | null;
  setPubKey: React.Dispatch<React.SetStateAction<PublicKey | null | undefined>>;
}>({
  balance: 0,
  loading: false,
  connected: false,
  setLoading: () => {},
  setWallet: () => {},
  setPubKey: () => {},
  setConnected: () => {},
});

const WalletProvider: React.FC = ({ children }) => {
  // const { pushNotification } = useNotifications();
  const pushNotification = (msg: any) => console.log(msg);
  const { connection } = useConnection();
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState<WalletAdapter>();
  const [connected, setConnected] = useState(false);
  const [pubKey, setPubKey] = useState<PublicKey | undefined |null>(null);
  // balance of public key in lamports
  const [balance, setBalance] = useState(0);

  // Eager connect to phantom on initial load if user has allowed it
  useEffect(() => {
    if (window?.solana?.isPhantom) {
      const walletAdapter = getPhantomAdapter();

      walletAdapter.on('disconnect', () => {
        setConnected(false);
        setPubKey(null);
      });

      walletAdapter.on('connect', (key) => {
        setLoading(false);
        setConnected(true);
        key && setPubKey(key);
      });

      setWallet(walletAdapter);

      walletAdapter.connect({ onlyIfTrusted: true });
    }
  }, []);

  // This is ok to have in the context because the logic
  // should remain the same no matter where the user is
  useEffect(() => {
    let subscription: any;
    if (pubKey) {
      // fetch balance on mount
      (async () => {
        try {
          const _balance = await connection?.getBalance(pubKey);
          _balance && setBalance(_balance);
        } catch (err) {
          console.error(err);
          pushNotification({
            severity: 'error',
            message: `${err}`,
          });
        }
      })();
      // subscribe to wallet balance changes
      subscription = connection?.onAccountChange(pubKey, (account) => {
        setBalance(account.lamports);
      });
    }

    return () => {
      if (subscription) {
        connection?.removeAccountChangeListener(subscription);
      }
    };
  }, [connection, pubKey]);

  // TODO: move all this into a useReducer() state, get rid of useState() here

  const state = {
    balance,
    loading,
    setLoading,
    wallet,
    setWallet,
    connected,
    setConnected,
    pubKey,
    setPubKey,
  };

  return (
    <WalletContext.Provider value={state}>{children}</WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };