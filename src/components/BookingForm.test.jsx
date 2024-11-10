import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import '@testing-library/jest-dom';

test("renders form inputs correctly", () => {
  render(<BookingForm availableTimes={{ availableTimes: ["17:00", "18:00"] }} dispatch={() => {}} submitForm={() => {}} />);

  // Check for date input
  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();

  // Check for time select
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toBeInTheDocument();
  expect(timeSelect.value).toBe(""); // Expect initial value to be an empty string

  // Check for guests input
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toBeInTheDocument();
  expect(guestsInput.value).toBe(""); // Expect initial value to be an empty string

  // Check for occasion select
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toBeInTheDocument();
  expect(occasionSelect.value).toBe(""); // Expect initial value to be an empty string
});

test("validates form input", () => {
  render(<BookingForm availableTimes={{ availableTimes: ["17:00", "18:00"] }} dispatch={() => {}} submitForm={() => {}} />);

  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: "2023-11-25" } });
  expect(dateInput.value).toBe("2023-11-25");

  const guestsInput = screen.getByLabelText(/number of guests/i);
  fireEvent.change(guestsInput, { target: { value: "5" } });
  expect(guestsInput.value).toBe("5");

  const occasionSelect = screen.getByLabelText(/occasion/i);
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });
  expect(occasionSelect.value).toBe("Birthday");

  const timeSelect = screen.getByLabelText(/choose time/i);
  fireEvent.change(timeSelect, { target: { value: "17:00" } });
  expect(timeSelect.value).toBe("17:00");
});

test("submits form", () => {
  const mockSubmitForm = jest.fn();
  render(<BookingForm availableTimes={{ availableTimes: ["17:00", "18:00"] }} dispatch={() => {}} submitForm={mockSubmitForm} />);

  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: "2023-11-25" } });

  const guestsInput = screen.getByLabelText(/number of guests/i);
  fireEvent.change(guestsInput, { target: { value: "5" } });

  const occasionSelect = screen.getByLabelText(/occasion/i);
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  const timeSelect = screen.getByLabelText(/choose time/i);
  fireEvent.change(timeSelect, { target: { value: "17:00" } });

  const submitButton = screen.getByRole('button', { name: /on click/i });
  fireEvent.click(submitButton);

  expect(mockSubmitForm).toHaveBeenCalled();
});
