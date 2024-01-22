import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Sidebar = ({ onFilterChange }) => {

  const handleButtonClick = (filter) => {
    onFilterChange(filter);
  };

  return (
    <>
      <DropdownButton
        id="dropdown-basic-button"
        title="Tax Options"
        variant="outline-secondary"
        sx={{
          fontSize: 5,
          position: "fixed",
          top: 10,
          left: 15,
          zIndex: 100000,
        }}
      >
        <Dropdown.Item onClick={() => handleButtonClick("unpaidGarbageTax")}>
          Garbage Tax
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleButtonClick("unpaidWaterTax")}>
          Water Tax
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleButtonClick("unpaidLandTax")}>
          property Tax
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default Sidebar;
