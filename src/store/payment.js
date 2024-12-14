import { createSlice } from '@reduxjs/toolkit';

// Creating a slice for payment-related state management
export const payment = createSlice({
    name: 'payment', // Name of the slice
    initialState: {
        payment: {
            email: "",
            paymentMethod: "",
            cardInformation: "",
            mmYY: "",  // Expiration date in MM/YY format
            cvc: "",   // Card verification code
            country: "",
            cardholderName: "",
        },
    },
    reducers: {
        // Reducer to update the email
        setEmail: (state, action) => {
            state.payment.email = action.payload;
        },
        // Reducer to update the payment method
        setPaymentMethod: (state, action) => {
            state.payment.paymentMethod = action.payload;
        },
        // Reducer to update the card information
        setCardInformation: (state, action) => {
            state.payment.cardInformation = action.payload;
        },
        // Reducer to update the expiration date (MM/YY)
        setMMYY: (state, action) => {
            state.payment.mmYY = action.payload;
        },
        // Reducer to update the card verification code (CVC)
        setCVC: (state, action) => {
            state.payment.cvc = action.payload;
        },
        // Reducer to update the country
        setCountry: (state, action) => {
            state.payment.country = action.payload;
        },
        // Reducer to update the cardholder's name
        setCardholderName: (state, action) => {
            state.payment.cardholderName = action.payload;
        },
    },
});

// Exporting actions for dispatching updates
export const { 
    setEmail, 
    setPaymentMethod, 
    setCardInformation, 
    setMMYY, 
    setCVC, 
    setCountry, 
    setCardholderName 
} = payment.actions;

// Exporting the reducer to be used in the store
export default payment.reducer;
