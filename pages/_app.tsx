
import Layout from '../components/Layout';
import '../styles/globals.css';

type MyAppProps = {
  Component: any,
  pageProps: JSX.Element
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
