import axios from "axios";

export default {
    addTodo: content => {
        return axios.post("/api/add", { content: content });
    },
    deleteTodo: id => {
        return axios.post("/api/delete", { id: id });
    },
    editTodo: (content, id) => {
        return axios.post("/api/edit", { content: content, id: id });
    },
    completeTodo: id => {
        return axios.post("/api/complete", { id: id });
    },
    allTodos: () => {
        return axios.post("/api/all");
    },
    clearAll: () => {
        return axios.post("/api/clear");
    }
}