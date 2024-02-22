import { Helmet } from "react-helmet-async";
import { commonData, metadata, iconData } from "../data";

const SiteHelmet = () => {
	const cspRules = [
		"default-src 'self'",
		"font-src https://fonts.googleapis.com https://fonts.gstatic.com",
	];

	return (
		<Helmet>
			<title>{commonData.title}</title>
			<meta name="description" content={commonData.description} />

			{Object.keys(metadata).map((metaKey, index) => (
				<meta
					key={index}
					name={metaKey}
					content={metadata[metaKey as keyof typeof metadata]}
				/>
			))}

			<meta httpEquiv="Content-Security-Policy" content={cspRules.join(";")} />

			<link rel="icon" href="/favicon.ico" type="image/x-icon" />
			{iconData.map((ico, index) => (
				<link
					key={index}
					rel={ico.rel}
					type="image/png"
					sizes={ico.sizes}
					href={ico.href}
				/>
			))}
			<link rel="manifest" href="/site.webmanifest" />
		</Helmet>
	);
};

export default SiteHelmet;
