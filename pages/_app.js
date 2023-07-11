import Layout from '../components/layout';
import React from 'react';
import Head from 'next/head';
import "../styles/sass/core/global.scss"
// import { GlobalProvider } from './Providers/GlobalProvider';
import { GlobalProvider } from '../components/Providers/GlobalProvider';
import Script from 'next/script'
import { MessengerChat } from "react-messenger-chat-plugin";

function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Head>
        <title>Magic Mall | HomePage</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="magic mall in armenia" />
        {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-CW3RP3M80G"></script>
      <script>
    {   ` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-CW3RP3M80G');`}
      </script>   
      </Head>
      <Layout>
        <Component {...pageProps} />
        <MessengerChat
          pageId="105030078960631"
          language="hy_HY"
          themeColor={"#224660"}
          bottomSpacing={50}
          loggedInGreeting="loggedInGreeting"
          loggedOutGreeting="loggedOutGreeting"
          greetingDialogDisplay={"show"}
          debugMode={true}
          onMessengerShow={() => {
            console.log("onMessengerShow");
          }}
          onMessengerHide={() => {
            console.log("onMessengerHide");
          }}
          onMessengerDialogShow={() => {
            console.log("onMessengerDialogShow");
          }}
          onMessengerDialogHide={() => {
            console.log("onMessengerDialogHide");
          }}
          onMessengerMounted={() => {
            console.log("onMessengerMounted");
          }}
          onMessengerLoad={() => {
            console.log("onMessengerLoad");
          }}
        />
      </Layout>
    </GlobalProvider>

  )
}

export default App;