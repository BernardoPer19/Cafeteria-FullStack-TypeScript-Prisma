// src/sections/home/Home.tsx
import About from "@/sections/home/About";
import LocationSection from "@/sections/home/Adress";
import CardsHeader from "@/sections/home/CardsHeader";
import Header from "@/sections/home/Header";
import Products from "@/sections/home/Products";
import ReservationTable from "@/sections/home/Reservations";

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
