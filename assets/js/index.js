document.querySelectorAll(`.btn-copyData`).forEach((e) => {
    e.addEventListener(`click`, () => {
        navigator.clipboard.writeText(e.dataset.value).then(
            () => {
                alert(`Copied: ${e.dataset.value}`);
            },
            function () {
                alert(`Oops, something went wrong copying the value!`);
            }
        );
    });
});
