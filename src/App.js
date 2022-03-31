import { Routes , Route} from "react-router-dom";
import "./app.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./index.css";
import Create from "./page/Create";
import Home from "./page/Home";
import SingalPost from "./page/SingalPost";
import Category from "./page/Category";
import Posts from "./page/Posts";

function App() {
  return (
   <>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/category" element={<Category />} />
        <Route path="/posts/:id" element={<SingalPost />} />
      </Routes>
      <Footer /> 
      </>
  );
}

export default App;
