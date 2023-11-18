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

export const ChimneyImage = {
    position: "absolute",
    left: "-3vw",
    top: "0",
    marginTop: "41vh",
    height: "60vh",
};

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: normal;
    font-family: "Kavoon", cursive;
`;

export const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Koh Santepheap", sans-serif;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8vh;
`;

export const Text = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Koh Santepheap", sans-serif;
    justify-content: left;
    text-align: left;
    max-width: 40vw;
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
