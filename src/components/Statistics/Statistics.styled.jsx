import styled from '@emotion/styled';

export const ContainerStatistic = styled.section`
max-width: 500px;
margin: 0 auto;
`;

export const Title = styled.h1`
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
`;

export const List = styled.ul`
display: flex;
flex-direction: row;
align-items: space-between;
list-style: none;
padding: 0;
`;

export const Li = styled.li`
display: flex;
flex-direction: column;
padding: 10px;
background-color: #fdd;
font-size: 16px;
width: 40px;
border: 1px solid #010101;
`;

export const Label = styled.span`
font-weight: bold;
display: flex;
justify-content: center;
`;

export const Percentage = styled.span`
font-size: 16px;
display: flex;
justify-content: center;
`;