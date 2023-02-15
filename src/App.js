import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar,Feed,VideoDetail,ChannelDetail,SerachFeed} from "./components";

const App = () => {
  return (<>
  <BrowserRouter>
    <Box sx = {{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" exact element={<VideoDetail/>}/>
        <Route path="/channel/:id" exact element={<ChannelDetail/>}/>
        <Route path="/search/:searchTerm" exact element={<SerachFeed/>}/>
      </Routes>
    </Box>
  </BrowserRouter>
  </>
  );
}

export default App;
