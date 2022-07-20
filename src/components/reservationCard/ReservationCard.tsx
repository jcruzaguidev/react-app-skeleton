import { useHistory } from "react-router-dom";
import {Title} from 'components/title/Title';
import {ReservationsData} from 'interfaces/reservations.interface';
import {StylesReservationCard} from './ReservationCard.styled';
import colors from 'styles/colors';

interface Props {
   item:ReservationsData;
   clicked:boolean;
}

const ReservationCard = (props:Props) => {
   const history = useHistory();
   const { item, clicked } = props;
   const { day, time, commerceKey, commerceName, reservationStatus, persons, colorStatus, reservationKey, regionName, districtName } = item;

   const handleViewDetail = () => {
      clicked && history.push(`/reservation/detail/${reservationKey}`);
   }

   return (
      <>
         <StylesReservationCard img={ process.env.PUBLIC_URL + "logo/" + commerceKey + ".jpg" }>
            <div className="card mb-3" onClick={ handleViewDetail }>
               <div className="row g-0">
                  <div className="col-4 image" />
                  <div className="col-8">
                     <div className="card-body">
                        <Title style={{ color:colors.gray100, backgroundColor:"#FFF" }} type="sm">{ commerceName }</Title>
                        <Title style={{ color:colorStatus, backgroundColor:"#FFF" }} type="xs">{ reservationStatus }</Title>
                        <Title style={{ color:colors.gray100, backgroundColor:"#FFF" }} type="xs">{ regionName } | { districtName }</Title>
                        <Title style={{ color:colors.gray100, backgroundColor:"#FFF" }} type="xs">{ day } | { time }</Title>
                        <Title style={{ color:colors.gray100, backgroundColor:"#FFF" }} type="xs">{ persons }</Title>
                     </div>
                  </div>
               </div>
            </div>
         </StylesReservationCard>
      </>
   );
};

export default ReservationCard;
