import { StyledTextInput } from "./TextInput.styled";

interface Props {
   label: string;
   name: string;
   value?: string | number;
   message?: string;
   type?: 'text' | 'email' | 'password' | 'number';
   placeholder?: string;
   onChange: any;
}

export const TextInput = ({ label, ...props }:Props) => {
   
   return (
      <StyledTextInput>
         <label>{ label }</label>
         <input className="form-control" { ...props } />
      </StyledTextInput>
   );
};
