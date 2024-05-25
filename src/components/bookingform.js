import React, { useState } from 'react';


const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const invalidDateErrorMessage = 'Please choose a valid date';
    const invalidTimeErrorMessage = 'Please choose a valid time';
    const invalidOccasionErrorMessage = 'Please choose a valid occasion';
    const invalidNumberOfGuestsErrorMessage =
        'Please enter a number between 1 and 10';
    const isDateValid = () => date !== '';
    const isTimeValid = () => times !== '';
    const isNumberOfGuestsValid = () => guests !== '';
    const isOccasionValid = () => occasion !== '';
    const areAllFieldsValid = () => { isDateValid() && isTimeValid() && isNumberOfGuestsValid() && isOccasionValid(); }


    const hundleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e)
    }

    return (
        <header>
            <section>
                <form onSubmit={hundleSubmit}>
                    <fieldset>
                        <FormField
                            label="Date:"
                            htmlFor="booking-date"
                            hasError={!isDateValid()}
                            errorMessage={invalidDateErrorMessage}
                        ></FormField>
                        <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)}
                            type='date' required />
                        <FormField
                            label="Time:"
                            htmlFor="booking-time"
                            hasError={!isTimeValid()}
                            errorMessage={invalidTimeErrorMessage}
                        >
                            <select id="book-time" value={times} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select a Time</option>
                                {props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })}

                            </select>
                        </FormField>
                        <FormField
                            label="Number of guests"
                            htmlFor="booking-number-guests"
                            hasError={!isNumberOfGuestsValid()}
                            errorMessage={invalidNumberOfGuestsErrorMessage}
                        >
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.
                                value)} />
                        </FormField>
                        <FormField
                            label="Occasion"
                            htmlFor="booking-occasion"
                            hasError={!isOccasionValid()}
                            errorMessage={invalidOccasionErrorMessage}
                        >
                            <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion
                                (e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </FormField>
                        <button
                            type="submit"
                            disabled={!areAllFieldsValid()}
                        >
                            <input className='inputmake' aria-label='On Click' type='submit' value={"Make Your Reservation"} />
                        </button>
                    </fieldset>


                </form>
            </section>
        </header >
    );

};
export default BookingForm;


const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
    return (
        <div className="form-field">
            <label htmlFor={htmlFor}>{label}</label>
            {children}
            {hasError && errorMessage ?
                <p data-testid="error-message">{errorMessage}</p> : null}
        </div>
    );
};

