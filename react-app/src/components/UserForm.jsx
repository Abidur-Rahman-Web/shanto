import React from "react";
import Button from "./Button";
const UserForm = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Button Clicked");
  };
  return (
    <>
      <div>
        <h1>User Form</h1>
        <div>
          <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <Button type="submit" text="Submit" styles="myButton" />
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
