import { use } from "react";

function delayedFetch(url, options, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url, options)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    }, delay);
  });
}

const fetchPosts = async () => {
  const res = await delayedFetch(
    "https://jsonplaceholder.typicode.com/users",
    {},
    2000
  );
  return res.json();
};

const PostItems = () => {
  const users = use(fetchPosts());

  return (
    <ul>
      <div>NEW HOOK : USE</div>
      {users.map((user) => (
        <div key={user.id} className="shadow-md p-4 my-6 rounded-lg">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </ul>
  );
};
export default PostItems;
