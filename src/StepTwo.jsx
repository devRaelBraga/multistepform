import styled from 'styled-components'
import Card from './components/Card/Card'
import { useState } from 'react';
import Switch from './components/Toggle/Switch';
import { Button } from './StepOne';
import { useNavigate } from "react-router-dom";


export default function StepTwo(options) {
    const [arcadeActive, setArcadeActive] = useState(false);
    const [advancedActive, setAdvancedActive] = useState(false);
    const [proActive, setProActive] = useState(false);
    const plans =[
        {
        title: 'Arcade',
        price: 9,
        icon:'Arcade',
        active: arcadeActive,
        setActive: setArcadeActive,
    },
    {
        title: 'Advanced',
        price: 12,
        icon:'Advanced',
        active: advancedActive,
        setActive: setAdvancedActive,
    },
    {
        title: 'Pro',
        price: 15,
        icon:'Pro',
        active: proActive,
        setActive: setProActive,
        },
]

    function activePlanHandler(plan) {
        if(plan == 'Arcade'){
            setArcadeActive(true);
            setAdvancedActive(false);
            setProActive(false);
        }
        else if(plan == 'Advanced'){
            setArcadeActive(false);
            setAdvancedActive(true);
            setProActive(false);
        }
        else if(plan == 'Pro'){
            setArcadeActive(false);
            setAdvancedActive(false);
            setProActive(true);
        }
    }


    const navigate = useNavigate();

    const [isYearly, setIsYearly] = useState(false)

    return (
        <Content>
            <Title>
                Select your plan
            </Title>
            <P>
                You have the option of monthly or yearly billing.
            </P>

            <div style={{display:'flex', flexDirection:'row', gap:'2vw'}}>
                {plans.map(item => {
                    return(
                        <Card price={item.price} isYearly={isYearly} icon={item.icon} active={item.active} setActive={activePlanHandler} key={item.title}> {item.title} </Card>
                    )
                })}
            </div>

            <SwitchSelect>
                <p className={`${isYearly ? '' : 'active'}`}>
                    Monthly
                </p>
                <Switch isYearly={isYearly} setIsYearly={setIsYearly}></Switch>
                <p className={`${isYearly ? 'active' : ''}`}>
                    Yearly
                </p>
            </SwitchSelect>
            
            <div className='Buttons'>
                <BackButton onClick={() => navigate('/1')}>Go back</BackButton>
                <Button onClick={() => navigate('/3')}>Next step</Button>
            </div>



            
        </Content>
    )
}

const Title = styled.h1`
    color: hsl(213, 96%, 18%);
    font-size: 2em;
`

const P = styled.p`
    color: hsl(231, 11%, 63%);
    font-weight: 400;
    margin-top: 1em;
    margin-bottom: 5vh;

`

const Content = styled.div`
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    // gap: 5vh;
    // align-items: center;

    .Buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
    }
`

const SwitchSelect = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 4vh;
    width: 100%;
    height: 3em;
    background-color: hsl(217, 100%, 97%);
    border-radius: 8px;

    p {
        font-size: 1em;
        font-weight: 500;
        color: hsl(231, 11%, 63%);
    }

    .active {
        color: hsl(213, 96%, 18%);
    }
`
export const BackButton = styled.button`
    background-color: white;
    color: hsl(231, 11%, 63%);
    font-weight: 500;
    font-size: 1em;
    border: 3px solid white;
    width: fit-content;
    padding: 1em 1.7em 1em 1.7em;
    border-radius: 10px;
    margin-top: 9vh;
    align-self: end;
    transition: 200ms all;
    user-select: none;
    
    &:hover {
        border: 3px solid hsl(213, 96%, 18%);
        background-color: white;
        cursor: pointer;
        color: hsl(213, 96%, 18%);
        transition: 200ms all;
    }
    `