import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./Radio.css";
import { Chip } from "@mui/material";
import { arr } from "./Data";
export default function RadioButtonsGroup() {
  const [isChecked, setIsChecked] = React.useState(arr.slice().fill(false));
  const [selected, setSelected] = React.useState([]);
  const toggleCheckboxValue = (e, index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  };
  console.log(isChecked, "isChecked");
  const handleDelete = (index) => {
    setSelected((prev) => prev.filter((_, i) => i !== index));
  };

  React.useEffect(() => {
    let c = [];
    for (let i = 0; i < isChecked.length; i++) {
      if (isChecked[i]) {
        c.push(arr[i]);
      }
    }
    setSelected(c);
  }, [isChecked]);

  return (
    <div className="scroll">
      {selected.map((v, i) => (
        <Chip
          label={v}
          // onDelete={() => handleDelete(i)}
          sx={{
            margin: "0.2rem",
          }}
        />
      ))}
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Select Category</FormLabel>
          <FormGroup>
            {arr.map((_, i) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked[i]}
                    onChange={(e) => toggleCheckboxValue(e, i)}
                    name={_}
                  />
                }
                label={_}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
    </div>
  );
}
