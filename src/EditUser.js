import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory, useParams } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useFormik } from "formik"


// Funciton to validate from of add user with our required specifications
const validateForm = (values) => {
  const errors = {}
  if (values.profilepic.length === 0) {
    errors.profilepic = 'Required';
  }
  if (values.first_name.length === 0) {
    errors.first_name = 'Required';
  }
  if (values.last_name.length === 0) {
    errors.last_name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  } else if (values.email.length < 5) {
    errors.email = "Email should be atleast 5 characters"
  }
  return errors
}


export function EditUser({ users, setUsers }) {
  // useHistory to change page link(Navigation purpose)
  const history = useHistory();

  // useParams to get id from link of the user
  const { id } = useParams();
  const user = users[id];

  // useState on every category of data to take care of updation of that particular variable 
  const [profilepic, setProfilepic] = useState(user.profilepic);
  const [first_name, setFirstName] = useState(user.first_name);
  const [last_name, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);

  // Function to edit user in existing data
  const editUser = () => {
    const updatedUser = {
      profilepic,
      first_name,
      last_name,
      email,
      gender
    };

    const copyUserList = [...users];
    copyUserList[id] = updatedUser;
    setUsers(copyUserList);
    history.push("/users");
  };

  // useFormik used for validation of the form used to add user
  const formik = useFormik({  // const {handleSubmit, values, handleChange, handleBlur, errors, touched } we can use destructuring like this
    initialValues: { profilepic: profilepic, first_name: first_name, last_name: last_name, email: email, gender: gender },
    validate: validateForm,  //after calling validateForm,if it doesnt return error then only onSubmit will be called
    onSubmit: (values) => {
      console.log("onSubmit", values)
      editUser()
    }
  })

  return (
    <div className="edit-form">
      <span><i class="fas fa-user"></i> Edit Profile</span>
      <TextField
        id="profilepic" name="profilepic"
        value={formik.values.profilepic} type="url"
        onChange={(event) => {
          formik.handleChange(event)
          setProfilepic(event.target.value)
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.profilepic && formik.touched.profilepic && formik.errors.profilepic}
        error={formik.errors.profilepic && formik.touched.profilepic && formik.errors.profilepic !== ""}
        label="Enter Profile Pic URL" variant="standard"
      />
      <TextField
        id="first_name" name="first_name"
        value={formik.values.first_name} type="text"
        onChange={(event) => {
          formik.handleChange(event)
          setFirstName(event.target.value)
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.first_name && formik.touched.first_name && formik.errors.first_name}
        error={formik.errors.first_name && formik.touched.first_name && formik.errors.first_name !== ""}
        label="Enter First Name" variant="standard"
      />
      <TextField
        id="last_name" name="last_name"
        value={formik.values.last_name} type="text"
        onChange={(event) => {
          formik.handleChange(event)
          setLastName(event.target.value)
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.last_name && formik.touched.last_name && formik.errors.last_name}
        error={formik.errors.last_name && formik.touched.last_name && formik.errors.last_name !== ""}
        label="Enter Last Name" variant="standard"
      />
      <TextField
        id="email" name="email"
        value={formik.values.email} type="email"
        onChange={(event) => {
          formik.handleChange(event)
          setEmail(event.target.value)
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.email && formik.touched.email && formik.errors.email}
        error={formik.errors.email && formik.touched.email && formik.errors.email !== ""}
        label="Enter Email" variant="standard"
      />
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          defaultValue={gender}
          name="radio-buttons-group"
          onChange={(event) => setGender(event.target.value)}
        >
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Others" control={<Radio />} label="Others" />
        </RadioGroup>
      </FormControl>
      <Button onClick={editUser} variant="contained">Save</Button>
    </div>
  );
}