import React, { useEffect, useState } from "react";
import BackgroundCard from "../../components/BackgroundCard";
import * as S from "./style";
import history from "../../history";
import { arrow } from "../../styles/arrow";
import { Button } from "antd";
import { ReactComponent as Chimney } from "../../assets/chimney.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const Accept = () => {
    useEffect(() => {}, []);

    return (
        <>
            <BackgroundCard>
                <S.Container>
                    <Arrow
                        style={{
                            ...arrow,
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            history.goBack();
                        }}
                    />
                    <Chimney style={S.ChimneyImage} />
                    <S.Content>
                        <S.TextContainer>
                            <S.Title>Regras</S.Title>
                            <S.SubTitle>
                                Ao clicar em{" "}
                                <strong style={{ color: "#FF5539" }}>
                                    ACEITO
                                </strong>{" "}
                                você concorda em seguir as regras:
                            </S.SubTitle>

                            <S.Text>
                                1. Não pode desistir ou sair do amigo secreto;
                                <br />
                                <br />
                                <strong style={{ color: "#FF5539" }}>
                                    2. Não é possível trocar o amigo sorteado;
                                </strong>
                                <br />
                                <br />
                                3. As famílias não podem se tirar.
                            </S.Text>
                        </S.TextContainer>

                        <Button
                            type='primary'
                            style={{
                                ...S.Button,
                                height: "13vh",
                                marginTop: "5vh",
                            }}
                            onClick={() => {
                                history.push("/who-you-are");
                            }}
                        >
                            ACEITO TUDO
                        </Button>
                    </S.Content>
                </S.Container>
            </BackgroundCard>
        </>
    );
};

export default Accept;
