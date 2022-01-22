import Link from "next/link";
import {useRouter} from 'next/router'

const {CONTENT_API_KEY, SITE_URL} = process.env

function post({ post }) {
    
    const router = useRouter()
    if(router.isFallback){
        return (
            <div className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
                <h1>Loading.......</h1>
            </div>
        )
    }
    return (
        <div className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
            <h1 className="text-5xl font-bold mb-8">{post.title}</h1>
            <p className="pt-12 mb-3 text-sm font-normal text-gray-400">{post.created_at.split('T')[0]}</p>
            <div className=" text-lg overflow-hidden" dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </div>
    );
}
async function getPosts(slug) {
    const res = await fetch(`${SITE_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,created_at,html`)
        .then((res) => res.json())
    const posts = res.posts
    return posts[0]
}

export const getStaticPaths = ()=>{
    return {
        paths:[],
        fallback:true
    }
}

export async function getStaticProps({params}) {
    const post = await getPosts(params.slug)

    return {
        props: { post }
    }
}
export default post;