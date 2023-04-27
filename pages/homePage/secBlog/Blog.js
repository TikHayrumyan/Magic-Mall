/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/sass/pages/HomePage/secBlog/blog.module.scss'
import BlogSLider from './BlogSlider'
import { translate } from '../../../translations'
import { useGlobalProvider } from '../../../components/Providers/GlobalProvider'

const Blog = () => {

    const {lang} = useGlobalProvider()

    return(
        <div className={styles.blog}>
            <div className={styles.container}>
                <div className={styles.titleBlock}>
                    <div className={styles.patternTitle}><img alt='pattern' src="/img/homePage/secBlog/firstPattern.svg"/></div>
                    <div className={styles.title}>{translate.BlogAndNews[lang]}</div>
                    <div className={styles.backPattern}><img alt='pattern' src="/img/homePage/secBlog/secondPattern.png" height={900}/></div>
                </div>
                <BlogSLider/>
            </div>
        </div>
    )
}

export default Blog