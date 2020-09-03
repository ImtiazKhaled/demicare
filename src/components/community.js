import * as React from 'react'
import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledRow,
  StyledCell
} from 'baseui/table'
import { StyledBodyCell } from 'baseui/table-grid';
import ReactMD from 'react-markdown'

let mdData = `
### Bilingual in English and Korean \n
Phone number: 972-245-1573 \n
Address: 1618 Kirby Rd, Carrollton, TX 75006 \n
Website: [carrolltonhealth.com](https://carrolltonhealth.com)
`

export default () => {

  const DATA = [
    ['Carrolton Health & Rehabilitation Center', mdData],
    ['Carrolton Health & Rehabilitation Center', mdData],
    ['Carrolton Health & Rehabilitation Center', mdData]
  ]

  return <div className='community-container'>
    <StyledTable>
      <StyledHead>
        <StyledHeadCell>Title</StyledHeadCell>
        <StyledHeadCell>Resource</StyledHeadCell>
      </StyledHead>
      <StyledBody>
        {DATA.map((row, index) => (
          <StyledRow key={index}>
            <StyledCell>
              <StyledBodyCell>{row[0]}</StyledBodyCell>
            </StyledCell>
            <StyledCell>
              <StyledBodyCell>
                <ReactMD source={row[1]} />
              </StyledBodyCell>
            </StyledCell>
          </StyledRow>
        ))}
      </StyledBody>
    </StyledTable>
  </div> 
}