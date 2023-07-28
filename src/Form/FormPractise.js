import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./Form.css";
import Joi from "joi";
function Forms() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    rating: "",
    section: "",
    interest: "",
  });
  const handleChange = (event) => {
    let updatedData = { ...data };
    updatedData[event.target.name] = event.target.value;
    setData(updatedData);
  };

  const validatorScheme = Joi.object({
    name: Joi.string().min(10).max(50).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    phone: Joi.string().required(),
    gender: Joi.string().required(),
  });
  const [errorData, setErrorData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    section: "",
    interest: "",
  });
  const validateData = () => {
    const { error } = validatorScheme.validate(data);
    if (!error) {
      setErrorData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        section: "",
        interest: "",
      });
      return true;
    } else {
      for (let item of error.details) {
        let updatedError = { ...errorData };
        updatedError[item.path[0]] = item.message;
        setErrorData(updatedError);
      }
      return false;
    }
  };

  const save = () => {
    const validate = validateData();
    if (validate) {
      alert("Form is success");
    }
  };
  return (
    <div className="formContainer">
      <div style={{ background: "#2e3244" }}>1</div>
      <div className="container" style={{ padding: 12 }}>
        <TextField
          required
          style={{ width: "100%", marginTop: 12 }}
          id="filled-basic"
          name="name"
          value={data.name}
          onChange={handleChange}
          label="Name"
          variant="filled"
          error={errorData.name ? true : false}
          helperText={errorData.name}
        />
        <TextField
          required
          style={{ width: "100%", marginTop: 12 }}
          id="filled-basic"
          name="email"
          value={data.email}
          onChange={handleChange}
          label="Email"
          variant="filled"
          error={errorData.email ? true : false}
          helperText={errorData.email}
        />
        <TextField
          required
          type="number"
          style={{ width: "100%", marginTop: 12 }}
          id="filled-basic"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          label="Phone Number"
          variant="filled"
          error={errorData.phone ? true : false}
          helperText={errorData.phone}
        />

        <FormControl style={{ marginTop: 12 }}>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="gender"
            value={data.gender}
            onChange={handleChange}
            error={errorData.gender ? true : false}
            helperText={errorData.gender}
          >
            <div style={{ display: "flex" }}>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="others"
                control={<Radio />}
                label="Others"
              />
            </div>
          </RadioGroup>
        </FormControl>
        <div style={{ marginBottom: "40px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Section</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="section"
              value={data.section}
              label="Section"
              onChange={handleChange}
              error={errorData.section ? true : false}
              helperText={errorData.section}
            >
              <MenuItem value={"A"}>A</MenuItem>
              <MenuItem value={"B"}>B</MenuItem>
              <MenuItem value={"C"}>C</MenuItem>
              <MenuItem value={"D"}>D</MenuItem>
              <MenuItem value={"E"}>E</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <FormGroup>
            <FormLabel
              name="interest"
              value={data.interest}
              label="Interest"
              onChange={handleChange}
              error={errorData.interest ? true : false}
              helperText={errorData.interest}
            >
              Please select your area of interest
            </FormLabel>
            <div style={{ display: "flex" }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Python"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Java"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="React"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="PHP"
              />
            </div>
          </FormGroup>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <Typography component="legend">Ratings</Typography>
          <Rating
            name="rating"
            defaultValue={2}
            max={10}
            value={data.rating}
            onChange={handleChange}
            error={errorData.rating ? true : false}
            helperText={errorData.rating}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Button variant="contained" onClick={save}>
            Submit
          </Button>
          <Button>Reset</Button>
        </div>
        {JSON.stringify(data)}
      </div>
      <div style={{ background: "#2e3244" }}>3</div>
    </div>
  );
}

export default Forms;
