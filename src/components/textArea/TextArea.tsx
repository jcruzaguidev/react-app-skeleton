import { StyledTextArea } from "./TextArea.styled";

interface Props {
   label: string;
   name: string;
   rows: number;
   placeholder?: string;
   onChange: any;
}

export const TextArea = ({ label, ...props }:Props) => {
   
   return (
      <StyledTextArea>
         <label>{ label }</label>
         <textarea className="form-control" { ...props } />
      </StyledTextArea>
   );
};
