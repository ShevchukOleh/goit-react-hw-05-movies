import styled from "styled-components";

export const Container = styled.div`
    max-width: 1400px;
    padding: 10px 10px;
`
export const List = styled.ul`
    flex-wrap: wrap;
    display: flex;
    gap: 20px;
    justify-content: center;
`
export const ListItem = styled.li`
    border: 1px solid grey;
    border-radius: 3px;
    width: 250px;
`
export const Image = styled.img`
    width: 250px;
    height: 375px;
`
export const ActorName = styled.h3`
    display: flex;
    font-size: 18px;
    line-height: 1.2;
    justify-content: center;
    padding: 0 5px;
    margin-top: 5px;
`
export const Character = styled.p`
    display: flex;
    justify-content: center;
    font-size: 16px;
    line-height: 1.2;
    padding: 0 5px;
    padding-bottom: 5px;
`