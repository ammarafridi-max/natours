import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51QvuEUJRWcTso356fLs1Uucagk6Nkyc0AuO6qcd3RbRpkFATGnWDn0ZRN83cMVPS15o8eLclov0von0cu32OAztk009Pvqkqs5'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', err);
  }
};
