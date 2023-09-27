import React, { useState } from "react";

export const Form = (props) => {
  const { fields, onSubmit } = { ...props };
  const [form, setForm] = useState(fields);

  const handleChange = (event) => {
    const value = event.target.value;
    setForm({
      ...form,
      [event.target.id]: value
    });
    console.log("######", value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={onSubmit}>
      {Object.keys(fields).map((keyname) => {
        return (
          <div>
            <label htmlFor={keyname}>{keyname}</label>
            <input
              type="text"
              className="form-control"
              id={keyname}
              value={form[keyname] || ""}
              onChange={handleChange}
            />
          </div>
        );
      })}
      <div
        className="form-group"
        style={{
          padding: "2px",
          margin: "10px"
        }}
      >
        <button className="form-control btn btn-primary" type="submit">
          Speichern
        </button>
      </div>
    </form>
  );
};
export default Form;
