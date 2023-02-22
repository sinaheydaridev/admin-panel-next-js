import Document, { Head, Html, Main, NextScript } from "next/document";

const blockingSetInitialColorMode = `(function(){const profileTheme=localStorage.getItem("profile-theme");document.body.setAttribute("data-profile-theme",profileTheme ? profileTheme : "pink");})()`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa-ir">
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: blockingSetInitialColorMode,
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
