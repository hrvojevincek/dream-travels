"use server";

import { Trip } from "@/types";

export async function getTrips(): Promise<Trip[]> {
  const res = await fetch(process.env.API_URL as string);
  if (!res.ok) throw new Error("Failed to fetch trips");
  return res.json();
}
