const Calendar = () => {
  const modalId = "modal_calendar";
  const title = "Oscillo's Calendar";

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
        <div className="modal-box w-full lg:w-11/12 max-w-7xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3>{title}</h3>

          <p>
            If you're on a larger screen, you may switch views from the
            "Schedule" to "Month" to have a better overview of events!
          </p>

          {/* <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKuala_Lumpur&showPrint=0&title=Oscillo's%20Calendar&src=ZGU4MmUyMThmMmZiODY4NTNmZWE1ZWJlNmY2MjU0ZmYxMWRjNDZiZDEyNDZiOGZkNGQ1OTVjZmVhNjljODkwY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300"
            // width="800"
            // height="600"
            // scrolling="no"
          ></iframe> */}
          {/* <iframe src="https://calendar.google.com/calendar/embed?wkst=1&ctz=Asia%2FKuala_Lumpur&showPrint=0&title=Oscillo's%20Calendar&mode=AGENDA&src=ZGU4MmUyMThmMmZiODY4NTNmZWE1ZWJlNmY2MjU0ZmYxMWRjNDZiZDEyNDZiOGZkNGQ1OTVjZmVhNjljODkwY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300"></iframe> */}
        </div>
      </dialog>
    </>
  );
};

export default Calendar;
