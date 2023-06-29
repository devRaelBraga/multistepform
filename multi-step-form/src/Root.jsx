import { useState } from "react"
import Item from "./components/Item"
import { Container, Holder, Sidebar, StepHolders, Content } from "./styles"
import { Outlet } from "react-router-dom"

export default function Root(){
    const [active1, setActive1] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)

    return(
        <Container>
            <Holder>
                <Sidebar>
                    <StepHolders>
                        <Item step={1} active={active1} setActive={setActive1}>YOUR INFO</Item>
                        <Item step={2} active={active2} setActive={setActive2}>SELECT PLAN</Item>
                        <Item step={3} active={active3} setActive={setActive3}>ADD-ONS</Item>
                        <Item step={4} active={active4} setActive={setActive4}>SUMMARY</Item>
                    </StepHolders>
                </Sidebar>
                <Content>
                    <Outlet></Outlet>
                </Content>
            </Holder>

        </Container>
    )
}