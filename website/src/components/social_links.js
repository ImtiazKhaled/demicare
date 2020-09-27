import * as React from "react"
import { Button } from 'baseui/button'
import { ButtonGroup } from "baseui/button-group"
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"

const SocialLinks = () => {
  return (
    <ButtonGroup>
      <Button>
        <FaFacebookSquare />
      </Button>
      <Button>
        <FaInstagram />
      </Button>
      <Button>
        <FaYoutube />
      </Button>
    </ButtonGroup>
  )
}

export default SocialLinks