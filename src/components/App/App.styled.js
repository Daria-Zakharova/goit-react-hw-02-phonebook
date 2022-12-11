import styled from "@emotion/styled";


export const AppCard = styled.div`
position: relative;
width: 50%;
min-width: 320px;
max-width: 900px;
min-height: 600px;
font-size: 16px;
background-image:  linear-gradient(to bottom, white 3%, transparent 6%, transparent 94%, white 97%), linear-gradient(to right, white 3%, transparent 10%, transparent 90%, white 97%) ,repeating-linear-gradient(to bottom, white 1px, blue 1px, white 2px, white 32px);
box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const AppTitle = styled.h1`
text-align: right;
margin: 30px 230px 70px auto;
font-family: 'Indie Flower', cursive;
font-size: 30px;
text-decoration: underline;
color: blue;
`