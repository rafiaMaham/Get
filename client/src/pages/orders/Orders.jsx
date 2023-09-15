import React from "react";
import "./Orders.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Justin Johnson",
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
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5c1hyhPPN1hBPNtihrx0LdnGiKUoOJIQH6sqRnrkgSA&s"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>99</td>
            <td>123</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5c1hyhPPN1hBPNtihrx0LdnGiKUoOJIQH6sqRnrkgSA&s"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>99</td>
            <td>123</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5c1hyhPPN1hBPNtihrx0LdnGiKUoOJIQH6sqRnrkgSA&s"
                alt=""
              />
            </td>
            <td>Gig 1</td>
            <td>99</td>
            <td>123</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
