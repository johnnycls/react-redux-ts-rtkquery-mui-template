import { Box, IconButton, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useGetAPIDataQuery } from "../../slices/sampleAPISlice";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { toggleMode } from "../../slices/preferenceSlice";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// type HomeProps = {};
// const Home: React.FC<HomeProps> = ({}) => {
const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLightMode = useAppSelector((state) => state.preference.isLightMode);

  const {
    data: apiData,
    isLoading: isAPIDataLoading,
    isError: isAPIDataError,
    error: APIDataError,
  } = useGetAPIDataQuery({});

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        padding: 2,
      }}
    >
      <IconButton onClick={() => dispatch(toggleMode({}))}>
        {isLightMode ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>

      {isAPIDataLoading ? (
        <CircularProgress />
      ) : (
        <Typography>
          {isAPIDataError ? JSON.stringify(APIDataError) : apiData?.data}
        </Typography>
      )}
    </Box>
  );
};

export default Home;
