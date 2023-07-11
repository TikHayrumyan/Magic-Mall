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
                <meta name='keywords' content='Multi Magic Mall,Outlet Mall,Multi outlet mall,Magic Mall,Mall in Armenia,Shopping center,Outlet Store,Shopping in Armenia,Trade centers Yerevan Armenia,shopping mall Yerevan,dalma, Yerevan mall,mega mall,rio mall,sales all the year,discount,Աութլեթ մոլ,Մուլտի Մեջիք Մոլ,Մոլեր Հայաստանում,Մոլեր Երևանում,Դալմա,Երևան մոլ,մեգա մոլ,մոլ մասիվ,մոլ Սևանի ճանապարհին,Торговые центры в Армении в ереване,Мульти Мейджик Мол,Молы в Армении,Шоппинг в армении в ереване,Брендовые магазины,оригинальные магазины,супермаркет,supermarket,Goodwill Armenia,Adidas nike,the north face Armenia,erke,original brands, fashion,style,նորաձևություն,բրենդային խանութներ,Zara bershka pull&bear Stradivarius,H&M,H&M Armenia,kids play lab,Բանկեր,Աբովյան,Սևան,Ծաղկաձոր,ոճային,ֆուդ կորտ,սրճարան' />
                <title>Magic Mall</title>
               
            </Head>

            <Header />

            <main>{children}</main>

            <Footer />
        </>
    )
}

export default Layout;