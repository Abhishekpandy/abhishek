import Link from "next/link";

const {CONTENT_API_KEY, SITE_URL} = process.env

function blogs({ posts }) {
    return (
            <section className="w-full px-4 my-20 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
                <div className="mb-12 text-left md:text-center">
                    <h2 className="mb-2 text-3xl font-extrabold leading-tight">Skcript Blog</h2>
                    <p className="text-lg text-gray-400">Everything comes directly from the desk of the respective engineers, creators and managers at Skcript.</p>
                </div>
                <div className="flex flex-col space-y-12 divide-y divide-gray-500">
                    {posts.map((post)=>{
                        return (
                            <div key={post.slug}>
                        <p className="pt-12 mb-3 text-sm font-normal text-gray-400">{post.created_at.split('T')[0]}</p>
                        <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight md:text-3xl">
                            <Link href='/post/[slug]' as={`/post/${post.slug}`}><a className="hover:text-purple-700">{post.title}</a></Link>
                        </h2>
                        <p className="mb-4 text-base font-normal text-gray-600">
                            {post.custom_excerpt}
                        </p>
                        <Link href='/post/[slug]' as={`/post/${post.slug}`}><a className="btn btn-light btn-sm">Continue Reading</a></Link>
                    </div>
                        )})}
                </div>
                <div className="flex justify-between items-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-500 md:space-x-2 md:space-y-0 md:flex-row">
                    <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Previous Page</a>
                    <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Next Page</a>
                </div>
            </section>
    );
}

async function getPosts() {
    const res = await fetch(`${SITE_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,created_at`)
        .then((res) => res.json())
    const posts = res.posts
    return posts
}

export async function getStaticProps() {
    const posts = await getPosts()

    return {
        props: { posts }
    }
}

export default blogs;


