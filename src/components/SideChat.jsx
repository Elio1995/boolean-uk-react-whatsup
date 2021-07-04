import { Link } from "react-router-dom";

function SideChat({ otherUsers, conversations }) {
  if (conversations.length === 0) return "Conversations Loading...";
  return (
    <ul>
      {/* <!-- This first item should always be present --> */}
      <li>
        <button className="chat-button">
          <div>
            <h3>+ Start a new Chat</h3>
          </div>
        </button>
      </li>

      {otherUsers.map((otherUser) => {
        const conversation = conversations.find(
          (conversation) =>
            conversation.id === otherUser.id ||
            conversation.participantId === otherUser.id
        );
        return (
          <li>
            <button className="chat-button">
              <Link to={`/logged-in/${conversation.id}`}>
                <img
                  class="avatar"
                  height="50"
                  width="50"
                  alt=""
                  src={otherUser.avatar}
                />
                <div>
                  <h3>
                    {otherUser.firstName} {otherUser.lastName}
                  </h3>
                  <p>Last message</p>
                </div>
              </Link>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default SideChat;
