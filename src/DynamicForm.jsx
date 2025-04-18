import React, { useState } from "react";
import { validateField } from "./validators";
import "./DynamicForm.css";

const DynamicForm = ({ formJson }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e, field) => {
    const value = field.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [field.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    formJson.fields.forEach((field) => {
      const error = validateField(field, formData[field.name]);
      if (error) newErrors[field.name] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="form-wrapper">
      <h2>{formJson.title}</h2>
      <form onSubmit={handleSubmit}>
        {formJson.fields.map((field) => (
          <div key={field.name} className="form-group">
            <label>
              {field.label}{field.required && '*'}
            </label>

            {field.type === "radio" ? (
              field.options.map((option) => (
                <label key={option} className="radio-option">
                  <input
                    type="radio"
                    name={field.name}
                    value={option}
                    checked={formData[field.name] === option}
                    onChange={(e) => handleChange(e, field)}
                  />
                  {option}
                </label>
              ))
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={field.type === "checkbox" ? undefined : formData[field.name] || ""}
                checked={field.type === "checkbox" ? formData[field.name] || false : undefined}
                onChange={(e) => handleChange(e, field)}
              />
            )}

            {errors[field.name] && (
              <p className="error-text">{errors[field.name]}</p>
            )}
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;