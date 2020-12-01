import * as React from "react"
import { StyledRow, StyledCell } from "baseui/table"
import { StyledBodyCell } from "baseui/table-grid"
import { FormControl } from "baseui/form-control"
import { Input } from "baseui/input"
import { Checkbox } from 'baseui/checkbox'

import { t } from "react-switch-lang"
import { Button, SHAPE } from "baseui/button";
import { useAddResource } from '../context/ResourcesContext'
import { Card } from "baseui/card"

const CommunityRow = () => {

    const [number, setNumber] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [website, setWebsite] = React.useState("")
    const [name, setName] = React.useState("")
    const [iframe, setIframe] = React.useState("")
    const [checkboxes, setCheckboxes] = React.useState([true, true])
    const addResrc = useAddResource()

    const selectedBox = (e, index) => {
        const nextCheckboxes = [...checkboxes]
        nextCheckboxes[index] = e.currentTarget.checked
        setCheckboxes(nextCheckboxes)
    }

    const addResource = () => {

        console.log(number, address, website, name)
        const result = { number, address, website, name, checkboxes }
        addResrc(result)

        alert("Resource Added!!!")
        setNumber("");
        setName("");
        setWebsite("");
        setAddress("");
        setIframe("")
    }

    return (
        <Card>
            <StyledRow key={'nothing'}>
                <StyledCell>
                    <StyledBodyCell>
                        <FormControl label={() => t("nameOfCommunity")} >
                            <Input className='community-input' value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                        <FormControl label={() => t("availableTo")}>
                            <Checkbox
                                checked={checkboxes[0]}
                                onChange={(e) => selectedBox(e, 0)}
                                labelPlacement="left"
                            >
                                Korean
                            </Checkbox>
                        </FormControl>
                        <Checkbox
                            checked={checkboxes[1]}
                            onChange={(e) => selectedBox(e, 1)}
                            labelPlacement="left"
                        >
                            Chinese
                        </Checkbox>
                    </StyledBodyCell>
                </StyledCell>
                <StyledCell>
                    <StyledBodyCell>
                        <FormControl label={() => t("phoneNumber")} >
                            <Input className='community-input' value={number} onChange={e => setNumber(e.currentTarget.value)} />
                        </FormControl>
                        <FormControl label={() => t("address")} >
                            <Input className='community-input' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </FormControl>
                        <FormControl label={() => t("website")} >
                            <Input placeholder="www." className='community-input' value={website} onChange={(e) => setWebsite(e.target.value)} />
                        </FormControl>
                        <FormControl label="Iframe" >
                            <Input className='community-input' value={website} onChange={(e) => setIframe(e.target.value)} />
                        </FormControl>
                    </StyledBodyCell>
                </StyledCell>
            </StyledRow>
            <Button shape={SHAPE.pill} onClick={addResource}>{t("addResource")}</Button>
        </Card>
    )
}

export default CommunityRow
