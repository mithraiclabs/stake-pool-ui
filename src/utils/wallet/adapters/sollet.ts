import SerumWalletAdapter from '@project-serum/sol-wallet-adapter';
import { isBrowser } from '../../isNode';

const getAdapter = () => {
  return isBrowser ? new SerumWalletAdapter('https://www.sollet.io', '') : undefined;
};

export default getAdapter;
