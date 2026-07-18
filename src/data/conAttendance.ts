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
  am_est: "America/New_York", // UTC-5, EST

  au_bne: "Australia/Brisbane", // UTC+10, AEST
  au_per: "Australia/Perth", // UTC+9, AWST

  eu_london: "Europe/London", // UTC, GMT
  eu_sweden: "Europe/Stockholm", // UTC+1, CEST

  id_bali: "Asia/Makassar", // UTC+8, WITA
  id_jakarta: "Asia/Jakarta", // UTC+7, WIB

  my_borneo: "Asia/Kuching",
  my_kl: "Asia/Kuala_Lumpur",

  singapore: "Asia/Singapore",
};

const defaultMidnight = "T00:00:00";
const beforeMidnight = "T23:59:59";

export interface Event {
  name: string;
  startDate: Date;
  endDate: Date;
  timeZone: string;
  venue?: string;
  theme?: string;
  website?: string;

  ticketNo?: number | -1;
  tier?: string;
}

const conNames = {
  ac: "Anthrocon 🇺🇸", // am_est
  bah: "Borneo Anthro Hub 🇲🇾",
  cfz: "Confuzzled 🇬🇧", // eu_london
  furdu: "Furry Down Under 🇦🇺", // au_bne
  furdu_tot: "Furry Down Under: Tails of Terror 🇦🇺", // au_bne
  furum: "Furs Upon Malaysia 🇲🇾",
  fwa: "Furry Weekend Atlanta 🇺🇸", // am_est
  iwag: "Indonesian Weekend Anthro Gathering 🇮🇩", // id_jakarta
  lifc: "Little Island Fur Con 🇸🇬",
  myfur: "MYFur 🇲🇾",
  nfc: "Nordic FuzzCon 🇸🇪", // eu_sweden
  pawai: "Party Along with Anthro Indonesia 🇮🇩", // id_bali
  waff: "WA Fur Frenzy 🇦🇺", //au_per
};

const conWebsites = {
  archive: {
    iwag: "https://iwag-archive.furries.id/",
    nfc: "https://archive.nordicfuzzcon.org/year/",
  },

  ac: "https://www.anthrocon.org/",
  bah: "https://borneoanthrohub.com/",
  cfz: "https://confuzzled.org.uk/",
  furum: "https://furum.org/",
  furdu: "https://furdu.com.au/",
  fwa: "https://furryweekend.com/",
  iwag: "https://iwag.furries.id/en/",
  lifc: "https://www.littleislandfur.com/",
  myfur: "https://myfur.org/",
  nfc: "https://nordicfuzzcon.org/",
  pawai: "https://pawai.id/",
  waff: "https://waff.net.au/",
};

