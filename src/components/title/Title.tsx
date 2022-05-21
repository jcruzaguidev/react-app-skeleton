import {StylesTitle} from './Title.styled';

interface Props {
   type: 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
   children:any;
   style?:any;
}

export const Title = ({ type, children, ...props }:Props) => {

   return (
      <StylesTitle>
         <h1 className={`titlex title-${ type }`} {...props}>{ children }</h1>
      </StylesTitle>
   );
};

