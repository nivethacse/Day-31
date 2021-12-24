import { useParams } from "react-router-dom";

export function UserProfile({ users }) {

  // useParams to get id from the link of the user
  const { id } = useParams();
  const user = users[id];

  return (
    <div className="container">
      <div className="card">
        <img src={user.profilepic} alt={user.first_name} className="profile-pic" />
        <div className="content">
          <h1>{user.first_name} {user.last_name}</h1>
          <p className="title">Email: {user.email}</p>
        </div>
        <div className="social-menu">
          <ul>
            <li><a href="https://github.com/" target="blank"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/" target="blank"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.facebook.com/" target="blank"><i className="fab fa-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
