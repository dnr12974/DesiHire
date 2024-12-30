import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            {<th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://static.vecteezy.com/system/resources/previews/039/334/804/non_2x/ai-generated-indian-female-student-free-photo.jpg"
                alt=""
              />
            </td>
            <td>Grow-Your-Own Herb Kits</td>
            <td>110.99</td>
            <td>Ishika Verma</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </td>
            <td>Pest and Disease Management service</td>
            <td>59.99</td>
            <td>Rajesh Kumar</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://origiin.com/wp-content/uploads/WhatsApp-Image-2023-07-13-at-10.48.38-1024x675.jpeg"
                alt=""
              />
            </td>
            <td>Crop Planting and Care Advice</td>
            <td>59.99</td>
            <td>Swaminath Rao</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.royoorders.com/insecure/fit/500/500/ce/0/plain/https://votesmart.s3.ap-south-1.amazonaws.com/candidate_71092/xzY8UMiMXqwgllOWUhJ9pIgkFhkfL1qdhHdWX4ZZ.jpg@webp"
                alt=""
              />
            </td>
            <td>Irrigation Systems and Water management</td>
            <td>119.99</td>
            <td>Ram vishwanath</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://media.licdn.com/dms/image/v2/D5603AQGx2bJo46-B5w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701493968397?e=2147483647&v=beta&t=7AJCs_SdwkFndy9-RgzdeXjCQIyZC9AvdeiP5NjaNmg"
                alt=""
              />
            </td>
            <td>Livestock care and Heath Tips</td>
            <td>120.99</td>
            <td>Gopal Singh Chauhan</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg"
                alt=""
              />
            </td>
            <td>Organic Farming Practices</td>
            <td>79.99</td>
            <td>Krishna Prasad Sharma</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;