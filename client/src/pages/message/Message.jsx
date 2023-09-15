import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link className="link" to="/messages">
            MESSAGE
          </Link>{" "}
          {">"} Justin Johnson {">"}
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://media.licdn.com/dms/image/D4E03AQEnEfGYUMiTuQ/profile-displayphoto-shrink_800_800/0/1682706705065?e=2147483647&v=beta&t=1kVFuSfgyDwnmdGZ3U_MVyoJT0mvCK3cVxAwB9aZx9k"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eum nostrum tenetur rem ex veritatis, ipsa facere facilis corrupti
              eaque!
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://media.licdn.com/dms/image/D4E03AQEnEfGYUMiTuQ/profile-displayphoto-shrink_800_800/0/1682706705065?e=2147483647&v=beta&t=1kVFuSfgyDwnmdGZ3U_MVyoJT0mvCK3cVxAwB9aZx9k"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eum nostrum tenetur rem ex veritatis, ipsa facere facilis corrupti
              eaque!
            </p>
          </div>

          <div className="item">
            <img
              src="https://media.licdn.com/dms/image/D4E03AQEnEfGYUMiTuQ/profile-displayphoto-shrink_800_800/0/1682706705065?e=2147483647&v=beta&t=1kVFuSfgyDwnmdGZ3U_MVyoJT0mvCK3cVxAwB9aZx9k"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eum nostrum tenetur rem ex veritatis, ipsa facere facilis corrupti
              eaque!
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://media.licdn.com/dms/image/D4E03AQEnEfGYUMiTuQ/profile-displayphoto-shrink_800_800/0/1682706705065?e=2147483647&v=beta&t=1kVFuSfgyDwnmdGZ3U_MVyoJT0mvCK3cVxAwB9aZx9k"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eum nostrum tenetur rem ex veritatis, ipsa facere facilis corrupti
              eaque!
            </p>
          </div>

          <div className="item">
            <img
              src="https://media.licdn.com/dms/image/D4E03AQEnEfGYUMiTuQ/profile-displayphoto-shrink_800_800/0/1682706705065?e=2147483647&v=beta&t=1kVFuSfgyDwnmdGZ3U_MVyoJT0mvCK3cVxAwB9aZx9k"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eum nostrum tenetur rem ex veritatis, ipsa facere facilis corrupti
              eaque!
            </p>
          </div>

          <div className="item owner">
            <img
              src="https://media.licdn.com/dms/image/D4E03AQEnEfGYUMiTuQ/profile-displayphoto-shrink_800_800/0/1682706705065?e=2147483647&v=beta&t=1kVFuSfgyDwnmdGZ3U_MVyoJT0mvCK3cVxAwB9aZx9k"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              eum nostrum tenetur rem ex veritatis, ipsa facere facilis corrupti
              eaque!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="Write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
