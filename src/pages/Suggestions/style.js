import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    height: 100%;
    width: 100%;
`;

export const Content = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    width: 70%;
`;

export const Label = styled.h1`
    margin-top: 2vh;
    font-size: 2rem;
    font-weight: normal;
    font-family: "Kavoon", cursive;
`;

export const Text = {
    fontSize: "1.3rem",
    fontWeight: "400",
    fontFamily: "Koh Santepheap, sans-serif",
    justifyContent: "left",
    textAlign: "left",
    maxWidth: "40vw",
    marginTop: "-2vh",
};

export const SuggestionsContainer = styled.div`
    margin-top: 8vh;
    display: flex;
    align-items: flex-start;
    justify-content: left;
    flex-direction: column;
    gap: 16px;
    position: relative;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
`;

export const Button = {
    width: "30vw",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Koh Santepheap, sans-serif",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    borderRadius: "15px",
    color: "white",
    backgroundColor: "#FF5539",
};
