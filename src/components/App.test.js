import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('Renders the Header heading', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = []

})

import BookingForm from './BookingForm';

describe('BookingForm', () => {

  it('renders the booking form', () => {
    render(<BookingForm />);

    expect(screen.getByLabelText('Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Time')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('submits the form successfully', () => {
    render(<BookingForm />);


    const dateInput = screen.getByLabelText('Date');
    const timeInput = screen.getByLabelText('Time');

    fireEvent.change(dateInput, { target: { value: '2024-01-01' } });
    fireEvent.change(timeInput, { target: { value: '18:00' } });

    fireEvent.submit(screen.getByTestId('booking-form'));

    expect(screen.getByText('Form submitted!')).toBeInTheDocument();
  });
});