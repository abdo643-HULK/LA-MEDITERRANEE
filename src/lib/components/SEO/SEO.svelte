<script lang="ts">
	import defaultFeaturedImage from '$lib/assets/home/home.jpg';
	import defaultOgImage from '$lib/assets/home/home-open-graph.jpg';
	import defaultOgSquareImage from '$lib/assets/home/home-open-graph-square.jpg';
	import defaultTwitterImage from '$lib/assets/home/home-twitter.jpg';
	// import website from '$lib/config/website';
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';
	import Twitter from './Twitter.svelte';

	const website = {
		author: '',
		entity: '',
		facebookAuthorPage: '',
		facebookPage: '',
		ogLanguage: '',
		siteLanguage: '',
		siteShortTitle: '',
		siteTitle: '',
		siteUrl: '',
		githubPage: '',
		linkedinProfile: '',
		telegramUsername: '',
		tiktokUsername: '',
		twitterUsername: '',
	};

	const VERTICAL_LINE_ENTITY = '\u007c';
	const {
		author,
		entity,
		facebookAuthorPage,
		facebookPage,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		githubPage,
		linkedinProfile,
		telegramUsername,
		tiktokUsername,
		twitterUsername,
	} = website;
	export let article = false;
	export let breadcrumbs: string[] = [];
	export let entityMeta = null;
	export let lastUpdated: string;
	export let datePublished: string;
	export let metadescription: string;
	export let slug;
	export let timeToRead = 0;
	export let title;
	const defaultAlt =
		'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';
	// imported props with fallback defaults
	export let featuredImage = {
		url: defaultFeaturedImage,
		alt: defaultAlt,
		width: 672,
		height: 448,
		caption: 'Home page',
	};
	export let ogImage = {
		url: defaultOgImage,
		alt: defaultAlt,
	};
	export let ogSquareImage = {
		url: defaultOgSquareImage,
		alt: defaultAlt,
	};
	export let twitterImage = {
		url: defaultTwitterImage,
		alt: defaultAlt,
	};
	const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
	const url = `${siteUrl}/${slug}`;
	const openGraphProps = {
		article,
		datePublished,
		lastUpdated,
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url,
		...(article ? { datePublished, lastUpdated, facebookPage, facebookAuthorPage } : {}),
	};
	const schemaOrgProps = {
		article,
		author,
		breadcrumbs,
		datePublished,
		entity,
		lastUpdated,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title: pageTitle,
		url,
		facebookPage,
		githubPage,
		linkedinProfile,
		telegramUsername,
		tiktokUsername,
		twitterUsername,
	};
	const twitterProps = {
		article,
		author,
		twitterUsername,
		image: twitterImage,
		timeToRead,
	};
</script>

<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
