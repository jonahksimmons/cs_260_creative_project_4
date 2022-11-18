import { useNavigate } from "react-router-dom";

const Go_To = (props) => {
  let navigate = useNavigate();	
  const go_to = async() => {
    var id = document.getElementById("post_id");
    props.set_post_id("");
    navigate("../paste/"+id.value);
  }

  return (
	  <div>
	  <h1>Input Paste ID</h1>
	  <form onSubmit={go_to}>
		  <input type="text" id="post_id" value={props.post_id} onChange={e => props.set_post_id(e.target.value)}/>
		  <br/>
		  <input type="submit" value="Submit" />
	  </form>
	  </div>
  );
}

export default Go_To;

