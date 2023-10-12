/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom';
import React from "react";
import { render } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
    const mockProps = {
        submitForm: jest.fn(), 
        availableTimes: { availableTimes: ["12:00 PM", "1:00 PM"] }, 
      };
  it("renders the BookingForm component correctly", () => {
    const { getByText, getByLabelText } = render(<BookingForm {...mockProps}/>);
    
    expect(getByText("Choose Date")).toBeInTheDocument();
    expect(getByLabelText("Choose Time")).toBeInTheDocument();
  });
});