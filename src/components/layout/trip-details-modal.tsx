import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import TimelineItem from "./timeline-item";

interface TripDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const items = [
  {
    day: 1,
    title: "Lisbon",
    description:
      "Explore the oldest parts of the city to admire the ornate architecture or simply enjoy the views of the River Tagus from one of the many riverside cafes and bars.",
  },
  {
    day: 2,
    title: "Sintra",
    description:
      "Excursion to Sintra, an unforgettable town and UNESCO World Heritage Site, filled with 19th-century Romanticist architecture, fairytale castles and exquisite gardens.",
  },
  {
    day: 3,
    title: "Obidos",
    description:
      "One of the best-known villages in Portugal thanks to its magical cobblestone streets and charming architecture, enclosed within medieval city walls. Next, visit Nazare, a surfers paradise, home to some of the largest waves in the world.",
  },
  {
    day: 4,
    title: "Porto",
    description:
      "Uncover the history of the Templars in Portugal, including the beautiful medieval chapel and the ornate cloister, a masterpiece of Renaissance architecture. Explore this fascinating UNESCO World Heritage site before continuing to the city of Coimbra.",
  },
];

const TripDetailsModal = ({ isOpen, onClose }: TripDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] h-[85vh] overflow-hidden flex flex-col p-4">
        <div className="mt-4 flex-1 overflow-y-auto">
          <div className="relative w-full h-[250px]">
            <Image
              alt="Portugal landscape"
              className="object-cover rounded-xl"
              fill
              src="/placeholder.svg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <DialogTitle className="text-[32px] font-normal">
            Portugal
          </DialogTitle>
          <div className="flex items-center text-muted-foreground gap-2">
            <CircleCheck className="size-5" />
            <h2 className="text-base">Mark as completed</h2>
          </div>

          <div className="mt-6 space-y-5">
            <p className="text-base">
              Classic tour of Portugal&apos;s vibrant cities and cultural
              heritage, including Lisbon, Fatima and the flamboyant architecture
              of Sintra.
            </p>

            <Separator className="my-6" />

            <div className="space-y-5">
              <h3 className="text-2xl">Itinerary</h3>
              <div>
                {items.map((item, index) => (
                  <TimelineItem
                    key={item.day}
                    day={item.day}
                    title={item.title}
                    description={item.description}
                    isLast={index === items.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TripDetailsModal;
