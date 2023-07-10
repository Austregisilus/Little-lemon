import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const availableTimes = [
  { id: 1, time: "17:00" },
  { id: 2, time: "18:00" },
  { id: 3, time: "19:00" },
  { id: 4, time: "20:00" },
  { id: 5, time: "21:00" },
  { id: 6, time: "22:00" },
];

const occasion = [
  { id: 1, name: "Birthday" },
  { id: 2, name: "Anniversary" },
];

const BookingForm = () => {
  const [selectedTime, setSelectedTime] = useState(availableTimes[1]);
  const [selectedOccasion, setSelectedOccasion] = useState(occasion[1]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      date: "Pick a Date",
      guests: "Number of guests",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(2, "Too short!")
        .max(20, "Too long!")
        .required("Required"),
      lastName: Yup.string()
        .min(2, "Too short!")
        .max(20, "Too long!")
        .required("Required"),
      date: Yup.string().required("Required!"),
      guests: Yup.string().required("Required!"),
    }),
  });

  return (
    <div className="h-[80vh] border-t-2">
      <h1 class="text-3xl font-bold text-center my-10">
        Reserve a table with us
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mx-40">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-lg font-medium leading-6 my-2"
              >
                First name:
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="pl-3 block w-full ring-1 ring-slate-700 h-[30px] text-md placeholder:text-gray-500 rounded-md focus:ring-lime-600 active:ring-yellow-500 outline-none"
                placeholder="First name"
                required
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500">{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-lg font-medium leading-6 my-2"
              >
                Last name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="pl-3 block w-full ring-1 ring-slate-700 h-[30px] text-md placeholder:text-gray-500 rounded-md focus:ring-lime-600 active:ring-yellow-500 outline-none"
                placeholder="Last name"
                required
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500">{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-1">
            <label
              htmlFor="date"
              className="block text-lg font-medium leading-6 my-2"
            >
              Date:
            </label>
          </div>
          <div className="grid grid-cols-1">
            <input
              type="date"
              name="date"
              id="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="pl-2 block w-full ring-1 ring-slate-700 h-[30px] text-md rounded-md focus:ring-lime-600 active:ring-yellow-500 outline-none text-slate-500"
              required
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-red-500">{formik.errors.date}</div>
            ) : null}
          </div>
          <div className="grid grid-cols-2">
            <label
              htmlFor="selectTime"
              className="block text-lg font-medium leading-6 my-2"
            >
              Select time:
            </label>
          </div>
          <div className="grid grid-cols-2">
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="pl-2 block w-full ring-1 ring-slate-700 h-[30px] text-md rounded-md focus:ring-lime-600 active:ring-yellow-500 outline-none text-slate-500"
              required
            >
              {availableTimes.map((item) => (
                <option key={item.id} value={item.time}>
                  {item.time}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label
              htmlFor="guests"
              className="block text-lg font-medium leading-6 my-2"
            >
              Number of Guests
            </label>
          </div>
          <div className="grid grid-cols-2">
            <input
              type="number"
              placeholder="1"
              max="10"
              min="1"
              id="guests"
              value={formik.values.guests}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="pl-2 block w-full ring-1 ring-slate-700 h-[30px] text-md rounded-md focus:ring-lime-600 active:ring-yellow-500 outline-none text-slate-500"
              required
            />
            {formik.touched.guests && formik.errors.guests ? (
              <div className="text-red-500">{formik.errors.guests}</div>
            ) : null}
          </div>
          <div className="grid grid-cols-2">
            <label
              htmlFor="occasion"
              className="block text-lg font-medium leading-6 my-2"
            >
              Occasion:
            </label>
          </div>
          <div className="grid grid-cols-2">
            <select
              value={selectedOccasion}
              onChange={(e) => setSelectedOccasion(e.target.value)}
              className="pl-2 block w-full ring-1 ring-slate-700 h-[30px] text-md rounded-md focus:ring-lime-600 active:ring-yellow-500 outline-none text-slate-500"
              required
            >
              {occasion.map((x) => (
                <option key={x.id} value={x.name}>
                  {x.name}
                </option>
              ))}
            </select>
          </div>
          <div className="my-10">
            <input
              type="submit"
              value="Reservation"
              className="p-2 w-40 font-bold rounded-lg bg-yellow-400 text-center text-gray-800 hover:bg-yellow-500 hover:text-gray-950"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
