import { StylesSelect } from "./Select.styled";

interface Props {
   label: string;
   name: string;
   message?: string;
   placeholder?: string;
   [x: string]: any;
   onChange: any;
}

export const Select = ({ label, ...props }:Props) => {
   const errorClass = props.message?.substring(0, 5) === "Error" ? "danger-message" : "";

   return (
      <>
         <StylesSelect>
            <label className="form-label">{ label }</label>
            <select className="form-select select-box" { ...props } />
            {
               props.message && <div className={`form-text ${errorClass}`}>{ props.message }</div>
            }
         </StylesSelect>
      </>
   );
};
