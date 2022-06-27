import Addinputfield from "./inputfielddynamic/AddInputfield";
import Footernote from './footnoote/Footernote'
import Myfootnore from "./footnoote/Myfootnore";
import Refu from "./footnoote/Refu";
import Product from './Searching/Product'
import Youtube from "./videodtlsYoutube/Youtube";
import { Route, Routes } from 'react-router-dom';
import Youtubedtsl from "./videodtlsYoutube/Youtubedtsl";
import Videocard from "./videodtlsYoutube/Videocarddtls";
import Inputcom from "./inputvalue/Inputcom";
import NewYoutube from "./newYoutube/NewYoutube";
import Newvideodtls from "./newYoutube/Newvideodtls";
import Mainpage from "./routercategory/Mainpage";
import Firstpage from "./twopages/Firstpage";
import Secondpage from "./twopages/Secondpage";



function App() {
  return (
    <div className="App">
      <p>this is app.js</p>

      {/* <Footernote /> */}
      {/* <Myfootnore /> */}
      {/* <Refu /> */}
      {/* <Product />
      < */}
      {/* <Inputcom /> */}
      {/* <Routes>
                <Route path="/" element={<Youtube /> } />
                <Route path="/:slug" element={<Youtubedtsl />} />
                <Route path="/watch/:video" element={<Videocard />} />
               
            </Routes> */}
      {/* <Routes>
        <Route path="/" element={<NewYoutube />} />
        <Route path="/:slug" element={<Newvideodtls />} />
      </Routes> */}

      <Routes>
        <Route path="/first" element={<Firstpage />} />
        <Route path="/second" element={<Secondpage />} />

      </Routes>

    </div>
  );
}

export default App;
