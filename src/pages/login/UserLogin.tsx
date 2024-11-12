import { useState } from "react";
import Login from "./Login";
import Password from "../password/Password";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [authEmail, setAuthEmail] = useState<string>("");

  return (
    <div>
      {userExists ? (
        <Password username={username} authEmail={authEmail} />
      ) : (
        <Login
          setUsername={setUsername}
          setUserExists={setUserExists}
          setAuthEmail={setAuthEmail}
        />
      )}
    </div>
  );
};

export default UserLogin;
