import { useEffect } from 'react';
import styled from 'styled-components'

export default function Switch({isYearly, setIsYearly}) {
    
    function handleClick(){
        var inputs = document.querySelector('.Input');
        inputs.checked = !inputs.checked;
        setIsYearly(!isYearly);
    }

    return(
        <Toggle htmlFor="">
            <input type="checkbox" className='Input' />
            <span className="slider" onClick={() => handleClick()}></span>
        </Toggle>
    )

}

const Toggle = styled.label`
    position: relative;
    user-select: none;
    width: 0;
    height: 0;
    top: -14px;
    left: -18px;


    .Input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    .slider {
        border-radius: 14px;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 56px;
        height: 28px;

        background-color: hsl(213, 96%, 18%);
    }

    .slider:before {
        border-radius: 100%;
        position: absolute;
        content: '';
        top: 5px;
        left: 5px;
        width: 18px;
        height: 18px;
        background-color: white;
        transition: 300ms all;
    }

    .Input:checked + .slider:before {
        transform: translateX(26px);
    }
`