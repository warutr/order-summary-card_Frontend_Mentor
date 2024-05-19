import React from "react";
import Card from "./component/Card";

const homePage = () => {
  return (
    <div>
      <Card
        alt="image"
        width={567}
        height={327}
        scr="/images/illustration-hero.svg"
        title="Order Summary"
        description="You can now listen to millions of songs, audiobooks, and podcasts on
        any device anywhere you like!"
        name_order="Annual Plan"
        price="$59.99/year"
        change_btn="Change"
        proceed_btn="Proceed to Payment"
        cancel_btn="Cancel Order"
      />
    </div>
  );
};

export default homePage;
