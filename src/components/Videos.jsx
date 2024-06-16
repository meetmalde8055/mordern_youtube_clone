// import { Stack, Box } from "@mui/material";
// import { ChannelCard, VideoCard } from "./";

// const Videos = ({ videos }) => {
//     // if(!videos?.length) return <Loader />;
//     return (
//       <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}
//       >
//         {videos.map((item, idx) => (
//           <Box key={idx}>
//             {item.id.videoId && <VideoCard video={item} /> }
//             {item.id.channelId && <ChannelCard channelDetail={item} />}
//           </Box>
//         ))}
//       </Stack>
//     )
//   }
  
//   export default Videos;

import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos || !videos.length) return 'Loading...'; // Render nothing if videos array is empty or null
  return (
    <Stack direction={direction || "row" }flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
