import { author, commonData } from ".";

export default {
	// Open Graph data
	"og:type": "profile",
	"og:site_name": `${commonData.title}'s Site`,
	"og:author": author.username,
	"og:url": commonData.url,
	"og:title": commonData.title,
	"og:description": commonData.description,
	"og:image": commonData.image,

	// Twitter Card
	"twitter:card": "summary_large_image",
	"twitter:site": "@deezombiedude",
	"twitter:creator": "@deezombiedude",
	"twitter:url": commonData.url,
	"twitter:title": commonData.title,
	"twitter:description": commonData.description,
	"twitter:image": commonData.image,
};
