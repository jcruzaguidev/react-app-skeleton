import { StylesButtonCircle } from "./ButtonCircle.styled";

interface Props {
   onClick?:() => void;
}

export const ButtonCircle = (props:Props) => {
   const { onClick } = props;

   return (
      <StylesButtonCircle>
         <button type="button" className="btn" onClick={ onClick }>
            <img className="btn-image" src={process.env.PUBLIC_URL + "/assets/card.svg"} alt="EnUna"/>
         </button>
      </StylesButtonCircle>
   );
};
