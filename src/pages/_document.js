import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<meta name='apple-mobile-web-app-title' content='' />
				<meta name='theme-color' content='#6821e0' />
				<link rel='manifest' href='/site.webmanifest'></link>
				<link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
				<meta name='application-name' content='Foreon' />
				<meta name='description' content='Foreon Netwotk! Foreon NetWork! Foreon Network! Foreon Network!' />
				<meta name='keywords' content='Foreon, btc, blockchain, dapp, dex, NFT, community, Blockchain' />
				<meta property='og:title' content='Foreon' />
				<meta property='og:site_name' content='Foreon' />
				<meta property='og:url' content='https://foreon.com/' />
				<meta
					property='og:description'
					content='Foreon Netwotk! Foreon NetWork! Foreon Network! Foreon Network!'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:rich_attachment' content='true' />
				<meta property='og:image' content='https://foreon.com/assets/twiter-BWBG.png' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content='Foreon Network' />
				<meta name='twitter:creator' content='Foreon Network' />
				<meta name='twitter:site' content='@foreonnetwork' />
				<meta name='twitter:image' content='https://foreon.com/assets/twiter-BWBG.png' />
				<meta name='twitter:image:alt' content='Foreon Network' />
				<meta
					name='twitter:description'
					content='Foreon Netwotk! Foreon NetWork! Foreon Network! Foreon Network!'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
