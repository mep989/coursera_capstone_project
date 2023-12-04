import Header from "components/Reserve/Header/Header";
import Main from "components/Reserve/Main/Main";
import Footer from "components/Common/Footer/Footer";

function Reserve() {
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

export default Reserve;
