import Footer from "./components/basic/Footer";
import Header from "./components/basic/Header";
import Main from "./pages/Index";
import "./App.css";

function App() {
  return (
    <div className="wrap">
      {/* 상단 */}
      <Header />
      {/* 메인 */}
      <Main />
      {/* 하단 */}
      <Footer />
    </div>
  );
}
export default App;
