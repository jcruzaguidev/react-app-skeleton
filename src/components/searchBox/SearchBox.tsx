import { ChangeEventHandler, Dispatch, KeyboardEventHandler, SetStateAction, useEffect, useState } from "react";
import { ModalFilter } from "components";
import { StylesSearchBox } from "./SearchBox.styled";
import {getLocaleStorage} from "utils/session";

interface Props {
   title: string;
   value?: string;
   setReload: Dispatch<SetStateAction<boolean>>;
   onChange?: ChangeEventHandler<HTMLInputElement>;
   onKeyPress: KeyboardEventHandler<HTMLInputElement>;
}

export const SearchBox = ({ title, setReload, onKeyPress, ...props }: Props) => {
   const [showModal, setShowModal] = useState(false);
   const [filterDescription, setFilterDescription] = useState("");
   const [reloadFilter, setReloadFilter] = useState(false);
   
   const handleModal = () => {
      setShowModal(true);
   }
   
   useEffect(() => {
      setFilterDescription(getLocaleStorage("enuna_filter_category_text") + " - " + getLocaleStorage("enuna_filter_district_text"));
      setReloadFilter(false);
   }, [reloadFilter]);

   return (
      <>
         <StylesSearchBox>
            <h1 className="title back-trans">{ title }</h1>
            <div className="input-group back-trans">
               <input type="text" className="form-control input-box" onKeyPress={ onKeyPress } { ...props } />
               <button className="btn button-text" type="button" onClick={ handleModal }>
                  <img src={ process.env.PUBLIC_URL + '/assets/filter.svg' } className="card-img-top" alt="EnUna"/>
               </button>
            </div>
            <small className="back-trans">{ filterDescription }</small>
         </StylesSearchBox>
         <ModalFilter showModal={ showModal } setShowModal={ setShowModal } setReload={ setReload } setReloadFilter={ setReloadFilter } />
      </>
   );
};
