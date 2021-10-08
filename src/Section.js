import React , { useEffect , useRef} from 'react';
import './Section.css';

const Section = (props) => {

    const sectionRef = useRef();
    

    useEffect( () => {
        sectionRef.current.addEventListener('mouseover' , () => {
            sectionRef.current.classList.add(props.color)
        });

        sectionRef.current.addEventListener('mouseout' , () => {
            sectionRef.current.classList.remove(props.color)
        });
    },[])

    return(
        <div className={`section ${props.selected && `section--${props.color}` }`} ref={sectionRef}>
            {props.Icon}
            <h4>{props.text}</h4>
        </div>
    );
}

export default Section ;
