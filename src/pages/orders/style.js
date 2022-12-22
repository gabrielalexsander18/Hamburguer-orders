import styled from 'styled-components'


export const Image = styled.img`
    margin-top: 5px;
`

export const Order = styled.li`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    margin-bottom: 18px;
    padding-left: 25px;
    padding-top: 17px;

    .pedido {
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        width: 219px;
        
    }
    
    .nome {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        display: flex;
        align-items: flex-start;
        flex-flow: row wrap;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        margin-right: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`
