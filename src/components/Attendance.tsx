import { MyModal } from ".";
import { conAttendance } from "../data";

function MyDateParser(thisDate: Date) {
  const options: Intl.DateTimeFormatOptions = { month: "short" };
  return `${thisDate.getDate()} ${thisDate.toLocaleString("default", options)} ${thisDate.getFullYear()}`;
}

function isComingSoon(startDate: Date, endDate: Date) {
  const todaysDate = new Date();
  if (todaysDate < startDate)
    return <span className="text-accent font-light">(soon)</span>;
  if (todaysDate <= endDate)
    return <span className="text-secondary font-light">(Ongoing!)</span>;

  return null;
}

const AttendanceAccordion = () => {
  const accordionName = "accordion-conAttendance";

  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth();

  return (
    <div className="join join-vertical bg-base-100 w-full">
      {Object.keys(conAttendance)
        // .reverse()
        .sort((a, b) => parseInt(b) - parseInt(a)) // sort years in descending order
        .filter(
          (attYear) =>
            // display entries for next year if it's currently December (thisMonth >= 11)
            // otherwise show only all entries up to this year
            (thisMonth >= 11 && parseInt(attYear) <= thisYear + 1) ||
            parseInt(attYear) <= thisYear,
        )
        .map((attYear, key) => (
          <div
            key={key}
            className="collapse-arrow join-item border-primary text-primary collapse border"
          >
            <input type="checkbox" name={accordionName} />
            <div className="collapse-title font-semibold">
              {attYear}{" "}
              {parseInt(attYear) - new Date().getFullYear() == 0 && `⭐`}
            </div>
            <div className="collapse-content text-left text-sm">
              <ul className="list-[circle] ps-4">
                {conAttendance[parseInt(attYear)].map((con, key) => (
                  <li key={key} className="py-1">
                    <span className="font-medium">
                      {MyDateParser(con.startDate)} -{" "}
                      {MyDateParser(con.endDate)} ({con.timeZone})
                    </span>
                    <br />
                    {con.name} {isComingSoon(con.startDate, con.endDate)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

const Attendance = () => {
  const modalId = "modal_attendance";
  const title = "Con Attendance";

  return (
    <>
      <MyModal modalId={modalId} title={title}>
        <AttendanceAccordion />

        <p className="text-sm">
          If you are attending any one of these cons, come and say hi!
        </p>
      </MyModal>
    </>
  );
};

export default Attendance;
