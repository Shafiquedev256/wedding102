import Footer from "../components/Footer";
import Navigation from "../components/navbar";
import Schedule from "../components/schedule";

const SchedulePage = () => {
  return (
    <>
      <Navigation scrolled={true} />
      <Schedule />
      <Footer />
    </>
  );
};

export default SchedulePage;
