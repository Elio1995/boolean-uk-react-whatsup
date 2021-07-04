import { Route } from "react-router";
import MessageList from "../components/MessageList";
import SideChat from "../components/SideChat";

function MainPage({
  selectedUser,
  otherUsers,
  conversations,
  setselectedUserId,
}) {
  if (!selectedUser) return null;
  return (
    <div className="main-wrapper">
      {/* <!-- Side Panel --> */}
      <aside>
        {/* <!-- Side Header --> */}
        <header className="panel">
          <img
            class="avatar"
            width="50"
            height="50"
            src={selectedUser.avatar}
            alt=""
          />
          <h3>
            {selectedUser.firstName} {selectedUser.lastName}
          </h3>
          <button onClick={() => setselectedUserId(null)}>LOG OUT</button>
        </header>
        {/*     
        <!-- Search form --> */}
        <form className="aside__search-container">
          <input
            type="search"
            name="messagesSearch"
            placeholder="Search chats"
            value=""
          />
        </form>

        <SideChat
          selectedUser={selectedUser}
          otherUsers={otherUsers}
          conversations={conversations}
        />
      </aside>

      {/* <!-- Main Chat Section --> */}
      <main className="conversation">
        {/* <!-- Chat header --> */}
        <header class="panel"></header>

        <ul className="conversation__messages">
          <Route path="/logged-in/:conversationId">
            <MessageList selectedUser={selectedUser} />
          </Route>
        </ul>

        {/* <!-- Message Box --> */}
        <footer>
          <form className="panel conversation__message-box">
            <input type="text" placeholder="Type a message" rows="1" value="" />
            <button type="submit">
              {/* <!-- This is the send button --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
                ></path>
              </svg>
            </button>
          </form>
        </footer>
      </main>
    </div>
  );
}

export default MainPage;
