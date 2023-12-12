import React from "react";
import * as S from "./style";

const Suggestion = ({ title, items }) => {
    return (
        <>
            <S.Label>{title}</S.Label>
            {items.map((item, index) => (
                <>
                    <S.Text key={item.key}>
                        {index +
                            1 +
                            ". " +
                            (item.label ? item.label : "Por enquanto nada")}
                    </S.Text>
                </>
            ))}
            <S.HorizontalLine />
        </>
    );
};

export default Suggestion;
