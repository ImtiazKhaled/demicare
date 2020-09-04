import * as React from 'react';
import {Card, StyledBody } from 'baseui/card';
import ReactMD from 'react-markdown'

const DementiaCard = (props) => {
  return <Card
    overrides={{Root: {style: {width: '328px'}}}}
    headerImage={props.image}
    title={props.title}
  >
    <StyledBody>
      <ReactMD source={props.description} />
    </StyledBody>
  </Card>
}

export default DementiaCard