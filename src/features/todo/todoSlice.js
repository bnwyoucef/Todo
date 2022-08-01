import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Api/Axios";

const initialState = {
  todoList: [],
  status: "idle",
  error: null,
};

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await axios.get("/todo/all");
  return response.data;
});

export const postNewTask = createAsyncThunk(
  "todo/postNewTask",
  async (newTask) => {
    const response = await axios.post("todo/create", newTask);
    return response.data;
  }
);

export const deleteTask = createAsyncThunk("todo/deleteTask", async (obj) => {
  const response = await axios.post("todo/delete", obj, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.todoList = state.todoList.concat(action.payload);
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(postNewTask.fulfilled, (state, action) => {
        state.todoList.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.todoList = state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        );
      });
  },
});

export const { addNewTask } = todoSlice.actions;

export default todoSlice.reducer;
