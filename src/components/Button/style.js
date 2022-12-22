import styled from 'styled-components'

export const Button = styled.button `
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #FFFFFF;
    width: 342px;
    height: 68px;
    background: ${ props => props.isColor ? 'rgba(255, 255, 255, 0.14)' : '#D93856' };
    border-radius: 14px;
    border: none;
    cursor: pointer;
    gap: 24px;
    margin-top: ${ props => props.isColor ? '85px' : '75px' };

    &:hover {
        opacity: 0.70;
    }

    &:active {
        opacity: 0.65;
}
`