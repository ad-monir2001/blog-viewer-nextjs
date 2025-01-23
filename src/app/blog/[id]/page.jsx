async function fetchPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function BlogDetails({ params }) {
  const post = await fetchPost(params.id);

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 max-w-4xl">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-blue-800 dark:text-blue-300">
        {post.title}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-blue-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
        {post.body}
      </p>
    </div>
  );
}