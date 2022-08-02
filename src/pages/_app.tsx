import "../styles/globals.css";
import "../../public/icons/css/fontello.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
