import { MantineProvider } from "@mantine/core";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import { ModalsProvider } from "@mantine/modals";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <MantineProvider
        theme={{
          components: {
            TextInput: {
              styles: {
                root: {
                  fontFamily: "Lato",
                  fontWeight: "bold",
                },
                label: {
                  fontWeight: "bold",
                },
              },
            },
            PasswordInput: {
              styles: {
                root: {
                  fontFamily: "Lato",
                  fontWeight: "bold",
                },
                label: {
                  fontWeight: "bold",
                },
              },
            },
            Button: {
              styles: {
                root: {
                  backgroundColor: "tan",
                  fontFamily: "Eb Garamond",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  fontWeight: "400",
                  borderRadius: "0px",
                  "&:hover": { backgroundColor: "tan" },
                },
              },
            },
            NavLink: {
              styles: {
                root: {
                  "&:hover": { color: "tan" },
                },
              },
            },
            Checkbox: {
              styles: {
                label: {
                  fontFamily: "Lato",
                },
              },
            },
          },
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <ModalsProvider>
          <Layout>
            <Head>
              <title>Savoria Restaurant</title>
            </Head>
            <Component {...pageProps} />
          </Layout>
        </ModalsProvider>
      </MantineProvider>
    </AuthContextProvider>
  );
}
