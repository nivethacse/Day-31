import { useHistory } from "react-router-dom";

export function Welcome() {
  // useHistory to change page link(Navigation purpose)
  const history = useHistory();
  return (
    <div className="welcome">
      <div>
        <h1 className="typing">Welcome!</h1>
      </div>
      <div className="nav-buttons">
        <div className="big-btn" onClick={() => history.push("/users")}>
          <span><span><i class="fas fa-users"></i></span></span>
        </div>
        <div className="big-btn" onClick={() => history.push("/create-user")}>
          <span><i class="fas fa-user-plus"></i></span>
        </div>
      </div>
    </div>
  );
}
