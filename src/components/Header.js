import Nav from "./Nav";
import BannerTop from "./BannerTop";
import LeadCard from "./LeadCard";

function Header() {
  return (
    <>
      <Nav />
      <BannerTop />
      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        <div className="mx-0 sm:mx-6">
          <LeadCard />
        </div>
      </div>
    </>
  );
}

export default Header;
