import styled from 'styled-components'
import Card from './components/Card/Card'
import IconArcade from '../../assets/images/icon-arcade.svg'
import IconAdvanced from '../../assets/images/icon-advanced.svg'
import IconPro from '../../assets/images/icon-pro.svg'


export default function StepTwo(options) {

    const plans =[
        {
        id: 1,
        title: 'Arcade',
        price: 9,
        icon:{IconArcade},
    },
    {
        id: 2,
        title: 'Advanced',
        price: 12,
        icon:{IconAdvanced},
    },
    {
        id: 3,
        title: 'Pro',
        price: 15,
        icon:{IconPro},
        },
]

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
                        <Card price={item.price} isYearly={true} icon={item.icon}> {item.title} </Card>
                    )
                })}
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
    `
