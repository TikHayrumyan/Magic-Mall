import styles from '../../../styles/sass/pages/HomePage/secBlog/blog.module.scss'
import Image from 'next/image'
import firstPattern from "../../../public/img/homePage/secBlog/firstPattern.svg"
import secondPattern from "../../../public/img/homePage/secBlog/secondPattern.png"
import BlogSLider from './BlogSlider'
import { translate } from '../../../translations'
import { useGlobalProvider } from '../../../components/Providers/GlobalProvider'

const Blog = () => {

    const {lang} = useGlobalProvider()

    return(
        <div className={styles.blog}>
            <div className={styles.container}>
                <div className={styles.titleBlock}>
                    <div className={styles.patternTitle}><Image alt='pattern' src={firstPattern}/></div>
                    <div className={styles.title}>{translate.BlogAndNews[lang]}</div>
                    <div className={styles.backPattern}><Image alt='pattern' src={secondPattern} height={900}/></div>
                </div>
                <BlogSLider/>
            </div>
        </div>
    )
}

export default Blog