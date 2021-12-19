import styled from 'styled-components';


export const AccordionHead = styled.div`
background: #E0E0E0;
padding: 20px;
border: 1px solid #FFFFFF;
text-align: left;
display:flex;
justify-content: space-between;
`;

export const AccordionBody = styled.div`
 display : ${ props=> props.toggle ? 'none':'block' };
 background : #F5F5F5;
 padding: 10px 20px;
 text-align: left;
`
export const ICON = styled.span`
font-size: 20px;
`