import { css } from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import styled, { keyframes } from 'styled-components';
import { INotificationStyled } from './types';
import getNotificationTheme from './styles/themes';

const moveOpen = keyframes`
   from {
       transform: translate(0,-100px);
    }
  10% {transform: translate(0,20px);}
  12% {transform: translate(0,22px);}
  16% {transform: translate(0,20px);}
  to {transform: translate(0,20px);}
`;

const NotificationStyled = styled.div<INotificationStyled>`
    ${resetCSS}
    ${fonts.text}
    ${({ type }) => getNotificationTheme(type)}
    border-radius: 20px;
    color: ${color.white};
    display: flex;
    left: 18px;
    margin-bottom: 18px;
    max-width: 320px;
    padding: 16px 48px 16px 16px;
    /* position: fixed; */
    right: 18px;

    animation: ${moveOpen} 4s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    ${(props) =>
        !props.isVisible &&
        css`
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s 0.5s, opacity 0.5s ease-out;
        `}
`;

const TextContentStyled = styled.div`
    display: flex;
    margin-left: 10px;
    width: 100%;
    flex-wrap: wrap;
`;

const SpanStyled = styled.span`
    ${fonts.ibm}
    color: ${color.white};
    display: inline-block;
    word-break: break-word;
`;

const TitleStyled = styled.h5`
    ${fonts.h5};
    display: inline-block;
    font-weight: 700;
    line-height: 24px;
    margin: 0;
    word-break: break-word;
`;

const IconWrapperStyled = styled.div`
    ${resetCSS}
    align-items: center;
    background: ${color.white};
    border-radius: 100%;
    display: flex;
    height: 30px;
    justify-content: center;
    margin-top: 9px;
    padding: 4px;
    width: 30px;
`;

const CloseWrapperStyled = styled.div`
    ${resetCSS}
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 16px;
`;

const NotificationStyles = {
    CloseWrapperStyled,
    IconWrapperStyled,
    NotificationStyled,
    SpanStyled,
    TextContentStyled,
    TitleStyled,
};

export default NotificationStyles;
