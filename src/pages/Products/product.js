import React, { useState } from "react";
import Form from "../Form";
const Product = ({ product }) => {
  const [buying, setBuying] = useState(false);
  const [img, name, cost] = product;
  if (!buying)
    return (
      <div className="product">
        <img src={`products/${img}`} />
        <div className="description">
          <h2>{name}</h2>
          <h5>${cost}</h5>
          <button className="buy" onClick={() => setBuying(true)}>
            <h5>BUY NOW</h5>
          </button>
        </div>
      </div>
    );
  return (
    <div className="product">
      <Form
        url="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5sgvo7qrMmqGEaim_gbmGK4l7JDua2yYEv2X8edmcEgBMRg/formResponse"
        submitText={"Order"}
        fields={[
          {
            id: "entry.1827176469",
            name: "name",
            label: "Your name",
          },
          {
            id: "entry.1953116764",
            name: "contact",
            label: "Phone number",
          },
          {
            id: "entry.1438723422",
            name: "product",
            hidden: true,
          },
        ]}
        submittedText="Product purchased. "
        overrides={[["entry.1438723422", () => name]]}
      />
    </div>
  );
};
export default Product;
