import * as React from 'react'
import { Display2 } from 'baseui/typography'
import { Button } from "baseui/button"
import { RiWechatFill, RiKakaoTalkFill } from 'react-icons/ri'

const Outreach = () => { 

    return <div className='outreach-container'>
        <Display2 marginBottom="scale1000"> Outreach </Display2>
        <Button 
            className='outreach-button'
            startEnhancer={RiWechatFill}
            onClick={() => window.open('https://dementiacaregiving.questionpro.com','_blank')}
        > 
            Connect on WeChat 
        </Button>
        <br /><br />
        <Button
            className='outreach-button'
            startEnhancer={RiKakaoTalkFill}
            onClick={() => window.open('https://open.kakao.com/o/gPYKtsqc.','_blank')}
        > 
            Connect on KakaoTalk 
        </Button>
    </div>
}

export default Outreach