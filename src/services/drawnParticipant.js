import api from "../api";

const drawnParticipant = async (currentName) => {
    const response = await api.get("/participant/drawn/" + currentName);
    console.log(response);
    return response.data;
};

export { drawnParticipant };
