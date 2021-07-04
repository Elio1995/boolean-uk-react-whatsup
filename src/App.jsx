import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import MainPage from "./page/MainPage";
import useStore from "./store";
import { useEffect, useState } from "react";

export default function App() {
  const getUsers = useStore((store) => store.getUsers);
  const usersList = useStore((store) => store.usersList);
  const [selectedUserId, setselectedUserId] = useState(null);
  const [conversations, setConversations] = useState([]);

  const selectedUser = usersList.find((user) => user.id === selectedUserId);

  const otherUsers = usersList.filter((user) => user.id !== selectedUserId);

  const history = useHistory();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    if (!selectedUserId) {
      setConversations([]);
      history.push(`/login`);
    } else {
      fetch(`http://localhost:4000/conversations?userId=${selectedUserId}`)
        .then((resp) => resp.json())
        .then(setConversations);
      history.push(`/logged-in`);
    }
  }, [selectedUserId, history]);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <LoginPage
            usersList={usersList}
            setselectedUserId={setselectedUserId}
          />
        </Route>
        <Route path="/logged-in">
          <MainPage
            selectedUser={selectedUser}
            setselectedUserId={setselectedUserId}
            otherUsers={otherUsers}
            conversations={conversations}
          />
        </Route>
        <Route>
          <h1 style={{ padding: 200 }}>Page not found 👻</h1>
        </Route>
      </Switch>
    </>
  );
}
