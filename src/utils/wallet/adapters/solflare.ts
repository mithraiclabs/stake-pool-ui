import SerumWalletAdapter from '@project-serum/sol-wallet-adapter';
import { isBrowser } from '../../isNode';

const getAdapter = () => {
  return isBrowser ? new SerumWalletAdapter('https://solflare.com/provider', '') : undefined;
};

export default getAdapter;
