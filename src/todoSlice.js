import {createSlice} from "@reduxjs/toolkit"

const persistedData = localStorage.getItem("mytodos");
const tasks = persistedData ? JSON.parse(persistedData) : [];

const todoSlice = createSlice({
    name : 'todoSlice',
    initialState : {
        todoData : tasks,
        newTask : ''
    },
    reducers:{
        addTodo(state,action){
            if(action.payload === '') return;
            const prevData = [...state.todoData];
            const newData = {task:action.payload, id: Math.random(0,1000).toString(), isDone:false};
            prevData.push(newData);
            state.todoData = prevData;
            localStorage.setItem("mytodos",JSON.stringify(prevData))
        },

        deleteData(state,action){
            console.log(action.payload);
            const id = action.payload;
            const data = [...state.todoData];
            const finalData = data.filter((ele)=> ele.id != id);
            state.todoData = finalData;
            localStorage.setItem("mytodos",JSON.stringify(finalData))
        },

        doComplete(state,action) {
            const id = action.payload;
            const data = [...state.todoData];
            const index = data.findIndex((ele)=>ele.id == id)
            const obj = data[index];
            obj.isDone = true;
            data[index] = obj;
            state.todoData = data
            localStorage.setItem("mytodos",JSON.stringify(data))
        }
    }
})

export const {deleteData,addTodo,doComplete} = todoSlice.actions;
export default todoSlice.reducer;