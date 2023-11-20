import { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./BookingForm.scss";

const ReserveSchema = yup.object().shape({
  resDate: yup.date(),
});

function BookingForm() {
  const todaysDate = {
    target: {
      value: format(new Date(), "yyyy-MM-dd"),
    },
  };
  const [date, setDate] = useState(todaysDate);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ReserveSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="resDate">Choose date:</label>
      <input
        type="date"
        {...register("resDate")}
        value={date.target.value}
        onChange={setDate}
      />
      <p>{errors.resDate?.message}</p>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time ">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
