import { ReactNode } from "react";
import { HandleClipboardCopy } from ".";

const ClipboardButton = ({
	dataValue,
	children,
	isButton = false,
}: {
	dataValue: string;
	children: ReactNode;
	isButton?: boolean;
}) => {
	if (isButton)
		return (
			<button
				className="btn btn-outline btn-primary m-2"
				data-value={dataValue}
				onClick={() => HandleClipboardCopy(dataValue)}>
				{children}
			</button>
		);
};

export default ClipboardButton;
