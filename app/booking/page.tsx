import type { Metadata } from "next";
import Booking from "./BookingClient";

export const metadata: Metadata = {
  title: "Booking | Midnight Drive",
  description:
    "Email or DM us on Instagram for any booking inquiries!",
};

export default function Page() {
  return <Booking />;
}
