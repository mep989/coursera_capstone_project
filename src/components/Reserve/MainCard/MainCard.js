import BookingForm from "../BookingForm/BookingForm";

import "./MainCard.scss";

function Card() {
  return (
    <article className="main-card">
      <section>
        <BookingForm />
      </section>
    </article>
  );
}

export default Card;
