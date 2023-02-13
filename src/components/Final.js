import React, { useState, Fragment } from "react";
import Form from "./Tableinput";
import Table from "./Tabledata";
function Final() {
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    name: "",
    price: "",
 
  });
  const onValChange = (event) => {
    const value = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    setFormObject(value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const checkVal = !Object.values(formObject).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, formObject];
      setTableData(dataObj);
      const isEmpty = { name: "", price: "" };
      setFormObject(isEmpty);
    }
  };
  return (
    <Fragment>
      <Form
        onValChange={onValChange}
        formObject={formObject}
        onFormSubmit={onFormSubmit}
      />
      <Table tableData={tableData} />
    </Fragment>
  );
}
export default Final;