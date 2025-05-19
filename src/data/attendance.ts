const timezones = {
  idt: "GMT+7",
  sgt: "GMT+8",
  myt: "GMT+8",
};

interface Event {
  name: string;
  startDate: Date;
  endDate: Date;
  venue?: string;
  theme?: string;

  ticketNo?: number;
  tier?: string;
}

const conNames = {
  furum: "Furs Upon Malaysia",
  iwag: "Indonesian Weekend Anthro Gathering",
  lifc: "Little Island Fur Con",
};

const attendance: { [year: number]: Event[] } = {
  2023: [
    {
      name: conNames.lifc,
      startDate: new Date(`2023-06-10 ${timezones.sgt}`),
      endDate: new Date(`2023-06-11 ${timezones.sgt}`),
      venue: "Resorts World Sentosa Convention Centre",
      theme: "Swords & Sorcery",

      ticketNo: 171,
      tier: "Attendee",
    },
  ],
  2024: [
    {
      name: conNames.lifc,
      startDate: new Date(`2024-07-06 ${timezones.sgt}`),
      endDate: new Date(`2024-07-07 ${timezones.sgt}`),
      venue: "One Farrer Hotel",
      theme: "Bloom and Gloom",

      ticketNo: 93,
      tier: "Attendee",
    },
    {
      name: conNames.furum,
      venue: "Hotel Armada PJ",
      theme: "Furkini Bottom",
      startDate: new Date(`2024-12-07 ${timezones.myt}`),
      endDate: new Date(`2024-12-08 ${timezones.myt}`),

      ticketNo: 858,
      tier: "Sponsor",
    },
  ],
  2025: [
    {
      name: conNames.lifc,
      startDate: new Date(`2025-06-14 ${timezones.sgt}`),
      endDate: new Date(`2025-06-15 ${timezones.sgt}`),
      venue: "One Farrer Hotel",
      theme: "Retro Arcade",

      ticketNo: 94,
      tier: "Sponsor",
    },
    {
      name: conNames.iwag,
      startDate: new Date(`2025-07-12 ${timezones.idt}`),
      endDate: new Date(`2025-07-13 ${timezones.idt}`),
      venue: "ibis Styles BSD",
      theme: "IWAG: Return of the Wild",

      ticketNo: 534,
      tier: "Pathfindeer",
    },
    {
      name: conNames.furum,
      startDate: new Date(`2025-12-06 ${timezones.myt}`),
      endDate: new Date(`2025-12-07 ${timezones.myt}`),
      venue: "Hotel Armada PJ",
      theme: "Fur Piece",
    },
  ],
};

export default attendance;
