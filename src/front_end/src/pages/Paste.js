import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Paste = (props) => {
  const [title, set_title] = useState("");
  const [content, set_content] = useState("");

  let { id } = useParams();
  let navigate = useNavigate();
  const task_fetch_one_post = async() => {
    try {
      let response = await axios.get("/api/" + id);
      set_title(response.data.title);
      set_content(response.data.contents);
    } catch(error) {
      navigate("../");
    }
  }

  const delete_this_post = () => {
    props.delete_post(id);
    navigate("../");
  }

  useEffect(() => {
    task_fetch_one_post();
  }, []);

  return (
	  <div>
	  <h2>{title}</h2>
	  <p>{content}</p>
	  <br/>
	  <p>Post id: {id}</p>
	  <br/>
	  <form onSubmit={delete_this_post}>
	  	<input type="submit" value="Delete this paste" />
	  </form>
	  </div>
  );
};

export default Paste;

