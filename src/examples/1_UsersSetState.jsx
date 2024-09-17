import { useEffect, useState } from "react";

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
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then((result) => {
      setLoading(false);
      setUsers(result);
    });
  }, []);

  if (loading) return <div>LOADING...</div>;

  return (
    <ul>
      <div>SET STATE</div>
      {users?.map((user) => (
        <div key={user.id} className="shadow-md p-4 my-6 rounded-lg">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </ul>
  );
};
export default PostItems;
