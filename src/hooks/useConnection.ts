import { useContext } from 'react';
import {
  ConnectionContext,
  ConnectionContextType,
} from '../contexts/Connection';

const useConnection = (): ConnectionContextType =>
  useContext(ConnectionContext);

export default useConnection;
