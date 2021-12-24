import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
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


export function AddUser({ users, setUsers }) {
  // useHistory to change page link(Navigation purpose)
  const history = useHistory();

  // useState on every category of data to take care of updation of that particular variable 
  const [profilepic, setProfilepic] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  // Function to add user to existing data
  const addUser = () => {
    const newUser = {
      profilepic,
      first_name,
      last_name,
      email,
      gender
    };

    setUsers([...users, newUser]);
    history.push("/users");
  };

  // useFormik used for validation of the form used to add user
  const formik = useFormik({  // const {handleSubmit, values, handleChange, handleBlur, errors, touched } we can use destructuring like this
    initialValues: { profilepic: "", first_name: "", last_name: "", email: "", gender: "" },
    validate: validateForm,  //after calling validateForm,if it doesnt return error then only onSubmit will be called
    onSubmit: (values) => {
      console.log("onSubmit", values)
      addUser()
    }
  })

  return (
    <form className="add-form" onSubmit={formik.handleSubmit}>
      <span><i class="fas fa-user-plus"></i> Add User</span>
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
          defaultValue="Female"
          name="radio-buttons-group"
          onChange={(event) => setGender(event.target.value)}
        >
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Others" control={<Radio />} label="Others" />
        </RadioGroup>
      </FormControl>
      <Button onClick={addUser} variant="contained" >Add User</Button>
    </form>
  );
}