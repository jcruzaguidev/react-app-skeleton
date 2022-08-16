import { useParams } from 'react-router-dom';
import { useReservationDetail } from 'hook/useReservationDetail';
import { MenuWeb } from 'layouts';
import { Button, Footer, ProductCardSmall, Title } from 'components';
import ReservationCard from 'components/reservationCard/ReservationCard';
import { StylesCheckOut } from 'pages/web/checkout/CheckOut.styled';
import colors from 'styles/colors';
import { labels } from 'utils/labels';

interface RouterParams {
  key: string;
}

const ReservationDetail = () => {
  const { key } = useParams<RouterParams>();
  const { commerce, menu, pay, handleBack } = useReservationDetail(key);

  return (
    <>
      <MenuWeb />
      <div className="container-fluid">
        <div className="row mbox">
          <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-12 col-md-12">

            <div className="row mb-5">
              <div className="col-xxl-11 col-9">
                <Title type="md">{labels.title.reservationDetail}</Title>
              </div>
              <div className="col-xxl-1 col-3">
                <Button type="sm" color="orange" title="Regresar" onClick={handleBack} />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-5">
                <ReservationCard item={commerce} clicked={false} />
                <StylesCheckOut>
                  <div className="row">
                    <div className="col-12">
                      <h4>{labels.title.totals}</h4>
                    </div>
                  </div>
                  <div className="row subtotal-box">
                    <div className="col-6"><strong>{labels.inputTitle.consume}:</strong></div>
                    <div className="col-6 align-right"><strong>S/{(+pay.subTotal).toFixed(1)}</strong></div>
                  </div>
                  <div className="row subtotal-box">
                    <div className="col-6"><strong>{labels.inputTitle.service}:</strong></div>
                    <div className="col-6 align-right"><strong>S/{(+pay.service).toFixed(1)}</strong></div>
                  </div>
                  <div className="row subtotal-box">
                    <div className="col-6"><strong>{labels.inputTitle.tips}:</strong></div>
                    <div className="col-6 align-right"><strong>S/{(+pay.tips).toFixed(1)}</strong></div>
                  </div>
                  <div className="row total-box">
                    <div className="col-6"><strong>{labels.inputTitle.total}:</strong></div>
                    <div className="col-6 align-right"><strong>S/{(+pay.total).toFixed(1)}</strong></div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <Title type="xxs" style={{ color: colors.gray300 }}>{labels.title.observation.toUpperCase()}:</Title>
                      <textarea className="form-control" rows={3} value={commerce.observation} disabled />
                    </div>
                  </div>
                </StylesCheckOut>
              </div>

              <div className="col-sm-6 offset-sm-1">
                <div className="row">
                  {
                    menu.map(item => (
                      <div key={item.menuKey} className="col-12">
                        <ProductCardSmall item={item} />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReservationDetail;
