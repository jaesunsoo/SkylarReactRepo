import React from "react";
import styled from "styled-components";
export const SkylarOnboardScreen = ({}) => {
  return (
    <SkylarRoot>
      <FlexColumn>
        <Text1>Skylar</Text1>
        <Text2>Join the fun.</Text2>
      </FlexColumn>
      <BlackText margin={"0px 0px 20px 0px"}>Sign in</BlackText>
      <BlackText margin={"0px 0px 28px 0px"}>Sign up</BlackText>
      <Text3>or</Text3>
      <Text4>continue as guest</Text4>
      <Paragraph>
        By continuing as guest you accept
        <br />
        you are 18 years or older.
      </Paragraph>
    </SkylarRoot>
  );
};
const SkylarRoot = styled.div`
  border-width: 4px;
  border-color: #ffffff;
  border-style: solid;
  width: 267px;
  height: 716px;
  background-color: #8e8e8e;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;
  align-items: center;
  border-radius: 20px;
  padding: 42px 47px 42px 46px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 137px 0px;
`;
const Text1 = styled.div`
  font-size: 50px;
  font-family: Helvetica Neue;
  font-weight: 700;
  color: #2e2e2e;
`;
const Text2 = styled.div`
  font-size: 14px;
  font-family: Helvetica Neue;
  font-weight: 700;
  color: #2e2e2e;
  align-self: flex-end;
  margin: 0px 31px 0px 0px;
`;
const Text3 = styled.div`
  font-size: 14px;
  font-family: Helvetica Neue;
  font-weight: 400;
  color: #2e2e2e;
  margin: 0px 0px 12px 0px;
`;
const Text4 = styled.div`
  font-size: 16px;
  font-family: Helvetica Neue;
  font-weight: 700;
  color: #2e2e2e;
  margin: 0px 0px 37px 0px;
`;
const Paragraph = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: Helvetica Neue;
  font-weight: 400;
  color: #2e2e2e;
`;
const BlackText = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Helvetica Neue;
  font-weight: 700;
  color: #d9d9d9;
  width: 267px;
  height: 17px;
  background-color: #2e2e2e;
  flex-direction: row;
  justify-content: center;
  padding: 13px 0px 12px 0px;
  margin: ${(props) => props.margin};
`;
