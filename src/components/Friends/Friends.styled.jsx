import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
`;

export const Status = styled.span`
  border-radius: 50%;
  display: block;
  height: 20px;
  margin-right: 10px;
  width: 20px;
  background-color: ${props => {
    switch (props.friend) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
    }
  }};
`;

export const StatusOff = styled.span`
  background-color: red;
`;

export const Item = styled.li`
  align-items: center;
  background-color: #f0cdf0;
  box-shadow: rgb(66 68 90) 0px 0px 13px -3px;
  border-radius: 4px;
  border: 1px;
  border-style: inset;
  box-sizing: content-box;
  display: flex;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-top: 8px;
  width: 300px;
`;

export const Img = styled.img`
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 20px;
`;
