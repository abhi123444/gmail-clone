import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name:"mail",
  initialState:{
    selectedMail:null,
    isOpenMail:false,
  },
  reducers:{
    SelectMail:(state,action) =>{
      state.selectedMail = action.payload;
    },
    OpenMail:(state)=>{
      state.isOpenMail = true;
    },
    CloseMail:(state)=>{
      state.isOpenMail = false;
    },
  },
});


export const {OpenMail,CloseMail,SelectMail} = mailSlice.actions;
export const MailSelected = (state) => state.mail.selectedMail;
export const MailisOpen = (state) => state.mail.isOpenMail;
export default mailSlice.reducer;