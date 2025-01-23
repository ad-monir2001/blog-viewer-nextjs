import Link from "next/link";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function PostList() {
  const posts = await fetchPosts();

  return (
    <div className="space-y-2">
      {posts.slice(0, 10).map((post) => (
        <Link 
          key={post.id} 
          href={`/blog/${post.id}`}
          className="block p-3 bg-gray-100 hover:bg-gray-200 rounded"
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
}