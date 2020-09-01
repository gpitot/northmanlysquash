import React from "react";
import Select, { components } from "@atlaskit/select";
import "./style.scss";

const Group = (props) => (
  <div>
    <components.Group {...props} />
  </div>
);

const Availability = (props) => {
  const handleChange = (arr) => {
    const value = arr.map(({ value }) => value).join(", ");
    props.handleChange({
      target: {
        name: props.name,
        value,
      },
    });
  };
  return (
    <Select
      className="availability-select"
      options={props.options}
      isMulti
      isSearchable={true}
      placeholder="Select availability"
      components={{ Group }}
      onChange={handleChange}
    />
  );
};

export default Availability;
