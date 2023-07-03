import { useNavigate } from "react-router-dom";
import { Circulo, Passo } from "./style";

export default function Item(props){
    const navigate = useNavigate();

    return(
    // <Link to={`/${props.step}`} >
        <Passo onClick={ () => navigate(`/${props.step}`) }>
            <Circulo $active={props.$active?.toString()} onClick={() => props.setActive(!props.$active)}>{props.step}</Circulo>
            <div>
                <p style={{ color: 'hsl(229, 24%, 87%)', fontSize: '0.7em', marginBottom: '5px'}}>
                    STEP {props.step}
                </p>
                <p style={{ color: "#fff", fontWeight: 'bold', fontSize: '0.9em', letterSpacing: '1px'}}>
                    {props.children}
                </p>
            </div>
        </Passo>
    // </Link>
    )
}