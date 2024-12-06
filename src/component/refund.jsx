import React from "react";

const Refund = () => {
  return (
    <div className="text-black lg:p-16 p-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Refund and Cancellation policy
      </h1>
      <h4 className="mb-2"> This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service that you have purchased through the Platform. Under this policy:

      </h4>
      <ol className=" list-disc space-y-4 text-sm ml-8">
        <li>
          Cancellations will only be considered if the request is made 1 days of
          placing the order. However, cancellation requests may not be
          entertained if the orders have been communicated to such sellers /
          merchant(s) listed on the Platform and they have initiated the process
          of shipping them, or the product is out for delivery. In such an
          event, you may choose to reject the product at the doorstep.
        </li>
        <li>
          Auradevops International does not accept cancellation requests for
          perishable items like flowers, eatables, etc. However, the refund /
          replacement can be made if the user establishes that the quality of
          the product delivered is not good.
        </li>
        <li>
          In case of receipt of damaged or defective items, please report to our
          customer service team. The request would be entertained once the
          seller/ merchant listed on the Platform, has checked and determined
          the same at its own end. This should be reported within 1 days of
          receipt of products. In case you feel that the product received is not
          as shown on the site or as per your expectations, you must bring it to
          the notice of our customer service within 1 days of receiving the
          product. The customer service team after looking into your complaint
          will take an appropriate decision.
        </li>
        <li>
          In case of complaints regarding the products that come with a warranty
          from the manufacturers, please refer the issue to them.
        </li>
        <li>
          {" "}
          In case of any refunds approved by to be processed to you. Auradevops
          International , it will take 1 days for the refund
        </li>
      </ol>
    </div>
  );
};

export default Refund;
