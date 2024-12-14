import { createSlice } from '@reduxjs/toolkit';

export const family = createSlice({
    name: 'family',
    initialState: {
        family: [],
    },
    reducers: {
        setAddFamilyMember: (state, action) => {
            state.family = [...state.family, {
                familyMember: "",
                firstName: "",
                lastName: "",
                middleName: "",
                dateOfBirth: "",
                photograph: "",
            }];
        },
        setRemoveFamilyMember: (state, action) => {
            state.family = state.family.filter((_, index) => index !== action.payload);
        },
        setFamilyMember: (state, action) => {
            state.family[action.payload.index].familyMember = action.payload.item;
        },
        setFirstNameFamily: (state, action) => {
            state.family[action.payload.index].firstName = action.payload.item;
        },
        setLastNameFamily: (state, action) => {
            state.family[action.payload.index].lastName = action.payload.item;
        },
        setMiddleNameFamily: (state, action) => {
            state.family[action.payload.index].middleName = action.payload.item;
        },
        setDateOfBirthFamily: (state, action) => {
            state.family[action.payload.index].dateOfBirth = action.payload.item;
        },
        setPhotographFamily: (state, action) => {
            state.family[action.payload.index].photograph = action.payload;
        },
    },
});


export const {
    setAddFamilyMember,
    setRemoveFamilyMember,
    setFamilyMember,
    setFirstNameFamily,
    setLastNameFamily,
    setMiddleNameFamily,
    setDateOfBirthFamily,
    setPhotographFamily,
} = family.actions;


export default family.reducer;
