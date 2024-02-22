import { ReactNode } from "react";
import { HandleClipboardCopy } from ".";

const ClipboardLink = ({
	dataValue,
	children,
	isButton = false,
}: {
	dataValue: string;
	children: ReactNode;
	isButton?: boolean;
}) => {
	return isButton ? (
		<button
			className="btn btn-outline btn-primary m-2"
			data-value={dataValue}
			onClick={() => HandleClipboardCopy(dataValue)}>
			{children}
		</button>
	) : (
		<a data-value={dataValue} onClick={() => HandleClipboardCopy(dataValue)}>
			{children}
		</a>
	);
};

export default ClipboardLink;
