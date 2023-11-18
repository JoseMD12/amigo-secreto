import React from "react";
import * as S from "./style";

const BackgroundCard = ({ children, icon }) => {
    return (
        <>
            <S.Container>
                <S.BackgroundCard>{children}</S.BackgroundCard>
            </S.Container>
        </>
    );
};

export default BackgroundCard;
