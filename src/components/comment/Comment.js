import './Comment.css'
export default function Comment ({item:{postId, id, name, email, body}})
{
    return(
        <div className={'wrap'}>
                <div><span>postId</span> - {postId}, <span>id</span> - {id}</div>
                <div><span>name</span> - {name} </div>
                <div><span>email</span> - <a href='#'>{email}</a></div>
                <div><span>body</span> - {body}</div>

        </div>
    );
}