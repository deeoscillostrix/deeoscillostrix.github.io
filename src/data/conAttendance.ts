// const timezoneOffsets = {
//   cet: "+02:00", // Central European Time

//   // Indonesia
//   wib: "+07:00", // Western Indonesian Time / Waktu Indonesia Barat
//   wita: "+08:00", // Central Indonesian Time / Waktu Indonesia Tengah
//   wit: "+09:00", // Eastern Indonesian Time / Waktu Indonesia Timur

//   sgt: "+08:00",
//   myt: "+08:00",
// };

// IANA Zones
const timezones = {
  eu_sweden: "Europe/Stockholm",

  id_bali: "Asia/Makassar",
  id_jakarta: "Asia/Jakarta",

  my_borneo: "Asia/Kuching",
  my_kl: "Asia/Kuala_Lumpur",

  singapore: "Asia/Singapore",
};

const defaultMidnight = "T00:00:00";

export interface Event {
  name: string;
  startDate: Date;
  endDate: Date;
  timeZone: string;
  venue?: string;
  theme?: string;

  ticketNo?: number;
  tier?: string;
}

const conNames = {
  bah: "Borneo Anthro Hub 🇲🇾",
  furum: "Furs Upon Malaysia 🇲🇾",
  iwag: "Indonesian Weekend Anthro Gathering 🇮🇩", // wib
  lifc: "Little Island Fur Con 🇸🇬",
  myfur: "MYFur 🇲🇾",
  nfc: "Nordic FuzzCon 🇸🇪", // cet
  pawai: "Party Along with Anthro Indonesia 🇮🇩", // wita
  waff: "WA Fur Frenzy 🇦🇺",
};

const attendance: { [year: number]: Event[] } = {
  2023: [
    {
      name: conNames.lifc,
      startDate: new Date(`2023-06-10${defaultMidnight}`),
      endDate: new Date(`2023-06-11${defaultMidnight}`),
      timeZone: timezones.singapore,
      venue: "Resorts World Sentosa Convention Centre",
      theme: "Swords & Sorcery",

      ticketNo: 171,
      tier: "Attendee",
    },
  ],
  2024: [
    {
      name: conNames.lifc,
      startDate: new Date(`2024-07-06${defaultMidnight}`),
      endDate: new Date(`2024-07-07${defaultMidnight}`),
      timeZone: timezones.singapore,
      venue: "One Farrer Hotel",
      theme: "Bloom and Gloom",

      ticketNo: 93,
      tier: "Attendee",
    },
    {
      name: conNames.furum,
      venue: "Hotel Armada PJ",
      theme: "Furkini Bottom",
      timeZone: timezones.my_kl,
      startDate: new Date(`2024-12-07${defaultMidnight}`),
      endDate: new Date(`2024-12-08${defaultMidnight}`),

      ticketNo: 858,
      tier: "Sponsor",
    },
  ],
  2025: [
    {
      name: conNames.lifc,
      startDate: new Date(`2025-06-14${defaultMidnight}`),
      endDate: new Date(`2025-06-15${defaultMidnight}`),
      timeZone: timezones.singapore,
      venue: "One Farrer Hotel",
      theme: "Retro Arcade",

      ticketNo: 94,
      tier: "Sponsor",
    },
    {
      name: conNames.iwag,
      startDate: new Date(`2025-07-12${defaultMidnight}`),
      endDate: new Date(`2025-07-13${defaultMidnight}`),
      timeZone: timezones.id_jakarta,
      venue: "ibis Styles BSD",
      theme: "IWAG: Return of the Wild",

      ticketNo: 534,
      tier: "Pathfindeer",
    },
    {
      name: conNames.furum,
      startDate: new Date(`2025-12-13${defaultMidnight}`),
      endDate: new Date(`2025-12-14${defaultMidnight}`),
      timeZone: timezones.my_kl,
      venue: "Hotel Armada PJ",
      theme: "Fur Piece",

      ticketNo: 300,
      tier: "First Mate",
    },
  ],
  2026: [
    // {
    //   name: conNames.myfur,
    //   startDate: new Date(`2026-05-02${defaultMidnight}`),
    //   endDate: new Date(`2026-05-02${defaultMidnight}`),
    //   timeZone: timezones.my_kl,
    //   venue: "Dorsett Grand Subang",
    //   theme: "MYFur's Got Talent",

    //   ticketNo: ,
    //   tier: "",
    // },
    // {
    //   name: conNames.lifc,
    //   startDate: new Date(`2026-06-13${defaultMidnight}`),
    //   endDate: new Date(`2026-06-14${defaultMidnight}`),
    //   timeZone: timezones.singapore,
    //   venue: "One Farrer Hotel",
    //   theme: "Mission Impawssible",

    //   // ticketNo: ,
    //   // tier: "Sponsor",
    // },
    {
      name: conNames.bah,
      startDate: new Date(`2026-06-20${defaultMidnight}`),
      endDate: new Date(`2026-06-21${defaultMidnight}`),
      timeZone: timezones.my_borneo,
      venue: "Horizon Hotel Kota Kinabalu",
      theme: "Adventure Below the Wind",

      ticketNo: 75, // SS-75
      tier: "Super Sponsor",
    },
    // {
    //   name: conNames.iwag,
    //   startDate: new Date(`2026-07-04${defaultMidnight}`),
    //   endDate: new Date(`2026-07-05${defaultMidnight}`),
    //   timeZone: timezones.id_jakarta,
    //   venue: "ibis Styles BSD",
    //   theme: "Electric Dreams",

    //   // ticketNo: ,
    //   // tier: "Cipher",
    // },
  ],
};

export default attendance;
