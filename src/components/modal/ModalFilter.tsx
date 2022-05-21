import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button as ButtonModal, Modal } from "react-bootstrap";
import { MasterServices } from "../../service/masterServices";
import { Select } from "../select/Select";
import { useForm } from "../../hook/useForm";
import { CategoryData, DistrictData } from "../../interfaces/master.interface";
import { getLocaleStorage, setLocalStorage } from "../../utils/session";

interface Props {
   showModal: boolean;
   setShowModal: any;
   setReload: Dispatch<SetStateAction<boolean>>;
   setReloadFilter: Dispatch<SetStateAction<boolean>>;
}

const INITIAL_STATE = {
   districtKey: getLocaleStorage("enuna_filter_district") ? getLocaleStorage("enuna_filter_district") : "*",
   categoryKey: getLocaleStorage("enuna_filter_category") ? getLocaleStorage("enuna_filter_category") : "*"
}

export const ModalFilter = (props: Props) => {
   const { showModal, setShowModal, setReload, setReloadFilter } = props;
   const { district, category } = MasterServices();
   const { formData, onChange, categoryKey, districtKey } = useForm(INITIAL_STATE);

   const [districtData, setDistrictData] = useState<DistrictData[]>([]);
   const [categoryData, setCategoryData] = useState<CategoryData[]>([]);

   useEffect(() => {
      (async () => {
         await district().then(res => {
            setDistrictData(res.data);
         });

         await category().then(res => {
            setCategoryData(res.data);
         });
      })();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [setDistrictData, setCategoryData]);

   const handleSetFilter = () => {
      setLocalStorage("enuna_filter_category", formData.categoryKey);
      setLocalStorage("enuna_filter_district", formData.districtKey);

      if (formData.districtKey === "*") {
         setLocalStorage("enuna_filter_district_text", "Todos los distritos");
      } else {
         const indexD = districtData.findIndex( x => x.districtKey === formData.districtKey);
         setLocalStorage("enuna_filter_district_text", districtData[indexD].districtName);
      }

      if (formData.categoryKey === "*") {
         setLocalStorage("enuna_filter_category_text", "Todas las categorías");
      } else{
         const indexC = categoryData.findIndex( x => x.categoryKey === formData.categoryKey);
         setLocalStorage("enuna_filter_category_text", categoryData[indexC].categoryName);
      }

      setReload(true);
      setReloadFilter(true);
      setShowModal(false);
   }
   
   
   return (
      <>
         <Modal className="modal-background" show={ showModal } onHide={ () => setShowModal(false) }>
            <Modal.Header closeButton>
               <Modal.Title>Filtro de Búsqueda</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               <Select label={ "Categoría" } name={ "categoryKey" } value={ categoryKey } onChange={ onChange } >
                  <option value="*">Todas las categorías</option>
                  {
                     categoryData && categoryData.map((cat, index) => (
                        <option key={ index } value={ cat.categoryKey }>{ cat.categoryName }</option>
                     ))
                  }
               </Select>
               <Select label={ "Distrito" } name={ "districtKey" } value={ districtKey } onChange={ onChange } >
                  <option value="*">Todas los distritos</option>
                  {
                     districtData && districtData.map((dist, index) => (
                        <option key={ index } value={ dist.districtKey }>{ dist.districtName }</option>
                     ))
                  }
               </Select>
            </Modal.Body>

            <Modal.Footer>
               <ButtonModal variant="primary" onClick={ handleSetFilter }>Seleccionar</ButtonModal>
               <ButtonModal variant="secondary" onClick={ () => setShowModal(false) }>Cancelar</ButtonModal>
            </Modal.Footer>
         </Modal>
      </>
   );
};
