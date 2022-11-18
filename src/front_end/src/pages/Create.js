import { useNavigate } from "react-router-dom";

const Create = (props) => {
  let navigate = useNavigate();
  const create_post = async(e) => {
     e.preventDefault();
     var title = document.getElementById("title");
     var content = document.getElementById("content");
     const new_post_id = await props.task_create_post(title.value, content.value);
     props.task_fetch_all_posts();
     navigate("../paste/" + new_post_id);
   }
return (
	<div>
      <h1>Create a Paste</h1>
       <form onSubmit={create_post}>
         <div>
           <label>
             Title:
           </label>
             <input type="text" id="title" value={props.post_title} onChange={e => props.set_post_title(e.target.value)} />
           <br/>
           <div className="content-input">
             <textarea id="content" value={props.post_content} onChange={e => props.set_post_content(e.target.value)} />
           </div>
         </div>
         <input type="submit" value="Submit" />
       </form>
	</div>
);
}

export default Create;

