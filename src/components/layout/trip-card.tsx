"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TripDetailsModal from "./trip-details-modal";

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card className="flex h-[206px] overflow-hidden shadow-none hover:shadow-md">
      <div className="relative w-1/2">
        <Image
          alt="Portugal landscape"
          className="object-cover"
          fill
          src="/placeholder.svg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-1/2 p-6 flex flex-col justify-between">
        <h3 className="text-2xl font-semibold">Portugal</h3>
        <p className="text-base mt-2 flex-1">
          Classic tour of Portugal&apos;s vibrant cities and cultural heritage,
          including Lisbon, Fatima and the flamboyant architecture of Sintra.
        </p>
        <div className="flex items-center justify-between">
          <div>
            <Link
              className="underline"
              href="#"
              prefetch={false}
              onClick={() => setIsModalOpen(true)}
            >
              See trip details
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="underline bg-white text-base text-black shadow-none border-none hover:none"
            >
              Edit
            </Button>
            <Button
              variant="outline"
              className="text-red-500 text-base bg-white underline shadow-none border-none hover:none"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <TripDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Card>
  );
}
