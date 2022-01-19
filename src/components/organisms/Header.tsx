import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useNavigate } from "react-router-dom";
import { useLoginUsernameContext } from "../../providers/LoginUserProvider";
import { Avatar } from "@mui/material";
import avatar_img1 from "../../img/icon_sample1.png";
import avatar_img2 from "../../img/icon_sample2.png";
import avatar_img3 from "../../img/icon_sample3.png";
import avatar_img4 from "../../img/icon_sample4.png";
import avatar_img5 from "../../img/icon_sample5.png";
import avatar_img6 from "../../img/icon_sample6.png";
import avatar_img7 from "../../img/icon_sample7.png";
import avatar_img8 from "../../img/icon_sample8.png";
import avatar_img9 from "../../img/icon_sample9.png";
import avatar_img10 from "../../img/icon_sample10.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Header = () => {
  const navigate = useNavigate();
  const loginUsername = useLoginUsernameContext();
  const loginId = localStorage.getItem("id");

  const onClickBackToHome = () => {
    navigate("/home");
  };

  let avatar;

  switch (Number(loginId)) {
    case 1:
      avatar = avatar_img1;
      break;
    case 2:
      avatar = avatar_img2;
      break;
    case 3:
      avatar = avatar_img3;
      break;
    case 4:
      avatar = avatar_img4;
      break;
    case 5:
      avatar = avatar_img5;
      break;
    case 6:
      avatar = avatar_img6;
      break;
    case 7:
      avatar = avatar_img7;
      break;
    case 8:
      avatar = avatar_img8;
      break;
    case 9:
      avatar = avatar_img9;
      break;
    case 10:
      avatar = avatar_img10;
      break;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar>
          <Typography
            variant="h5"
            color="black"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            fontFamily="Corben"
            onClick={onClickBackToHome}
          >
            P2P Matching
          </Typography>
          <Search style={{ background: "#C9D1D8" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              style={{ color: "black" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="h5"
            color="black"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            fontFamily="Corben"
          >
            user: {loginUsername}
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="default"
            >
              <MonetizationOnIcon />
            </IconButton>
            <div style={{ color: "black" }}>3</div>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="default"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="default"
            >
              <Avatar src={avatar} sx={{ width: 35, height: 35 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
