import React, { useEffect, useMemo, useState } from "react";
import BackgroundCard from "../../components/BackgroundCard";
import * as S from "./style";
import history from "../../history";
import { arrow } from "../../styles/arrow";
import { Dropdown, Button, Space, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ReactComponent as Gift } from "../../assets/gift.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import api from "../../api";
import { getParticipants } from "../../services/getParticipants";

const WhoYouAre = () => {
    const [name, setName] = useState("");
    const [giftSuggestion1, setSuggestion1] = useState("");
    const [giftSuggestion2, setSuggestion2] = useState("");
    const [giftSuggestion3, setSuggestion3] = useState("");
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(true);

    const [isDisable, setIsDisable] = useState(true);
    const [ButtonColor, setButtonColor] = useState("#B6B6B6");

    console.log("render");

    useEffect(() => {
        (async () => {
            const participantsData = await getParticipants();

            if (participantsData) {
                setParticipants(participantsData);
            }

            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (giftSuggestion1.length > 0 && name.length > 0) {
            setIsDisable(false);
            setButtonColor("#FF5539");
        } else {
            setIsDisable(true);
            setButtonColor("#B6B6B6");
        }
    }, [giftSuggestion1, name]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    const onClick = ({ key }) => {
        setName(items.find((item) => item.key === key).label);
        participants.map((participant) => {
            if (participant.id === key) {
                setSuggestion1(participant.giftSuggestion1 ?? "");
                setSuggestion2(participant.giftSuggestion2 ?? "");
                setSuggestion3(participant.giftSuggestion3 ?? "");
            }
        });
    };

    const items = participants.map((participant) => {
        return {
            label: participant.name,
            key: participant.id,
        };
    });

    const handleClick = () => {
        api.post("/participant/suggestion", {
            name,
            giftSuggestion1,
            giftSuggestion2,
            giftSuggestion3,
        });
        history.push("/drawn/" + name);
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
                                <Dropdown
                                    menu={{
                                        items,
                                        onClick,
                                        style: S.DropdownMenu,
                                    }}
                                    overlayStyle={{
                                        ...S.DropdownOverlay,
                                        overflowY: "scroll",
                                        overflowX: "scroll",
                                    }}
                                    // autoAdjustOverflow={true}
                                >
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
                                    value={giftSuggestion1}
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
                                    value={giftSuggestion2}
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
                                    value={giftSuggestion3}
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
