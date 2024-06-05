import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  idTemplate : 'vewwwrrrerere',
  nameTemplate: "Plantilla de prueba 2 noche",
  isNew : true,
  xmlBase64 : ""
}

export const templateSlice = createSlice({
  name: 'template',
  initialState : initialState,
  reducers: {
    setNewTemplate : (state, action) => {
        state.idTemplate = action.payload.idTemplate;
        state.isNew = action.payload.isNew;
        state.name = action.payload.name;
        state.xmlBase64 = action.xmlBase64;
    },
    unsetTemplate : (state) => {
        state.idTemplate = 0;
        state.isNew = false;
        state.name = "";
        state.xmlBase64 = "";
    }
  },
})

// Action creators are generated for each case reducer function
export const { setNewTemplate, unsetTemplate } = templateSlice.actions

export default templateSlice.reducer