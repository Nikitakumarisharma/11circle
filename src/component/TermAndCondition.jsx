import React from "react";
import Conditions from "./condition";
import PrivacyandPolicy from "./privacyPolicy";
import Refund from "./refund";

const TermsAndConditions = () => {
  return (
    <div className=" mx-auto m-4">
      <Conditions/>
      <PrivacyandPolicy />
      <Refund />
    </div>
  );
};

export default TermsAndConditions;
