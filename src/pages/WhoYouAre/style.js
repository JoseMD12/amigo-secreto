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
    height: 100vh;
    width: 50%;
`;

export const GiftImage = {
    position: "absolute",
    left: "0",
    top: "0",
    marginTop: "50vh",
    marginLeft: "70vw",
    height: "50vh",
};

export const FormContainer = styled.div`
    display: inline-block;
    align-items: center;
    justify-content: left;
    flex-direction: column;
    gap: 8vh;
    width: 90vw;
    height: 80vh;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: left;
    flex-direction: column;
    gap: 8vh;
    width: 100%;
    margin-top: 5vh;
    margin-left: 3vw;
`;

export const Label = styled.h1`
    font-size: 2rem;
    font-weight: normal;
    font-family: "Kavoon", cursive;
`;

export const Text = {
    fontSize: "1rem",
    fontWeight: "400",
    fontFamily: "Koh Santepheap, sans-serif",
    justifyContent: "left",
    textAlign: "left",
    maxWidth: "40vw",
    marginTop: "-2vh",
};

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
