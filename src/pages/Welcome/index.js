import React, { useEffect, useState } from "react";
import BackgroundCard from "../../components/BackgroundCard";
import { ReactComponent as Xmas } from "../../assets/christmas.svg";
import * as S from "./style";
import { Button } from "antd";
import history from "../../history";

const Welcome = () => {
    useEffect(() => {}, []);

    return (
        <>
            <BackgroundCard>
                <S.Container>
                    <S.Content>
                        <Xmas style={S.XmasImage} />
                    </S.Content>
                    <S.Content>
                        <S.TextContainer>
                            <S.Title>Amigo Secreto</S.Title>

                            <S.SubTitle>Bora Trocar Presentes!!</S.SubTitle>
                        </S.TextContainer>
                        <S.Text>
                            É só selecionar teu nome, escrever o que tu quer
                            ganhar e sortear!!
                        </S.Text>
                        <Button
                            type='primary'
                            style={{
                                ...S.Button,
                                height: "13vh",
                                marginTop: "5vh",
                            }}
                            onClick={() => history.push("/accept")}
                        >
                            QUERO PARTICIPAR
                        </Button>
                        <Button
                            type='primary'
                            style={{
                                ...S.Button,
                                height: "8vh",
                                marginTop: "1.5vh",
                            }}
                            onClick={() => history.push("/suggestions")}
                        >
                            VER PRESENTES SUGERIDOS
                        </Button>
                    </S.Content>
                </S.Container>
            </BackgroundCard>
        </>
    );
};

export default Welcome;
