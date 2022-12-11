import styled from "@emotion/styled";

export const Contacts = styled.ul`
padding: 60px 70px 30px 450px;
font-family: 'Indie Flower', cursive;
font-size: 22px;
line-height: 31px;
`;

export const ContactItem = styled.li`
position: relative;
padding-right: 40px;
width: 100%;
display: flex;
justify-content: space-between;

.name {
    font-weight: 700;
    margin-right: 30px;
    }

.close-btn {
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: none;      
}

&:hover .close-btn{    
    display: block;
    position: absolute;
    right: 0;  
}

`;