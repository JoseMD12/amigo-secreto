import React, { useEffect, useState } from "react";
import BackgroundCard from "../../components/BackgroundCard";
import * as S from "./style";
import history from "../../history";
import { arrow } from "../../styles/arrow";
import { Button } from "antd";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { withRouter } from "react-router-dom";
import { getParticipants } from "../../services/getParticipants";
import { drawnParticipant } from "../../services/drawnParticipant";

const Drawn = (props) => {
    const { match } = props;
    const { name } = match.params;

    const [loading, setLoading] = useState(true);

    const [shownName, setShownName] = useState("");
    const [participants, setParticipants] = useState([]);
    const [loadingList, setLoadingList] = useState(true);
    const [loadingDrawn, setLoadingDrawn] = useState(true);
    const [drawnedParticipant, setDrawnedParticipant] = useState("");

    useEffect(() => {
        (async () => {
            const participantsData = await getParticipants();

            if (participantsData) {
                setParticipants(participantsData);
            }

            setLoadingList(false);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const participant = await drawnParticipant(name);
                if (participant) {
                    setDrawnedParticipant(participant.name);
                }

                setLoadingDrawn(false);
            } catch (error) {
                alert("Você já sorteou seu amigo secreto!");
                history.push("/");
            }
        })();
    }, [name]);

    useEffect(() => {
        for (let i = 0; i < participants.length * 2; i++) {
            setTimeout(() => {
                const element = participants[i % participants.length];
                setShownName(element.name);
            }, 100 * i);
        }

        setTimeout(() => {
            console.log(drawnedParticipant);
            setShownName(drawnedParticipant);
        }, participants.length * 2 * 100 + 100);
    }, [drawnedParticipant, participants]);

    // useEffect(() => {
    //     if (!loading) {
    //         setShownName(drawnedParticipant);
    //     }
    // }, [drawnedParticipant, loading]);

    if (loadingDrawn || loadingList) return <div>Carregando...</div>;

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
                                {shownName}
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

export default withRouter(Drawn);
