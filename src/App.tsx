// apply slower throttling to see the loader
import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
}
const App = () => {
  const [users, setusers] = useState<User[]>([]); //type of stored array is user array
  const [error, seterror] = useState("");
  const [isloading, setloading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setloading(true);
    axios // after setting totrue it wont move to next block and it will immediatly set loading to false and hiding loader so we add set loading to false inside
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      }) // add x to users for error
      .then((res) => {
        console.log(res.data);
        console.log(res.data[0].name);
        setusers(res.data);
        setloading(false); //order doesnt matter react apply all updates then rerender the compenent
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err);
        seterror(err.message);
        setloading(false); // hide loader if error
      }); //func excuted when promise is ready
    return () => controller.abort(); //cleanup function when request sent twice it will abort first one unmount then mount
  }, []);
  const deleteuser = (user: User) => {
    const originalusers = [...users];
    setusers(users.filter((u) => u.id !== user.id)); // update ui instantly
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        seterror(err.message);
        setusers(originalusers); // if there is an error set user to the orignal users set ui to orignal state zy msln ahot x fel url
      }); // update server add slash at end + user.id
  };
  const adduser = () => {
    const originalusers = [...users];
    const newuser = { id: 0, name: "adoleee" };
    // setusers([...users,newuser]) //or at end
    setusers([newuser, ...users]); //update ui with new user
    axios
      .post("https://jsonplaceholder.typicode.com/users", newuser)
      .then(({ data: savedUser }) => setusers([savedUser, ...users]))
      .catch((err) => {
        seterror(err.message);
        setusers(originalusers);
      }); // if call successful we should refresh the list  with the new user
  };
  const updateuser = (user: User) => {
    const originalusers = [...users];
    const updateduser = { ...user, name: user.name + "!" };
    setusers(users.map((u) => (u.id === user.id ? updateduser : u))); // call ui tosave changes
    axios
      .patch(
        "https://jsonplaceholder.typcicode.com/users" + user.id,
        updateduser
      )
      .catch((err) => {
        seterror(err.message);
        setusers(originalusers);
      });
    //patch for updating object properties   put for replacing object   //pass updated user to method same as new user
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isloading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={adduser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {/* d-flex convert each list item to a flex container  justify content between distrbutes equal spaces between containers usernames fel left khales wel button fel right khales 3shan yeb2a buttons t7t b3d keda*/}
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateuser(user)}
              >
                Update
              </button>
              {/* margin horizontal one */}
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteuser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
    // both buttons in a flex container and to the right (div)
  );
}; // key is always a unique smth in list to insert correctly (all users dont have same id)

export default App;
