/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("renders the footer content correctly", () => {
  const { getByText, getByAltText } = render(<Footer />);
  const smallLogo = getByAltText("small_logo");
  const documentNavHeader = getByText("Document Navigation");
  const contactHeader = getByText("Contact");
  const socialMediaHeader = getByText("Social Media Links");

  expect(smallLogo).toBeInTheDocument();
  expect(documentNavHeader).toBeInTheDocument();
  expect(contactHeader).toBeInTheDocument();
  expect(socialMediaHeader).toBeInTheDocument();
});