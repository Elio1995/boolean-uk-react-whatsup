function LoginPage({ usersList, setselectedUserId }) {
  // const getUsers = useStore((store) => store.getUsers);
  // const usersList = useStore((store) => store.usersList);

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <>
      <div className="main-wrapper login">
        <section className="login-section">
          <h2>Choose your user!</h2>
          <ul>
            {usersList.map((user, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => setselectedUserId(user.id)}
                    className="user-selection"
                  >
                    <img
                      className="avatar"
                      width="50"
                      height="50"
                      src={user.avatar}
                      alt={user.firstName}
                    />
                    <h3>
                      {user.firstName} {user.lastName}
                    </h3>
                  </button>
                </li>
              );
            })}

            <li>
              <button className="user-selection">
                <h3>+ Add a new user</h3>
              </button>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default LoginPage;
