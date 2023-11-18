import React, { useEffect, useState } from "react";
import BackgroundCard from "../../components/BackgroundCard";
import * as S from "./style";
import history from "../../history";
import { arrow } from "../../styles/arrow";
import { Button } from "antd";
import { ReactComponent as Chimney } from "../../assets/chimney.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const Sort = () => {
    const [name, setName] = useState("José Dotta");

    const items = [
        {
            label: "Lisandra Martins",
            key: "1",
        },
        {
            label: "Elmo Dotta",
            key: "2",
        },
        {
            label: "José Dotta",
            key: "3",
        },
        {
            label: "Patrick Mello",
            key: "4",
        },
    ];

    const [currentNameIndex, setCurrentNameIndex] = useState(0);

    useEffect(() => {
        const animateNames = () => {
            setTimeout(() => {
                setCurrentNameIndex((prevIndex) => prevIndex + 1);
                setName(items[currentNameIndex % 4].label);
            }, 50);
        };

        if (currentNameIndex < items.length * 10) {
            animateNames();
        } else {
            const random = Math.floor(Math.random() * items.length);
            setName(items[random].label);
        }
    }, [currentNameIndex]);

    const currentName = items[currentNameIndex]?.label || "";

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
                    <S.Content>
                        <S.TextContainer>
                            <S.Title>Seu Amigo Secreto é:</S.Title>
                            <S.Title
                                style={{
                                    fontSize: "5rem",
                                    width: "100vw",
                                    textAlign: "center",
                                }}
                            >
                                {name}
                            </S.Title>

                            <S.Text>
                                Tira um print ou escreve o nome em algum lugar
                                pra não esquecer
                                <br />
                                <strong style={{ color: "#FF5539" }}>
                                    NÂO CONSIGO VER QUEM TIROU QUEM!
                                </strong>
                            </S.Text>
                        </S.TextContainer>

                        <Button
                            type='primary'
                            style={{
                                ...S.Button,
                                height: "8vh",
                                marginTop: "5vh",
                            }}
                            onClick={() => {
                                history.push("/suggestions");
                            }}
                        >
                            VER PRESENTES SUGERIDOS
                        </Button>
                    </S.Content>
                </S.Container>
            </BackgroundCard>
        </>
    );
};

export default Sort;
