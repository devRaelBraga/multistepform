import styled from 'styled-components'
import IconArcade from '../../../assets/images/icon-arcade.svg'
import IconAdvanced from '../../../assets/images/icon-advanced.svg'
import IconPro from '../../../assets/images/icon-pro.svg'

export default function Card(props){
    const image = props.icon == 'Arcade' ? IconArcade : props.icon == 'Advanced'? IconAdvanced : IconPro
    return(
        <CardHolder>
            <Image src={image}></Image>
            
            <Description>
                <p className='PlanTitle'>
                    {props.children}
                </p>
                {/* <p>{props.value}</p> */}
                <p className='Price'>
                    {`$${props.isYearly ? props.price * 10 : props.price}/${props.isYearly ? 'yr' : 'mo'}`}
                </p>

                {props.isYearly && <p className='MonthsFree'>2 months free</p>}

            </Description>


            
        </CardHolder>
    )
}

const CardHolder = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    width: 10vw;
    height: 28vh;
    border-radius: 10px;
    background-color: white;
    border: 1px solid hsla(231.42857142857144, 11.1111111111111%, 62.94117647058823%, 0.671);

    .PlanTitle {
        color: hsl(213, 96%, 18%);
        font-weight: 500;
    }
    `

const Image = styled.img`
    margin: 2vh;
    width: 30%;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: .7vh;
    font-size: 0.8em;
    padding: 1vw 1.5vw 1vw 1.5vw;
    
    .Price {
        color: hsl(231, 11%, 63%);
    }

    .MonthsFree{
        color: hsl(213, 96%, 18%);
        font-weight: 400;
        font-size: 0.8em;
    }
    `
