import React from "react";
import { render } from "@testing-library/react";
import ConfirmedBooking from "./ConfirmedBooking";

test("renders the confirmed booking message", () => {
  const { getByText } = render(<ConfirmedBooking />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const message = getByText("Booking has been confirmed!");
  expect(message).toBeInTheDocument();
});