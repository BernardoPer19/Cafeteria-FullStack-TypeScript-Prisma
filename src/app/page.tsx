// src/sections/home/Home.tsx
import About from "@/home/About";
import LocationSection from "@/home/Adress";
import CardsHeader from "@/home/CardsHeader";
import Header from "@/home/Header";
import Products from "@/home/Products";
import ReservationTable from "@/home/Reservations";

export default function Home() {
  return (
    <>
      <Header />
      <CardsHeader />
      <About />
      <Products />
      <LocationSection/>
      <ReservationTable />
    </>
  );
}
