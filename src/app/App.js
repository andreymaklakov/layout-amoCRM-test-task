import Footer from "./components/footer";
import Header from "./components/Header";
import LeftContent from "./components/leftContent";
import RightContent from "./components/rightContent";

function App() {
  return (
    <main>
      <div className="container">
        <Header />

        <div className="content_container">
          <LeftContent />
          <RightContent />
        </div>

        <Footer />
      </div>

      <div className="purpleBall"></div>
      <div className="redBall bigRedBall"></div>
      <div className="purpleLight"></div>
      <div className="redLight"></div>
      <div className="redBall smallRedBall"></div>
    </main>
  );
}

export default App;
