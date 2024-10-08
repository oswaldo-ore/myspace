export const revalidate = 420;
interface Post {
    title: string;
    content: string;
    slug: string;
}

interface Props {
    param: { slug: string };
}

export async function genearteStaticParams(){
    const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
        (res) => res.json()
    );

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage(params:Props) {
    //deduped
    const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
        (res) => res.json()
    );

    const post = posts.find((post) => post.slug === params.param.slug);

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}