import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router-dom";

export function AllUsers({ users, setUsers }) {
  // useHistory to change page link(Navigation purpose)
  const history = useHistory();
  return (
    <div className="table-container">
      <div class="tbl-header">
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>


      <div class="tbl-content ">
        <table cellpadding="0" cellspacing="0" border="0">
          <tbody>
            {users.map(({ profilepic, first_name, last_name, email, gender }, index) => (


              <tr className="for-profile">
                <td onClick={() => history.push("/profile/" + index)}><Avatar alt={first_name} src={profilepic} /></td>
                <td onClick={() => history.push("/profile/" + index)}>{first_name}</td>
                <td onClick={() => history.push("/profile/" + index)}>{last_name}</td>
                <td onClick={() => history.push("/profile/" + index)}>{email}</td>
                <td onClick={() => history.push("/profile/" + index)}>{gender}</td>
                <td>
                  <IconButton
                    onClick={() => history.push("/edit-user/" + index)}
                    className="edit-button"
                    color="primary"
                    aria-label="hide"
                    cursor="pointer"
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton

                    onClick={() => {
                      const deleteIdx = index;
                      const remainingUsers = users.filter((user, idx) => idx !== deleteIdx);
                      setUsers(remainingUsers);
                    }}
                    className="delete-button"
                    color="error"
                    aria-label="hide"
                    cursor="pointer"
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>

            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}
