// Importing the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Importing reducers from different slices
import payment from './payment'; // Payment slice reducer
import address from './address'; // Address slice reducer
import personalDetails from './personalDetails'; // Personal details slice reducer
import family from './family';

// Configuring the Redux store
export const store = configureStore({
    reducer: {
        // Combining the reducers to form the root reducer
        payment: payment, // Payment state management
        address: address, // Address state management
        personalDetails: personalDetails, // Personal details state management
        family: family, // Family state management

    },
});