const attendance: { [year: number]: Event[] } = {
  2023: [
    {
      name: conNames.lifc,
      startDate: new Date(`2023-06-10${defaultMidnight}`),
      endDate: new Date(`2023-06-11${beforeMidnight}`),
      timeZone: timezones.singapore,
      venue: "Resorts World Sentosa Convention Centre",
      theme: "Swords & Sorcery",

      ticketNo: 171,
      tier: "Attendee",
      website: `${conWebsites.lifc}2023`,
    },
  ],
  2024: [
    {
      name: conNames.lifc,
      startDate: new Date(`2024-07-06${defaultMidnight}`),
      endDate: new Date(`2024-07-07${beforeMidnight}`),
      timeZone: timezones.singapore,
      venue: "One Farrer Hotel",
      theme: "Bloom and Gloom",

      ticketNo: 93,
      tier: "Attendee",
      website: `${conWebsites.lifc}2024`,
    },
    {
      name: conNames.furum,
      venue: "Hotel Armada PJ",
      theme: "Furkini Bottom",
      timeZone: timezones.my_kl,
      startDate: new Date(`2024-12-07${defaultMidnight}`),
      endDate: new Date(`2024-12-08${beforeMidnight}`),

      ticketNo: 858,
      tier: "Sponsor",
      website: `${conWebsites.furum}2024`,
    },
  ],
  2025: [
    {
      name: conNames.lifc,
      startDate: new Date(`2025-06-14${defaultMidnight}`),
      endDate: new Date(`2025-06-15${beforeMidnight}`),
      timeZone: timezones.singapore,
      venue: "One Farrer Hotel",
      theme: "Retro Arcade",

      ticketNo: 94,
      tier: "Sponsor",
      website: `${conWebsites.lifc}2025`,
    },
    {
      name: conNames.iwag,
      startDate: new Date(`2025-07-12${defaultMidnight}`),
      endDate: new Date(`2025-07-13${beforeMidnight}`),
      timeZone: timezones.id_jakarta,
      venue: "ibis Styles BSD",
      theme: "IWAG: Return of the Wild",

      ticketNo: 534,
      tier: "Pathfindeer",
      website: `${conWebsites.archive.iwag}2025`,
    },
    {
      name: conNames.furum,
      startDate: new Date(`2025-12-13${defaultMidnight}`),
      endDate: new Date(`2025-12-14${beforeMidnight}`),
      timeZone: timezones.my_kl,
      venue: "Hotel Armada PJ",
      theme: "Fur Piece",

      ticketNo: 300,
      tier: "First Mate",
      website: `${conWebsites.furum}2025`,
    },
  ],
  2026: [
    {
      name: conNames.myfur,
      startDate: new Date(`2026-05-02${defaultMidnight}`),
      endDate: new Date(`2026-05-02${beforeMidnight}`),
      timeZone: timezones.my_kl,
      venue: "Dorsett Grand Subang",
      theme: "MYFur's Got Talent",

      ticketNo: 370,
      tier: "Contestant", // Attendee
      website: `${conWebsites.myfur}2026`,
    },
    {
      name: conNames.lifc,
      startDate: new Date(`2026-06-13${defaultMidnight}`),
      endDate: new Date(`2026-06-14${beforeMidnight}`),
      timeZone: timezones.singapore,
      venue: "One Farrer Hotel",
      theme: "Mission Impawssible",

      ticketNo: 67,
      tier: "Sponsor",
      website: `${conWebsites.lifc}2026`,
    },
    {
      name: conNames.bah,
      startDate: new Date(`2026-06-20${defaultMidnight}`),
      endDate: new Date(`2026-06-21${beforeMidnight}`),
      timeZone: timezones.my_borneo,
      venue: "Horizon Hotel Kota Kinabalu",
      theme: "Adventure Below the Wind",

      ticketNo: 75, // SS-75
      tier: "Super Sponsor",
      website: `${conWebsites.bah}2026`,
    },
    {
      name: conNames.iwag,
      startDate: new Date(`2026-07-04${defaultMidnight}`),
      endDate: new Date(`2026-07-05${beforeMidnight}`),
      timeZone: timezones.id_jakarta,
      venue: "ibis Styles BSD",
      theme: "Electric Dreams",

      ticketNo: 481,
      tier: "Cipher",
      website: `${conWebsites.iwag}`,
    },
    // {
    //   name: conNames.furdu_tot,
    //   startDate: new Date(`2026-10-02${defaultMidnight}`),
    //   endDate: new Date(`2026-10-04${beforeMidnight}`),
    //   timeZone: timezones.au_bne,
    //   venue: "Hotel Grand Chancellor Brisbane",
    //   theme: "What Lies Below",

    //   // ticketNo: -1,
    //   // tier: "Standard",
    //   website: `${conWebsites.furdu}`,
    // },
    {
      name: conNames.furum,
      startDate: new Date(`2026-12-11${defaultMidnight}`),
      endDate: new Date(`2026-12-13${beforeMidnight}`),
      timeZone: timezones.my_kl,
      venue: "M World Hotel Petaling Jaya",
      theme: "FURUM X",

      ticketNo: 265,
      tier: "Super Sponsor",
      website: `${conWebsites.furum}2026`,
    },
  ],
  2027: [
    {
      name: conNames.nfc,
      startDate: new Date(`2027-02-24${defaultMidnight}`),
      endDate: new Date(`2027-02-27${beforeMidnight}`),
      timeZone: timezones.eu_sweden,
      venue: "Clarion Malmö Live",
      theme: "Crime Noir",
      // ticketNo: -1,
      tier: "",
      website: `${conWebsites.nfc}`,
      // website: `${conWebsites.archive.nfc}2026/live`,
    },
    //   {
    //     name: conNames.myfur,
    //     startDate: new Date(`2027-04-24${defaultMidnight}`),
    //     endDate: new Date(`2027-04-25${beforeMidnight}`),
    //     timeZone: timezones.my_kl,
    //     venue: "Hotel Armada PJ",
    //     theme: "FurGear",
    //     // ticketNo: -1,
    //     tier: "",
    //     website: `${conWebsites.myfur}2027`,
    //   },
    //   {
    //     name: conNames.fwa,
    //     startDate: new Date(`2027-05-06${defaultMidnight}`),
    //     endDate: new Date(`2027-05-09${beforeMidnight}`),
    //     timeZone: timezones.am_est,
    //     venue: "Marriott Marquis",
    //     theme: "",
    //     // ticketNo: -1,
    //     tier: "",
    //     website: `${conWebsites.fwa}`,
    //   },
  ],
};

export default attendance;
