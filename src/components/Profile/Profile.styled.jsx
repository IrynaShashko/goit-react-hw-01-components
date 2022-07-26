import styled from '@emotion/styled';

export const ContainerProfile = styled.div`
  width: 200px;
  display: flex;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  flex-direction: column;
  background-color: #fdd;
  justify-content: center;
  align-items: center;
  color: #010101;
`;

export const Img = styled.img`
  width: 200px;
`;

export const UserName = styled.p`
  font-size: 30px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

export const Tag = styled.p`
  margin: 0;
  font-size: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Location = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 40px 0;
  margin: 0;
`;

export const Li = styled.li`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #010101;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;
