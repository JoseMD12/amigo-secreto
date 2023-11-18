import React, { useEffect, useState } from "react";
import BackgroundCard from "../../components/BackgroundCard";
import * as S from "./style";
import history from "../../history";
import { arrow } from "../../styles/arrow";
import { Dropdown, Button, Space, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ReactComponent as Gift } from "../../assets/gift.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

const WhoYouAre = () => {
    const [name, setName] = useState("");
    const [suggestion1, setSuggestion1] = useState("");
    const [suggestion2, setSuggestion2] = useState("");
    const [suggestion3, setSuggestion3] = useState("");

    const [isDisable, setIsDisable] = useState(true);
    const [ButtonColor, setButtonColor] = useState("#B6B6B6");
    useEffect(() => {}, []);

    const onClick = ({ key }) => {
        setName(items.find((item) => item.key === key).label);
    };

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

    useEffect(() => {
        if (suggestion1.length > 0 && name.length > 0) {
            setIsDisable(false);
            setButtonColor("#FF5539");
        } else {
            setIsDisable(true);
            setButtonColor("#B6B6B6");
        }
    }, [suggestion1, name]);

    const handleClick = () => {
        history.push("/sort");
    };

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
                    <Gift style={S.GiftImage} />
                    <S.Content>
                        <S.FormContainer>
                            <S.InputContainer>
                                <S.Label>Quem é você?</S.Label>
                                <Dropdown menu={{ items, onClick }}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space style={S.Text}>
                                            {name || "Selecione seu nome"}
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </S.InputContainer>

                            <S.InputContainer>
                                <S.Label>Sugestão de Presente</S.Label>
                                <Input
                                    placeholder='Sugestão 1'
                                    maxLength={50}
                                    style={{
                                        ...S.Text,
                                        width: "70%",
                                        marginTop: "-5vh",
                                        padding: "2vh",
                                    }}
                                    required={true}
                                    value={suggestion1}
                                    onChange={(e) =>
                                        setSuggestion1(e.target.value)
                                    }
                                />

                                <Input
                                    placeholder='Sugestão 2'
                                    maxLength={50}
                                    style={{
                                        ...S.Text,
                                        width: "70%",
                                        marginTop: "-5vh",
                                        padding: "2vh",
                                    }}
                                    onChange={(e) =>
                                        setSuggestion2(e.target.value)
                                    }
                                />

                                <Input
                                    placeholder='Sugestão 3'
                                    maxLength={50}
                                    style={{
                                        ...S.Text,
                                        width: "70%",
                                        marginTop: "-5vh",
                                        padding: "2vh",
                                    }}
                                    onChange={(e) =>
                                        setSuggestion3(e.target.value)
                                    }
                                    showCount={true}
                                />
                            </S.InputContainer>
                        </S.FormContainer>

                        <div
                            style={{
                                position: "absolute",
                                top: "0",
                                right: "0",
                                marginTop: "15vh",
                                marginRight: "5vw",
                            }}
                        >
                            <Button
                                type='primary'
                                disabled={isDisable}
                                style={{
                                    ...S.Button,
                                    height: "13vh",
                                    marginTop: "5vh",
                                    backgroundColor: ButtonColor,
                                }}
                                onClick={() => {
                                    handleClick();
                                }}
                            >
                                Sortear
                            </Button>
                        </div>
                    </S.Content>
                </S.Container>
            </BackgroundCard>
        </>
    );
};

export default WhoYouAre;
