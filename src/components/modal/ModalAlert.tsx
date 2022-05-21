import { Button as ButtonModal, Modal } from "react-bootstrap";

interface Props {
   showModal: boolean;
   setShowModal: any;
   title: string;
   message: string;
   label?: string;
   onClick?: () => void;
   hidden?:string;
}

export const ModalAlert = (props: Props) => {
   const { showModal, setShowModal, title, message, label, onClick, hidden } = props;

   const handleBack = () => {
      setShowModal(false);
   };

   return (
      <>
         <Modal className="modal-background" show={ showModal } onHide={ handleBack }>
            <Modal.Header closeButton>
               <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               <div className="alert alert-danger">{ message }</div>
            </Modal.Body>

            <Modal.Footer>
               <ButtonModal className={ hidden } variant="danger" onClick={ onClick }>{ label }</ButtonModal>
               <ButtonModal variant="secondary" onClick={ handleBack }>Cancelar</ButtonModal>
            </Modal.Footer>
         </Modal>
      </>
   );
};