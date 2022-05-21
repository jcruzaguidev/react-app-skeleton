import { Link } from 'react-router-dom';
import { P, Small } from "components";
import { StylesMessageResult } from "./MessageResult.styled";

interface Props {
   title:string;
   message:string;
}

const MessageResult = (props:Props) => {
   const { title, message } = props;

   return (
      <StylesMessageResult>
         <div className="message-result">
            <Link to={"/"}>
               <img src={ process.env.PUBLIC_URL + `/assets/logo.svg` } alt="EnUna" width={ 50 }/>
            </Link>
            <h1 className="h3 mt-3 mb-3 fw-normal">{ title }</h1>
            <P>{ message }</P>
            <Small>En unos momentos se te redirigirá</Small>
         </div>
      </StylesMessageResult>
   );
};

export default MessageResult;
