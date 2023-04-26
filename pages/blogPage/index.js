import OtherBlogs from "./otherBlogs/OtherBlogs"
import SecBlog from "./secBlog/SecBlog"
import SecMain from "./secMain"
import CardSubscribe from "../homePage/secCardSubscribe/CardSubscribe"
import { useGlobalProvider } from "../../components/Providers/GlobalProvider"
import { useEffect } from "react"



const BlogPage = () => {

    const {GetBlogPageData,
        blogPageData,
        SetBlogPageData} = useGlobalProvider()

        useEffect(() => {
            GetBlogPageData()
        },[GetBlogPageData])

        useEffect(() => {
            
        },[blogPageData.loading])


    return(
        <div>
            <SecMain/>
            <SecBlog/>
            <OtherBlogs/>
            <CardSubscribe/>
        </div>
    )
}


export default BlogPage