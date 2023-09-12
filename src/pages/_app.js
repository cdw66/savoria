import { MantineProvider } from "@mantine/core";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import { ContextModalProps, ModalsProvider } from "@mantine/modals";

// const MenuModal = ({ context, id, innerProps }) => (
//   <>
//     <p>Add Menu Item</p>
//   </>
// );

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <ModalsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModalsProvider>
      </MantineProvider>
    </AuthContextProvider>
  );
}
