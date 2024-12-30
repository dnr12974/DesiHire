import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const messages = [
    {
      id: 123,
      buyer: "Ishika Verma",
      message: "Namaste! I am interested in your product. Can you provide me with more details?",
      time: "1 hour ago",
      link: "/message/123",
    },
    {
      id: 124,
      buyer: "Rajesh Kumar",
      message: "Could you please share the pricing details and specifications?",
      time: "2 hours ago",
      link: "/message/124",
    },
    {
      id: 125,
      buyer: "Ram Vishwanath",
      message: "Is the product available for delivery in my location?",
      time: "1 day ago",
      link: "/message/125",
    },
    {
      id: 126,
      buyer: "Gopal Krishna Chauhan",
      message: "I want to bulk order. Can we negotiate the price?",
      time: "2 days ago",
      link: "/message/126",
    },
    {
      id: 127,
      buyer: "Swaminath Rao",
      message: "Do you offer a warranty on the product?",
      time: "1 week ago",
      link: "/message/127",
    },
  ];

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {messages.map((msg, index) => (
            <tr key={msg.id} className={index < 2 ? "active" : ""}>
              <td>{msg.buyer}</td>
              <td>
                <Link to={`/message/${msg.id}`} className="link">
                  {msg.message.substring(0, 100)}...
                </Link>
              </td>
              <td>{msg.time}</td>
              <td>
                {index < 2 && <button>Mark as Read</button>}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Messages;
