const ERROR = {
	404: {
		title: "Page Not Found",
		messages: [
			"Yeah, it seems like we don't have that one here. You lost?",
			"That's a Four-Oh-Four.",
			"There's nothing here.",
			"How did we get here?",
			"Looks like we've got some broken links.",
			"Nope, still not here.",
		],
	},
	403: {
		title: "Forbidden Access",
		messages: [
			"You probably didn't see this coming.",
			"Perhaps it's best you don't see what's here atm.",
			"I'm sorry, who are you?",
			"At least the response was.. cold.",
			"SnowTrap used Snow Ball! It's super effective!",
			"SnowTrap, a Grass/Ice type. Usually calm, but will shoot snowballs if provoked.",
		],
	},
	401: {
		title: "Invalid Credentials",
		messages: [
			"Impostor flashbacks are coming in pretty quick here.",
			"It's okay. Crazy Dave did forget the keys to his car once.",
			"Between red, green, and blue.. I got nothing.",
			"On the bright side.. if you didn't think it was 'Batman' or 'password', props to you!",
			"They threw out his WHAT!?",
			"What's his password.. what's his password? I'VE GOT NOTHING ON A PASSWORD!",
		],
	},
	default: {
		title: "Unknown Error Code",
		messages: ["I'm sorry, what's that?", "This is not the error page you're looking for."],
	},
};

function displayErrorMessage(error_code) {
	// error code not in [401, 403, 404]
	if (!Object.keys(ERROR).includes(error_code)) {
		console.log(`Unaccounted for error code received: ${error_code}`);
		// error_code = 404;
		document.querySelector(`#message-${error_code}`).innerHTML = ERROR["default"].messages[RANDOM_INDEX];
	}

	// display random error message
	const RANDOM_INDEX = Math.floor(Math.random() * ERROR[error_code].messages.length);
	document.querySelector(`#message-${error_code}`).innerHTML = ERROR[error_code].messages[RANDOM_INDEX];
}

for (let error_code in ERROR) {
	if (document.querySelector(`#message-${error_code}`)) {
		displayErrorMessage(error_code);

		// enable message to change when message is clicked
		document.querySelector(`#message-${error_code}`).onclick = () => displayErrorMessage(error_code);
		document.querySelector(`#message-${error_code}`).style.cursor = "pointer";
	}
}
