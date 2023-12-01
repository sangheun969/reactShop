import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";


const UpdateItem = () => {

  const nav = useNavigate();
  const NavHandler = (_path) => {
    nav(_path);
  };
  const [shopItem, setShopItem] = useState({});
  const params = useParams();


  const getShopDetail = async () => {
    const {data: userItem} = await axios.get(
        `http://localhost:4000/shop/${params.id}`
    );

    console.log(userItem)

    setShopItem(userItem);
  }

  useEffect(() => {
    getShopDetail();
  }, []);


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const item = e.target.item.value;
    const count = e.target.count.value;
    const content = e.target.content.value;
    const {data} = await axios.put(`http://localhost:4000/shop/${params.id}`, {
      item,
      count,
      content,
    });
    NavHandler(`/detail/${data.Shop_uid}`);
  };


  const inputChangeHandler = (e) => {

    const inputName = e.target.name

    let newShopItem
    if (inputName === "item") {
      const value = e.target.value
      newShopItem = {
        ...shopItem,
        Shop_title: value
      }
    }
    if (inputName === "count") {
      const value = e.target.value
      newShopItem = {
        ...shopItem,
        Shop_count: value
      }
    }
    if (inputName === "content") {
      const value = e.target.value
      newShopItem = {
        ...shopItem,
        Shop_content: value
      }
    }

    setShopItem(newShopItem)
  }


  return (
      <div className="shopWrap">
        <form onSubmit={onSubmitHandler}>
          <div>
            <input placeholder="제목" className="inputTitle" name="item" value={shopItem.Shop_title}
                   onChange={inputChangeHandler}/>
            <input className="inputNum" name="count" value={shopItem.Shop_count} onChange={inputChangeHandler}/>
          </div>
          <div>
          <textarea
              className="inputContent"
              name="content"
              id=""
              cols="30"
              rows="10"
              value={shopItem.Shop_content}
              onChange={inputChangeHandler}
          ></textarea>
          </div>
          <div>
            <button type="submit">등록</button>
          </div>
        </form>
      </div>
  );
}


export default UpdateItem



