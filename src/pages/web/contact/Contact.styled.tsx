import styled from 'styled-components';
import colors from 'styles/colors';

export const StyleContact = styled.div`
   .container-fluid {
      margin-top:130px;
      background-image: url('../../../assets/wallpaper-contact.png');
      background-size: cover;
      background-position: center center no-repeat;
      height: 100vh;
      width: 100vw;
      background-position: center;
   }
   p {
     font-size: 1.5rem;
     line-height: 2rem;
   }
   a {
      color:${ colors.gray100 };
      text-decoration:none;
   }
`;
