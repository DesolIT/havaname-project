import ComponentThemeProvider from "../src/lib/ComponentThemeProvider";
import light from "../src/lib/themes/light";

function MyApp({ Component, pageProps }) {
  return (
    <ComponentThemeProvider theme={light}>
      <Component {...pageProps} />
    </ComponentThemeProvider>
  );
}

export default MyApp;
