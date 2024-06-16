import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    try {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  } catch(err) {
    console.log("Error fetching data")
  }
    console.log(videos)
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant="h4" fontWeight="bold"  color="white" mb={2}  sx={{ color:'white'}} >
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
      {/* <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        
      </Box> */}
    </Box>
  );
};

export default SearchFeed;