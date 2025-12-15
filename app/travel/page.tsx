import Footer from "../components/Footer";
import Navigation from "../components/navbar";
import TravelStay from "../components/travelandstay";

const SchedulePage = () => {
  return (
    <>
      <Navigation scrolled={true} />
      <TravelStay />
      <Footer />
    </>
  );
};

export default SchedulePage;
