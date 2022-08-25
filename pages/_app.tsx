import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { StateProvider } from '../src/StateProvider';
import reducer, { initialState } from '../src/reducer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Component {...pageProps} />
  </StateProvider>
  ); 
}

export default MyApp
