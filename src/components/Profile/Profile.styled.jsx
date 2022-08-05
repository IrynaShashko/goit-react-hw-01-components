import styled from '@emotion/styled';

export const ContainerProfile = styled.div`
  width: 200px;
  display: flex;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  flex-direction: column;
  background-color: #78bdfb;
  border-radius: 4px;
  box-shadow: rgb(66 68 90) 0px 0px 13px -3px;
  justify-content: center;
  align-items: center;
  color: #010101;
`;

export const Img = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: #fff;
`;

export const UserName = styled.p`
  font-size: 24px;
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
  justify-content: space-between;
  list-style: none;
  width: 300px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-left: 0;
  margin: 0;
  background-color: #417aae;
`;

export const Li = styled.li`
  padding: 15px;
  width: 100px;
  display: flex;
  flex-direction: column;
  border: 1px solid #0d3c67;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Quantity = styled.span`
  font-size: 16px;
`;
