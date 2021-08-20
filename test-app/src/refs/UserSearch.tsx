import { useState, useRef, useEffect } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        ref={inputRef}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>{user && `${user.name} ${user.age}`}</div>
    </div>
  );
};

export default UserSearch;
