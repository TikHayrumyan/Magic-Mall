import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const Document = () => {

    
    return (<>
        <Html lang='en'>
            <Head />
    
            <body style={{overflowX: 'hidden'}}>
                <Main />
                
                <NextScript />   
            </body>
    </Html>
    </>
    )
}

export default Document;