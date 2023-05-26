import styled from "styled-components";

export const Container = styled.div`
    padding: 5px 10px;
    max-width: 1400px;
    display: flex;
    justify-content: center;
`

export const ListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`
export const Title =styled.h2`
    font-size: 18px;
    line-height: 1.2;
    margin-bottom: 5px;
`
export const Text =styled.p`
    font-size: 14px;
    line-height: 1.2;
    padding-left: 12px;
`