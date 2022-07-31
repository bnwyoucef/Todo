import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    title: "initiale todo",
    description: "inistiale todo for testing purpose",
  },
  {
    id: 1,
    title: "second todo",
    description: "second todo for testing purpose",
  },
  {
    id: 2,
    title: "third todo",
    description: "third todo for testing purpose",
  },
  {
    id: 3,
    title: "Forth todo",
    description: "Forth todo for testing purpose",
  },
  {
    id: 4,
    title: "Forth todo",
    description: "Forth todo for testing purpose",
  },
  {
    id: 5,
    title: "Forth todo",
    description: "Forth todo for testing purpose",
  },
  {
    id: 6,
    title: "Forth todo",
    description: "Forth todo for testing purpose",
  },
  {
    id: 7,
    title: "Forth todo",
    description: "Forth todo for testing purpose",
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducer: {},
});

export default todoSlice.reducer;
