import React from "react";
import { MyWorkExperience, WorkInfoContainer } from "../style/style.work";
import { Td, Th, Tr } from "../style/style.academic";

function Academic() {
  return (
    <>
      <MyWorkExperience style={{ backgroundColor: "#f7e3c6" }}>
        <h1>Education Info</h1>
        <WorkInfoContainer>
          <table cellSpacing="0" cellPadding="15px">
            <Tr>
              <Th>SLC</Th>
              <Th>Intermediate +2</Th>
              <Th>Bachelor</Th>
            </Tr>
            <Tr>
              <Td>Sagarmatha Higher Secondary School</Td>
              <Td>Quest Model College</Td>
              <Td>The British College</Td>
            </Tr>
            <Tr>
              <Td>2011 - A.D</Td>
              <Td>2014 - A.D</Td>
              <Td>2020 - A.D</Td>
            </Tr>
          </table>
        </WorkInfoContainer>
      </MyWorkExperience>
    </>
  );
}

export default Academic;
