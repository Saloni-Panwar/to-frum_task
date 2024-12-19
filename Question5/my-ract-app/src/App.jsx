import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const FormUI = () => {
  const [value, setValue] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const increaseValue = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decreaseValue = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit(onSubmit)} className="row g-4">
        {/* Normal Input */}
        <div className="col-md-6">
          <label className="form-label">Normal</label>
          <input
            type="text"
            className="form-control"
            placeholder="Placeholder text"
          />
        </div>

        {/* Focus Input */}
        <div className="col-md-6">
          <label className="form-label">Focus</label>
          <input
            type="text"
            className="form-control"
            placeholder="Placeholder text"
            autoFocus
          />
        </div>

        {/* Active Input */}
        <div className="col-md-6">
          <label className="form-label">Active</label>
          <input
            type="text"
            className="form-control"
            defaultValue="UI"
          />
        </div>

        {/* Error Input */}
        <div className="col-md-6">
          <label className="form-label">Error</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Placeholder text"
            {...register("email", {
              required: "Please provide a valid email address",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        {/* Date Picker */}
        <div className="col-md-6">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" />
        </div>

        {/* Value Input */}
        <div className="col-md-6">
          <label className="form-label">Value</label>
          <div className="input-group">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={decreaseValue}
            >
              -
            </button>
            <input
              type="number"
              className="form-control text-center"
              value={value}
              readOnly
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={increaseValue}
            >
              +
            </button>
          </div>
        </div>

        {/* Autocomplete */}
        <div className="col-md-6">
          <label className="form-label">Autocomplete</label>
          <div className="dropdown">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              data-bs-toggle="dropdown"
            />
            <ul className="dropdown-menu">
              <li><a href="#" className="dropdown-item">UI Design</a></li>
              <li><a href="#" className="dropdown-item">UI Design Practice</a></li>
              <li><a href="#" className="dropdown-item">UI Pattern</a></li>
              <li><a href="#" className="dropdown-item">Daily UI</a></li>
            </ul>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUI;
