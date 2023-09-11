import { MantineProvider } from "@mantine/core";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}
