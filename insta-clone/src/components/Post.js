import React from 'react';
import "./Post.css";
import Header from "./Header";

const Post = () => {
    return(
        <div>
        <Header/>
            <div className="post">
                <form>
                    <label for = "title">Title:</label><br/>
                    <input type = "text" name = "title" id="title"/> <br/>
                    <label for = "body">Body:</label><br/>
                    <textarea name = "description" rows="10" cols="50">
                        write description here....
                    </textarea><br/>
                    <button type = "submit" className='createpost'>Create Post</button>
                </form>
            </div>
            
        </div>
    )
}

export default Post;