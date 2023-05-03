import * as React from "react";
import { StyledSelectField2, StyledTextField } from "./theme/StyledComponents";

import OutlinedInput from "@mui/material/OutlinedInput";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

import Box from "@mui/material/Box";

import FormLabel from "@mui/material/FormLabel";

import Toolbar from "@mui/material/Toolbar";

import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";

import EditIcon from "@mui/icons-material/Edit";
import image from "../../assets/warmtewinner.png";

import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import AddIcon from "@mui/icons-material/Add";

import { useTheme } from "@mui/material/styles";
import SwitchOn from "../../assets/Switch.png";
import SwitchOff from "../../assets/Switch_off.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import { FormHelperText } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

let mandatoryData = [
  { value: "percentage", label: "%" },
  { value: "euro", label: "€" },
];

export default function Checkout(props) {
  const theme = useTheme();
  let total_cost = 1000;
  let monthly_price = 10;
  const [valueNameEdit, setValueNameEdit] = React.useState({
    type: "",
    discount_type: "",
    discount: "",
    duration: "",
    description: "",
  });
  const [value, setValue] = React.useState("");
  const [discount, setDiscount] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [openDialogAddField, setopenDialogAddField] = React.useState(false);

  const [write, setWrite] = React.useState(false);
  const setWriteTrue = () => {
    setWrite(true);
  };
  const setWriteFalse = () => {
    setWrite(false);
  };
  const handleClickOpenDialogAddField = () => {
    setopenDialogAddField(true);
  };
  const handleCloseOpenDialogAddField = () => {
    setopenDialogAddField(false);
  };
  const handleChangeSelectAddType = (event, name) => {
    const {
      target: { value },
    } = event;
    setValueNameEdit((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleButtonClick = (e) => {
    setValueNameEdit({
      ...valueNameEdit,
      type: e,
    });

    setValue(e);
  };

  const onCancel = (e) => {
    e.preventDefault();
    setValueNameEdit({
      type: "",
      discount_type: "",
      discount: "",
      duration: "",
      description: "",
    });
    handleCloseOpenDialogAddField();
    setShow(false);
    setValue("");
  };

  const onAdd = (e) => {
    const { type, discount_type, discount, duration } = valueNameEdit;

    switch (true) {
      case !type ||
        !discount_type ||
        !discount ||
        (type === "monthly" && !duration):
        alert("Please fill in all required fields.");
        return;
      case discount_type === "percentage" && discount > 100:
        alert("Discount exceeds 100");
        return;
      case discount_type === "euro" &&
        ((type === "one_time" && discount > total_cost) ||
          (type === "monthly" && discount > monthly_price)):
        alert("Discount exceeds total cost");
        return;
      default:
        handleCloseOpenDialogAddField();
        setDiscount(valueNameEdit);
        setShow(true);
    }
  };

  const alldata = [
    {
      name: "Discount name",
      value: "€ 250,00 one time",
      edit: true,
      enable: true,
    },
    {
      name: "Discount name",
      edit: false,
      value: "€ 250,00 one time",
      enable: true,
    },
    {
      name: "Discount name",
      edit: false,
      value: "€ 250,00 one time",
      enable: false,
    },
    {
      name: "Discount name",
      edit: false,
      value: "€ 250,00 one time",
      enable: false,
    },
    {
      name: "Discount name",
      edit: false,
      value: "€ 250,00 one time",
      enable: false,
    },
    {
      name: "Discount name",
      edit: false,
      value: "€ 250,00 one time",
      enable: false,
    },
  ];

  return (
    <>
      <div className="App">
        <Box
          sx={{
            width: "100%",
            // p: 2,
            margin: "0px auto",
          }}
        >
          <Paper
            sx={{ width: "100%", background: "#F3F3F5", boxShadow: "none" }}
          >
            <div className="main-container">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                sx={{
                  m: 1,
                  width: "auto",
                  background: "#767676",
                  display: "flex",
                  marginLeft: "0px",
                  borderRadius: "0px",
                }}
              >
                {"Previous"}
              </Button>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Toolbar
                    sx={{
                      pl: { sm: 0 },
                      pr: { xs: 0, sm: 0 },
                      minHeight: "50px !important",
                      background: "#26B7CD",
                    }}
                  >
                    <div
                      style={{
                        flex: "1 1 100%",
                        display: "flex",
                        margin: "0px 4px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        id="tableTitle"
                        component="div"
                        sx={{ color: "#FFFFFF", margin: "12px 16px 13px" }}
                      >
                        Discounts
                      </Typography>
                    </div>
                  </Toolbar>
                  <Toolbar
                    sx={{
                      pl: { sm: 0 },
                      pr: { xs: 0, sm: 0 },
                      minHeight: "50px !important",
                      background: "#FFFFFF",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div>
                      <Button
                        startIcon={<AddIcon />}
                        variant="contained"
                        onClick={handleClickOpenDialogAddField}
                        color="secondary"
                        size="small"
                        sx={{
                          m: 1,
                          // width: "auto",
                          background: "none",
                          color: "#26B7CD",
                          boxShadow: "none",
                          "&:hover": {
                            backgroundColor: "white",
                            boxShadow: "none",
                          },
                        }}
                      >
                        {"Add manual discount"}
                      </Button>
                    </div>
                  </Toolbar>
                  <Box
                    sx={{
                      width: "100%",
                      pt: 1,
                      pb: 1,
                      margin: "0px auto",
                      background: "#FFFFFF",
                    }}
                  >
                    {alldata.map((s) => {
                      return (
                        <>
                          <Divider light />
                          <List>
                            <Grid container spacing={2}>
                              <Grid item xs={12} md={4}>
                                <Typography
                                  sx={{ mt: 1, mb: 1 }}
                                  variant="h6"
                                  component="div"
                                >
                                  {s.name}
                                </Typography>
                              </Grid>
                              <Grid item xs={12} md={4}>
                                <Typography
                                  sx={{ mt: 1, mb: 1 }}
                                  variant="h6"
                                  component="div"
                                >
                                  <span style={{ display: "flex" }}>
                                    {s.value}
                                  </span>
                                </Typography>
                              </Grid>
                              <Grid item xs={12} md={4}>
                                <Typography
                                  sx={{ mt: 1, mb: 1 }}
                                  variant="h6"
                                  component="div"
                                >
                                  {s.enable === true ? (
                                    <ListItemIcon>
                                      <img
                                        src={SwitchOn}
                                        alt="Switch On"
                                        style={{
                                          width: "auto",
                                          height: "36px",
                                        }}
                                      />
                                    </ListItemIcon>
                                  ) : (
                                    <ListItemIcon>
                                      <img
                                        src={SwitchOff}
                                        alt="Switch On"
                                        style={{
                                          width: "auto",
                                          height: "36px",
                                        }}
                                      />
                                    </ListItemIcon>
                                  )}
                                </Typography>
                              </Grid>
                            </Grid>
                          </List>
                          <Divider light />
                        </>
                      );
                    })}
                    {show == true ? (
                      <List>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={4}>
                            <Typography
                              sx={{ mt: 1, mb: 1 }}
                              variant="h6"
                              component="div"
                            >
                              Manual Discount
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Typography
                              sx={{
                                mt: 1,
                                mb: 1,
                                justifyContent: "left",
                                display: "flex",
                              }}
                              variant="h6"
                              component="div"
                            >
                              {discount.discount_type === "percentage"
                                ? `- ${discount.discount} % ${
                                    discount.type == "one_time"
                                      ? `one time`
                                      : `monthly`
                                  }`
                                : `- €  ${discount.discount} ${discount.type}`}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Typography
                              sx={{ mt: 1, mb: 1 }}
                              variant="h6"
                              component="div"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  justifyContent: "center",
                                }}
                              >
                                <EditIcon
                                  sx={{
                                    color: "#28B8CE",
                                    fontSize: "20px",
                                    mt: 1,
                                  }}
                                  // onClick={handleClickOpenDialogAddField}
                                />
                                <DeleteIcon
                                  sx={{
                                    color: "#28B8CE",
                                    fontSize: "20px",
                                    mt: 1,
                                  }}
                                  onClick={(e) => onCancel(e)}
                                />
                              </div>
                            </Typography>
                          </Grid>
                        </Grid>
                      </List>
                    ) : null}
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      width: "100%",
                      pt: 1,
                      pb: 1,
                      margin: "0px auto",
                      background: "#FFFFFF",
                    }}
                  >
                    <Grid container justifyContent="center" spacing={2}>
                      {[0].map((value) => (
                        <Grid key={value} item>
                          <img
                            src={image}
                            alt="Your image description here"
                            style={{
                              height: 140,
                              width: 100,
                              backgroundColor: (theme) =>
                                theme.palette.mode === "dark"
                                  ? "#1A2027"
                                  : "#fff",
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                    <Typography
                      sx={{
                        color: "#8A8A8A",
                        fontSize: "28px",
                        display: "flex",
                        fontWeight: "bold",
                        ml: 2,
                      }}
                    >
                      Overview
                    </Typography>
                    <Typography>
                      <div className="my-unique-class">
                        <span>Webasto Pure</span>
                        <span>€ {total_cost}</span>
                      </div>
                    </Typography>
                    <Typography>
                      <div className="my-unique-class">
                        <span>Monthly price</span>
                        <span>€ {monthly_price}</span>
                      </div>
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "bold",
                        background: "#EDF6FB",
                        padding: "20px",
                        paddingLeft: "0px",
                      }}
                    >
                      {value === "monthly" && show == true ? (
                        <>
                          <div className="my-unique-class">
                            <span>monthly discount</span>
                            <span>
                              {discount.discount_type === "percentage" ? (
                                <> {`- ${discount.discount} % `}</>
                              ) : (
                                <> {`- € ${discount.discount}`}</>
                              )}
                            </span>
                          </div>
                          <div className="my-unique-class">
                            <span>
                              For the First {discount.duration} months pay
                            </span>
                            <span>
                              {discount.discount_type === "percentage" ? (
                                <>
                                  {" "}
                                  {`€ ${
                                    (monthly_price *
                                      (100 - discount.discount)) /
                                    100
                                  }`}
                                </>
                              ) : (
                                <>
                                  {" "}
                                  {` € ${monthly_price - discount.discount}`}
                                </>
                              )}
                            </span>
                          </div>
                        </>
                      ) : null}

                      <div className="my-unique-class highlighted">
                        <span>Eventually per month excl. btw</span>
                        <span>€ {monthly_price}</span>
                      </div>
                    </Typography>
                    <Typography
                      sx={{
                        fontStyle: "bold",
                        background: "#EDF6FB",
                        padding: "20px",
                        marginTop: "20px",
                        paddingLeft: "0px",
                      }}
                    >
                      <div className="my-unique-class">
                        <span>Subtotal onetime costs excl. btw</span>
                        <span>€ {total_cost}</span>
                      </div>
                      {show == true && discount.type == "one_time" && (
                        <>
                          <div className="my-unique-class">
                            <span style={{ fontStyle: "italic" }}>
                              Discount name
                            </span>
                            <span>
                              {" "}
                              {discount.discount_type === "percentage" ? (
                                <> {`- ${discount.discount} % `}</>
                              ) : (
                                <> {`- € ${discount.discount}`}</>
                              )}
                            </span>
                          </div>
                          <div className="my-unique-class highlighted">
                            <span>Onetime costs excl. btw : </span>
                            <span>
                              {discount.discount_type === "percentage"
                                ? (total_cost * (100 - discount.discount)) / 100
                                : total_cost - discount.discount}
                            </span>
                          </div>
                        </>
                      )}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Box>
        <Dialog maxWidth="sm" fullWidth open={openDialogAddField}>
          <DialogTitle>Add Manual Discount</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <FormLabel id="demo-radio-buttons-group-label">
                For which price do you calculate the discount?
              </FormLabel>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
              >
                <Button
                  variant={
                    valueNameEdit.type === "one_time" ? "contained" : "outlined"
                  }
                  onClick={() => handleButtonClick("one_time")}
                  sx={{
                    color:
                      valueNameEdit.type === "one_time" ? "#FFFFF" : "#767676",
                    border: "none",
                    borderRadius: "4px",
                    backgroundColor:
                      valueNameEdit.type === "one_time" ? "#26B7CD" : "#EAEAEA",
                    "&:hover": {
                      backgroundColor: "#26B7CD",
                      border: "none",
                      color: "white",
                    },
                  }}
                  endIcon={
                    valueNameEdit.type === "one_time" ? (
                      <CheckCircleIcon />
                    ) : (
                      <CircleIcon sx={{ color: "white" }} />
                    )
                  }
                >
                  One time price
                </Button>
                <Button
                  variant={
                    valueNameEdit.type === "monthly" ? "contained" : "outlined"
                  }
                  onClick={() => handleButtonClick("monthly")}
                  sx={{
                    color:
                      valueNameEdit.type === "monthly" ? "white" : "#767676",
                    border: "none",
                    borderRadius: "4px",
                    backgroundColor:
                      valueNameEdit.type === "monthly" ? "#26B7CD" : "#EAEAEA",
                    "&:hover": {
                      backgroundColor: "#26B7CD",
                      color: "white",
                      border: "none",
                    },
                  }}
                  endIcon={
                    valueNameEdit.type === "monthly" ? (
                      <CheckCircleIcon />
                    ) : (
                      <CircleIcon sx={{ color: "white" }} />
                    )
                  }
                >
                  Monthly price
                </Button>
              </div>
              {valueNameEdit.type && (
                <>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    sx={{ display: "contents" }}
                  >
                    Discount
                  </FormLabel>
                  <div style={{ display: "inline-flex", width: "99%" }}>
                    <StyledSelectField2
                      labelId="Mandatory"
                      id="mandatory"
                      //multiple
                      sx={{ mt: "1px", borderRadius: "0px" }}
                      value={valueNameEdit.discount_type}
                      onChange={(e) =>
                        handleChangeSelectAddType(e, "discount_type")
                      }
                      input={<OutlinedInput label="Mandatory" />}
                      MenuProps={MenuProps}
                    >
                      {mandatoryData.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          style={{
                            backgroundColor:
                              valueNameEdit.mandatory === option.value
                                ? "#F3F3F5"
                                : "#FFFFFF",

                            color: "#000000",
                          }}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </StyledSelectField2>{" "}
                    <StyledTextField
                      type="number"
                      fullWidth
                      sx={{
                        mt: "1px",
                        width: "90%",
                        borderRadius: "0px",
                      }}
                      // label="Discount"
                      id="name"
                      value={valueNameEdit.discount}
                      onKeyDown={setWriteTrue}
                      onChange={(e) => {
                        const discount = parseInt(e.target.value);
                        // if (discount > total_cost) {
                        //   alert("Discount cannot exceed total price.");
                        //   return;
                        // }
                        setValueNameEdit((state) => ({
                          ...state,
                          discount: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  {valueNameEdit.discount_type == "percentage" ? (
                    parseInt(valueNameEdit.discount) > 100 && (
                      <FormHelperText error={true}>
                        Discount cannot exceed 100.
                      </FormHelperText>
                    )
                  ) : (
                    <>
                      {valueNameEdit.discount > total_cost &&
                        valueNameEdit.type == "one_time" && (
                          <FormHelperText error={true}>
                            Discount cannot exceed total price.
                          </FormHelperText>
                        )}
                      {valueNameEdit.discount > monthly_price &&
                        valueNameEdit.type == "monthly" && (
                          <FormHelperText error={true}>
                            Discount cannot exceed monthly price.
                          </FormHelperText>
                        )}
                    </>
                  )}

                  <FormControl sx={{ mt: 2, width: "100%" }}>
                    {valueNameEdit.type === "monthly" ? (
                      <>
                        <FormLabel id="demo-radio-buttons-group-label">
                          Duration
                        </FormLabel>
                        <StyledTextField
                          type="number"
                          fullWidth
                          sx={{
                            mt: "1px",
                            mb: "20px",
                            width: "99%",
                          }}
                          id="name"
                          value={valueNameEdit.duration}
                          onKeyDown={setWriteTrue}
                          onChange={(e) => {
                            setValueNameEdit((state) => ({
                              ...state,
                              duration: e.target.value,
                            }));
                          }}
                          required
                        />
                      </>
                    ) : null}
                    <FormLabel id="demo-radio-buttons-group-label">
                      Description
                    </FormLabel>
                    <StyledTextField
                      type="text"
                      fullWidth
                      sx={{
                        mt: "1px",
                        width: "99%",
                      }}
                      id="name"
                      value={valueNameEdit.description}
                      onKeyDown={setWriteTrue}
                      onChange={(e) => {
                        setValueNameEdit((state) => ({
                          ...state,
                          description: e.target.value,
                        }));
                      }}
                    />
                  </FormControl>
                </>
              )}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div>
              <Button
                variant="contained"
                onClick={(e) => onCancel(e)}
                color="secondary"
                sx={{
                  m: 1,
                  // width: "auto",
                  background: "none",
                  color: "#26B7CD",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "white",
                    boxShadow: "none",
                  },
                }}
              >
                Cancel
              </Button>
            </div>
            <Button
              variant="contained"
              onClick={(e) => onAdd(e)}
              color="secondary"
              sx={{
                m: 1,
                background: "#26B7CD",
                color: "white",
                border: "none",
                borderRadius: "0px",
                "&:hover": {
                  backgroundColor: "#26B7CD",
                  color: "white",
                  border: "none",
                },
              }}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
