import { BriefcaseBusiness, Factory, HardHat, HeartPulse, Hotel, SearchCheck, Store, Truck, UsersRound, Wrench, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  hardhat: HardHat,
  heart: HeartPulse,
  building: Hotel,
  truck: Truck,
  factory: Factory,
  wrench: Wrench,
  store: Store,
  briefcase: BriefcaseBusiness,
  users: UsersRound,
  search: SearchCheck,
};

export function SectorIcon({ name, size = 28, strokeWidth = 1.7 }: { name: string; size?: number; strokeWidth?: number }) {
  const Icon = icons[name] ?? BriefcaseBusiness;
  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}
