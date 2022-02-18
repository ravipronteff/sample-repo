import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./Radio.css";
export default function RadioButtonsGroup() {
  return (
    <div className="scroll">
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="male"
          name="radio-buttons-group"
        >
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <FormControlLabel
                value={`option ${i}`}
                control={<Radio />}
                label={`option ${i}`}
              />
            ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
