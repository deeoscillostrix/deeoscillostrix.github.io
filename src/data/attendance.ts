const timezones = {
  idt: "+07:00",
  sgt: "+08:00",
  myt: "+08:00",
};

const defaultMidnight = "T00:00:00";

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
      startDate: new Date(`2023-06-10${defaultMidnight}${timezones.sgt}`),
      endDate: new Date(`2023-06-11${defaultMidnight}${timezones.sgt}`),
      venue: "Resorts World Sentosa Convention Centre",
      theme: "Swords & Sorcery",

      ticketNo: 171,
      tier: "Attendee",
    },
  ],
  2024: [
    {
      name: conNames.lifc,
      startDate: new Date(`2024-07-06${defaultMidnight}${timezones.sgt}`),
      endDate: new Date(`2024-07-07${defaultMidnight}${timezones.sgt}}`),
      venue: "One Farrer Hotel",
      theme: "Bloom and Gloom",

      ticketNo: 93,
      tier: "Attendee",
    },
    {
      name: conNames.furum,
      venue: "Hotel Armada PJ",
      theme: "Furkini Bottom",
      startDate: new Date(`2024-12-07${defaultMidnight}${timezones.myt}`),
      endDate: new Date(`2024-12-08${defaultMidnight}${timezones.myt}`),

      ticketNo: 858,
      tier: "Sponsor",
    },
  ],
  2025: [
    {
      name: conNames.lifc,
      startDate: new Date(`2025-06-14${defaultMidnight}${timezones.sgt}`),
      endDate: new Date(`2025-06-15${defaultMidnight}${timezones.sgt}`),
      venue: "One Farrer Hotel",
      theme: "Retro Arcade",

      ticketNo: 94,
      tier: "Sponsor",
    },
    {
      name: conNames.iwag,
      startDate: new Date(`2025-07-12${defaultMidnight}${timezones.idt}`),
      endDate: new Date(`2025-07-13${defaultMidnight}${timezones.idt}`),
      venue: "ibis Styles BSD",
      theme: "IWAG: Return of the Wild",

      ticketNo: 534,
      tier: "Pathfindeer",
    },
    {
      name: conNames.furum,
      startDate: new Date(`2025-12-06${defaultMidnight}${timezones.myt}`),
      endDate: new Date(`2025-12-07${defaultMidnight}${timezones.myt}`),
      venue: "Hotel Armada PJ",
      theme: "Fur Piece",
    },
  ],
};

export default attendance;
