import "../styles/globals.css"
import {AppProps} from "next/app";

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <div className={"w-full max-w-lg mx-auto"}>
      <Component {...pageProps} />
    </div>
  );
}