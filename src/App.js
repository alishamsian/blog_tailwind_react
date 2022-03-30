import "./app.css"
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostContainer from "./components/PostContainer";
import Subscribe from "./components/Subscribe";
import './index.css';

function App() {
  return (
    <>
     <Header />
     <PostContainer />
     <Subscribe />
     <Footer />
    </>
  );
}

export default App;
