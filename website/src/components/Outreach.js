import * as React from "react"
import { Display2 } from "baseui/typography"
import { Button } from "baseui/button"
import { RiWechatFill, RiKakaoTalkFill } from "react-icons/ri"
import { t } from "react-switch-lang"

const Outreach = () => {
  return (
    <div className="outreach-container">
      <Display2 marginBottom="scale1000"> {t("outreach")} </Display2>

      <div style={{
        padding: "70px 0",
        // border: "3px solid green",
        textAlign: "center"
      }}>
        <Button
          className="outreach-button"
          startEnhancer={RiWechatFill}
          onClick={() => window.open("https://www.wechat.com/en/", "_blank")}
        >
          {t("weChat")}
        </Button>
        <br /> <br />
        <Button
          className="outreach-button"
          startEnhancer={RiKakaoTalkFill}
          onClick={() => window.open("https://open.kakao.com/o/gPYKtsqc.", "_blank")}
        >
          {t("kakaoTalk")}
        </Button>
      </div>

    </div>
  )
}

export default Outreach
