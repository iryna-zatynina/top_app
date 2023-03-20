import '../styles/globals.css';
import { AppProps } from 'next/dist/shared/lib/router/router'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
