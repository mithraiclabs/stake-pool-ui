import SerumWalletAdapter from '@project-serum/sol-wallet-adapter';

import { isBrowser } from '../../isNode';

let solletExtAdaptor: SerumWalletAdapter | undefined;

if (isBrowser && (window as any)?.sollet) {
  solletExtAdaptor = new SerumWalletAdapter((window as any).sollet, '');
}

const getAdapter = () => {
  return solletExtAdaptor;
};

export default getAdapter;
