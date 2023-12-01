import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
const CreateItem = () => {
  const nav = useNavigate();
  const NavHandler = (_path) => {
    nav(_path);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const item = e.target.item.value;
    const count = e.target.count.value;
    const content = e.target.content.value;
    console.log(item, count);
    const { data } = await axios.post("http://localhost:4000/shop", {
      item,
      count,
      content,
    });
    NavHandler(`/detail/${data.Shop_uid}`);
    // console.log("........", data);
  };
  return (
    <div className="shopWrap">
      <form onSubmit={onSubmitHandler}>
        <div>
          <input placeholder="제목" className="inputTitle" name="item" />
          <input className="inputNum" name="count" />
        </div>
        <div>
          <textarea
            className="inputContent"
            name="content"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <button type="submit">등록</button>
        </div>
      </form>
    </div>
  );
};

export default CreateItem;
