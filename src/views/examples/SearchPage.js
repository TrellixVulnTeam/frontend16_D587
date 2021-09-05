import React from "react";

// reactstrap components


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import SearchPageHeader from "components/Headers/SearchPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function SearchPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <SearchPageHeader />
         <div className="section section-team text-center">
          






        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default SearchPage;