import Jumbotron from "./Component/Jumbotron/Jumbotron";
import Nav_bar from "./Component/Navbar/Navbar";
import Cards from "./Component/Cards/Cards";
import Footer from "./Component/Footer/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.css';



function App() {
  return (<>
    <Nav_bar />
    <br />
    <div className="container row">
      <div className="col-8 offset-3">
        <Jumbotron />
        <br />
        <div className="container text-center">
          <div className="row row-cols-4">
            <div className="col"> <Cards cardText="This is card 1" cardTitle="Card title" cardBody="abcdefghij" /></div>
            <div className="col"><Cards cardText="This is card 2" cardTitle="Card title" cardBody="abcdefghij" /></div>
            <div className="col"><Cards cardText="This is card 3" cardTitle="Card title" cardBody="abcdefghij" /> </div>
            <div className="col"> <Cards cardText="This is card 4" cardTitle="Card title" cardBody="abcdefghij" /></div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <Footer />
  </>
    );
}

    export default App;