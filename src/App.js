import './App.css';
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Welcome } from './Welcome';
import { UserProfile } from './UserProfile';
import { EditUser } from './EditUser';
import { AddUser } from './AddUser';
import { AllUsers } from './AllUsers';



export default function App() {
  // useHistory to change page link(Navigation purpose)
  const history = useHistory()
  // Initial data
  const USERS = [{
    "first_name": "Rebbeca",
    "last_name": "Roy",
    "email": "rebbecaroy@gmail.com",
    "gender": "Others",
    "profilepic": "https://jobzey.com/wp-content/uploads/2020/07/LinkedIn-Profile-1.jpg"
  },
  {
    "first_name": "Robert",
    "last_name": "Ritz",
    "email": "robertritz@gmail.com",
    "gender": "Male",
    "profilepic": "https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg"
  },
  {
    "first_name": "Riya",
    "last_name": "Roy",
    "email": "riyaroy@gmail.com",
    "gender": "Female",
    "profilepic": "https://www.erwinlist.com/html/wp-content/uploads/2020/02/29-5098-pp_gallery/LinkedIn-Sample-Photo-001(pp_w768_h768).jpg"
  },
  {
    "first_name": "Preethi",
    "last_name": "Roy",
    "email": "preethir@gmail.com",
    "gender": "Female",
    "profilepic": "https://www.mainewomensnetwork.com/Resources/Pictures/vicki%20aqua%20headshot-smallmwn.jpg"
  },
  {
    "first_name": "Priyanka",
    "last_name": "Sharma",
    "email": "pinkys@gmail.com",
    "gender": "Others",
    "profilepic": "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
  },
  {
    "first_name": "James",
    "last_name": "Caron",
    "email": "caron@gmail.com",
    "gender": "Male",
    "profilepic": "https://cdn-images.resumelab.com/authors/tom_gerencer_resumelab.jpg"
  },
  {
    "first_name": "Erika",
    "last_name": "Jake",
    "email": "erika@gmail.com",
    "gender": "Female",
    "profilepic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-ZveIjy1EcjNjY6_V93LamVZp8SCukDKRKiZXdfAEnUeeqWWqKvD6m5qxOljVLAS_f8&usqp=CAU"
  },
  {
    "first_name": "James",
    "last_name": "kaln",
    "email": "jameskaln@gmail.com",
    "gender": "Male",
    "profilepic": "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png"
  },

  {
    "first_name": "Jane",
    "last_name": "Caron",
    "email": "janejj@gmail.com",
    "gender": "Female",
    "profilepic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE55B_xNIgoi3O6G2T6y63OWSw94MkkGvxzNv-T3DDQISJsL1v1VFXt5gO56GiMpQvtjw&usqp=CAU"
  },


  {
    "first_name": "Philips",
    "last_name": "Jain",
    "email": "philipsj@gmail.com",
    "gender": "Male",
    "profilepic": "https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic-300x300.png"

  }
  ]

  // useState on every category of data to take care of updation of users
  const [users, setUsers] = useState(USERS)


  return (
    <div className="App" >
      {/* Navigation bar on right */}
      <div class="sidenav">
        <button className="side-button" onClick={() => history.push("/")}>
          <i class="fas fa-home"></i> Home
        </button>
        <button className="side-button" onClick={() => history.push("/users")}>
          <i class="fas fa-users"></i> Users
        </button>
        <button className="side-button" onClick={() => history.push("/create-user")}>
          <i class="fas fa-user-plus"></i> &nbsp; Add User
        </button>

      </div>

      <div class="main">
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/users">
            <AllUsers users={users} setUsers={setUsers} />
          </Route>
          <Route path="/create-user">
            <AddUser users={users} setUsers={setUsers} />
          </Route>
          <Route path="/edit-user/:id">
            <EditUser users={users} setUsers={setUsers} />
          </Route>
          <Route path="/profile/:id">
            <UserProfile users={users} />
          </Route>
        </Switch>
      </div>
    </div >
  );
}


