import axios from "axios";

export default {
    addTodo: content => {
        return axios.post("/api/add", {content: content});
    },
    deleteTodo: id => {

    },
    editTodo: content => {

    },
    completeTodo: id => {

    },
    allTodos: () => {
        return axios.post("/api/all");
    }
}