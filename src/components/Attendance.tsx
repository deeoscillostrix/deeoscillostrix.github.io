import { conAttendance, modalSizes } from "../data";

function MyDateParser(thisDate: Date) {
  return `${thisDate.getDate()} ${thisDate.toLocaleString("default", { month: "long" })} ${thisDate.getFullYear()}`;
}

function isComingSoon(startDate: Date, endDate: Date) {
  const todaysDate = new Date();
  if (todaysDate < startDate)
    return <span className="font-light text-accent">(soon)</span>;
  if (todaysDate < endDate)
    return <span className="font-light text-secondary">(Ongoing!)</span>;

  return "";
}

const AttendanceAccordion = () => {
  const accordionName = "accordion-conAttendance";

  return (
    <div className="join join-vertical bg-base-100 w-full">
      {Object.keys(conAttendance)
        .reverse()
        .map((attYear, key) => (
          <div
            key={key}
            className="collapse collapse-arrow join-item border border-primary text-primary"
          >
            {/* <input type="radio" name="my-accordion-4" defaultChecked /> */}
            <input type="checkbox" name={accordionName} />
            <div className="collapse-title font-semibold">
              {attYear}{" "}
              {parseInt(attYear) - new Date().getFullYear() == 0 && `⭐`}
            </div>
            <div className="collapse-content text-sm text-left">
              <ul className="list-[circle] ps-4">
                {conAttendance[parseInt(attYear)].map((con, key) => (
                  <li key={key} className="py-1">
                    <span className="font-medium">
                      {MyDateParser(con.startDate)} -{" "}
                      {MyDateParser(con.endDate)}
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
      <button
        className="btn btn-primary btn-outline m-2"
        onClick={() => {
          const modal = document.querySelector(
            `#${modalId}`
          ) as HTMLDialogElement;
          modal!.showModal();
        }}
      >
        {title}
      </button>
      <dialog id={modalId} className="modal">
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
        <div className={modalSizes.small}>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3>{title}</h3>

          <div className="lg:w-5/6 mx-auto">
            <AttendanceAccordion />

            <p className="text-sm">
              If you are attending any one of these cons too, do feel free to
              come and say hi!
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Attendance;
