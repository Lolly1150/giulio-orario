import type { calendarInterface } from "./interfaces";

const calendar: calendarInterface = {
  1: {
    1: {
      prof: "Benvenuti Alessandro",
      subject: "LETTERE",
    },
    2: {
      prof: "Benvenuti Alessandro",
      subject: "LETTERE",
    },
    3: {
      prof: "Gandolfi Michele",
      subject: "RELIGIONE",
    },
    4: {
      prof: "Delsoldato Rossella",
      subject: "MAT - COMPLEMENTI",
    },
    5: {
      prof: "Delsoldato Rossella",
      subject: "MATEMATICA",
    },
    6: {
      prof: "",
      subject: "",
    },
  },
  2: {
    1: {
      prof: "Raschi Luca - Guido Tania",
      subject: "ELETTRONICA ED ELETTROTECNICA",
    },
    2: {
      prof: "Raschi Luca - Guido Tania",
      subject: "ELETTRONICA ED ELETTROTECNICA",
    },
    3: {
      prof: "Cucchi Mauro",
      subject: "SISTEMI",
    },
    4: {
      prof: "Cucchi Mauro",
      subject: "SISTEMI",
    },
    5: {
      prof: "Barzieri Maurizio - Guido Tania",
      subject: "TDP",
    },
    6: {
      prof: "",
      subject: "",
    },
  },
  3: {
    1: {
      prof: "Trolli Erick",
      subject: "SC. MOTORIE e SPORTIVE",
    },
    2: {
      prof: "Trolli Erick",
      subject: "SC. MOTORIE e SPORTIVE",
    },
    3: {
      prof: "Barzieri Maurizio - Guido Tania",
      subject: "TDP",
    },
    4: {
      prof: "Rugiano Alessandra",
      subject: "INGLESE",
    },
    5: {
      prof: "SUPPLENZA",
      subject: "SISTEMI",
    },
    6: {
      prof: "",
      subject: "",
    },
  },
  4: {
    1: {
      prof: "Barzieri Maurizio - Guido Tania",
      subject: "TDP",
    },
    2: {
      prof: "Delsoldato Rossela",
      subject: "MATEMATICA",
    },
    3: {
      prof: "Rugiano Alessandra",
      subject: "INGLESE",
    },
    4: {
      prof: "SUPPLENZA",
      subject: "SISTEMI",
    },
    5: {
      prof: "Benvenuti Alessandro",
      subject: "LETTERE",
    },
    6: {
      prof: "",
      subject: "",
    },
  },
  5: {
    1: {
      prof: "Rugiano Alessandra",
      subject: "INGLESE",
    },
    2: {
      prof: "Barzieri Maurizio",
      subject: "TDP",
    },
    3: {
      prof: "Raschi Luca - Guido Ta",
      subject: "ELETTRONICA ED ELETTROTECNICA",
    },
    4: {
      prof: "Raschi Luca - Guido Ta",
      subject: "ELETTRONICA ED ELETTROTECNICA",
    },
    5: {
      prof: "Benvenuti Alessandro",
      subject: "LETTER",
    },
    6: {
      prof: "",
      subject: "",
    },
  },
  6: {
    1: {
      prof: "Raschi Luca - Guido Ta",
      subject: "ELETTRONICA ED ELETTROTECNICA",
    },
    2: {
      prof: "Raschi Luca - Guido Ta",
      subject: "ELETTRONICA ED ELETTROTECNICA",
    },
    3: {
      prof: "Cucchi Mauro",
      subject: "SISTEMI",
    },
    4: {
      prof: "Benvenuti Alessandro",
      subject: "LETTERE",
    },
    5: {
      prof: "Delsoldato Rossella",
      subject: "MATEMATICA",
    },
    6: {
      prof: "",
      subject: "",
    },
  },
  0: {
    1: {
      prof: "",
      subject: "",
    },
    2: {
      prof: "",
      subject: "",
    },
    3: {
      prof: "",
      subject: "",
    },
    4: {
      prof: "",
      subject: "",
    },
    5: {
      prof: "",
      subject: "",
    },
    6: {
      prof: "",
      subject: "",
    },
  },
};

export function getHours(day: number) {
  switch (day) {
    case 1:
      {
        return calendar[1];
      }
      break;
    case 2:
      {
        return calendar[2];
      }
      break;
    case 3:
      {
        return calendar[3];
      }
      break;
    case 4:
      {
        return calendar[4];
      }
      break;
    case 5:
      {
        return calendar[5];
      }
      break;
    case 6:
      {
        return calendar[6];
      }
      break;

    case 0:
      {
        return calendar[0];
      }
      break;

    default:
      {
        return;
      }
      break;
  }
}
export { calendar };
