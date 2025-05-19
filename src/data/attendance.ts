interface Registration {
  [year: number]: {
    ticketNo?: number;
    tier?: string;
    venue?: string;
    theme?: string;
    startDate: Date;
    endDate: Date;
  };
}

interface Event {
  name: string;
  location?: string;
  registrations: Registration;
}

interface Attendance {
  [eventId: string]: Event;
}

const timezones = {
  idt: "GMT+7",
  sgt: "GMT+8",
  myt: "GMT+8",
};

const attendance: Attendance = {
  lifc: {
    name: "Little Island Fur Con",
    location: "Singapore",

    registrations: {
      2023: {
        ticketNo: 171,
        tier: "Attendee",
        venue: "Resorts World Sentosa Convention Centre",
        theme: "Swords & Sorcery",
        startDate: new Date(`2023-06-10 ${timezones.sgt}`),
        endDate: new Date(`2023-06-11 ${timezones.sgt}`),
      },
      2024: {
        ticketNo: 93,
        tier: "Attendee",
        venue: "One Farrer Hotel",
        theme: "Bloom and Gloom",
        startDate: new Date(`2024-07-06 ${timezones.sgt}`),
        endDate: new Date(`2024-07-07 ${timezones.sgt}`),
      },
      2025: {
        ticketNo: 94,
        tier: "Attendee",
        venue: "One Farrer Hotel",
        theme: "Retro Arcade",
        startDate: new Date(`2025-06-14 ${timezones.sgt}`),
        endDate: new Date(`2025-06-15 ${timezones.sgt}`),
      },
    },
  },

  furum: {
    name: "Furs Upon Malaysia",
    location: "Malaysia",

    registrations: {
      2024: {
        ticketNo: 858,
        tier: "Sponsor",
        venue: "Hotel Armada PJ",
        theme: "Furkini Bottom",
        startDate: new Date(`2024-12-07 ${timezones.myt}`),
        endDate: new Date(`2024-12-08 ${timezones.myt}`),
      },
      2025: {
        venue: "Hotel Armada PJ",
        theme: "Fur Piece",
        startDate: new Date(`2025-12-06 ${timezones.myt}`),
        endDate: new Date(`2025-12-07 ${timezones.myt}`),
      },
    },
  },

  iwag: {
    name: "Indonesia Weekend Anthro Gathering",
    location: "Indonesia",

    registrations: {
      2025: {
        ticketNo: 534,
        tier: "Pathfindeer",
        venue: "ibis Styles BSD",
        theme: "IWAG: Return of the Wild",
        startDate: new Date(`2025-07-12 ${timezones.idt}`),
        endDate: new Date(`2025-07-12 ${timezones.idt}`),
      },
    },
  },
};

export default attendance;
