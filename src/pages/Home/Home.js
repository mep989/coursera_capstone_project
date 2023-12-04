import Header from "components/Home/Header/Header";
import Main from "components/Home/Main/Main";
import Footer from "components/Common/Footer/Footer";

function Home() {
  return (
    <>
      <div className="fill-remainder">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default Home;
