import Header from './Header';
import Head from 'next/head';
import Footer from './Footer';


import { useRouter } from "next/router";

const Layout = ({ children }) => {

    
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5' />
                <meta name='description' content='Description' />
                <meta name='keywords' content='Keywords' />
                <title>Magic Mall</title>
            </Head>

             <Header />

            <main>{children}</main>
            
            <Footer />
        </>
    )
}

export default Layout;