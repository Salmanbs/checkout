import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
export const StyledSelectField2 = styled(Select)(({ theme }) => ({
    "& .MuiOutlinedInput-notchedOutline": {
      color: '#000',
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#666666"
    },
    "& .MuiSelect-select": {
      // minHeight: "1em",
      padding: 14.3,
  }
}))

export const StyledTextField = styled(TextField)(({ theme }) => ({
    color: "#000",
  
    '& label.Mui-focused': {
      color: '#000',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f0f0f0',
    },
    '& .MuiOutlinedInput-root': {
      // '& fieldset': {
      //   borderColor: '#666666',
      // },
      // '&:hover fieldset': {
      //   borderColor: '#f0f0f0',
      // },
      '&.Mui-focused fieldset': {
        borderColor: '#666666',
      },
      '&.Mui-error fieldset': {
        border: '0.5px solid #00adee',
        // border: '0.5px solid #d32f2f',
      },
    },
    '& .MuiInputBase-input':{
      // '& .MuiOutlinedInput-input': {
      height: "1em",
      marginTop:"2px"
     
      // }
  }
  }));