import Wallet from '@project-serum/sol-wallet-adapter';
import { isBrowser } from '../../isNode';

const getAdapter = () => {
  return isBrowser ? new Wallet('https://www.sollet.io', '') : undefined;
};

export default getAdapter;
