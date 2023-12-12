import React, { useEffect, useState } from "react";
import BackgroundCard from "../../components/BackgroundCard";
import * as S from "./style";
import history from "../../history";
import { arrow } from "../../styles/arrow";
import { Dropdown, Button, Space, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ReactComponent as Gift } from "../../assets/gift.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import Suggestion from "../../components/Suggestion";
import { getParticipants } from "../../services/getParticipants";

const Suggestions = () => {
    const [loading, setLoading] = useState(true);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        (async () => {
            const participants = await getParticipants();
            if (participants) {
                setParticipants(participants);
            }

            console.log(participants);

            setLoading(false);
        })();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

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
                        <S.Label>Suggestões de Presente</S.Label>

                        <S.SuggestionsContainer>
                            {participants.map((participant) => (
                                <>
                                    <Suggestion
                                        title={participant.name}
                                        items={[
                                            {
                                                key: 1,
                                                label: participant.giftSuggestion1,
                                            },
                                            {
                                                key: 2,
                                                label: participant.giftSuggestion2,
                                            },
                                            {
                                                key: 3,
                                                label: participant.giftSuggestion3,
                                            },
                                        ]}
                                    />
                                </>
                            ))}
                        </S.SuggestionsContainer>
                    </S.Content>
                </S.Container>
            </BackgroundCard>
        </>
    );
};

export default Suggestions;
