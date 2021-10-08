import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sendMessageIsOpen: false ,
    selectedmail: null 
};

export const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        selectMail: (state , action) => {
            state.selectedmail = action.payload
        },
        openSendMessage: (state) => {
            state.sendMessageIsOpen = true ;
        },
        closeSendMessage: (state) => {
            state.sendMessageIsOpen = false ; 
        }
    }
});

export const { openSendMessage , closeSendMessage , selectMail } = mailSlice.actions ;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen ;

export const selectOpenMail = (state) => state.mail.selectedmail ;

export default mailSlice.reducer ;

