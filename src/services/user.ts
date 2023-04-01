import apiCall from "../utils/axois";

const getAllUsers = () => apiCall("GET", "/users");
const getSingleUser = (id: string) => apiCall("GET", `/users/${id}`);

export { getAllUsers, getSingleUser };
