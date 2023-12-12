import api from "../api";

export const getParticipants = async () => {
    try {
        const {data} = await api.get("/participant/list");
        console.log(data);

        return data
    } catch (error) {
        throw new Error("Você já sorteou seu amigo secreto!");
        // alert("Você já sorteou seu amigo secreto!");
        // history.push("/");
    }
};