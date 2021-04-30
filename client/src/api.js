import axios from "axios";

export default {
    addTodo: data => {

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