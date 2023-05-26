import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 5px 10px;
    max-width: 1400px;
`
export const Image = styled.img`
    width: 250px;
`
export const MovieInfo = styled.div`
    padding: 10px 20px;
`
export const ContainerMovieInfo = styled.div`
    padding-left: 10px;
    padding-top: 10px;
`
export const GoBack = styled.p`
    border: 1px solid orangered;
    border-radius: 3px;
    height: 20px;
    width: 100px;
    padding: 2px 5px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        background-color: orangered;
        color: white;
    }
`

export const GenresList = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    margin-top: 20px;
`

export const MovieTitle = styled.h2`
    margin-bottom: 20px;
`
export const UserScore = styled.p`
    margin-bottom: 30px;
`
export const OverviewTitle = styled.h3`
    margin-bottom: 20px;
`
export const MovieOverview = styled.p`
    margin-bottom: 30px;
`

export const InformationContainer = styled.div`
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    font-size: 18px;
    line-height: 1.2;
    padding: 5px 10px;
`
export const InformationList = styled.div`
    display: grid;
    margin: 10px;
    gap: 10px;
`
export const InformationListItem = styled.p`
    font-size: 16px;
    line-height: 1.2;
    color: black;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
        color: orangered;
    }
`
