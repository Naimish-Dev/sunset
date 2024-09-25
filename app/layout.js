import { Roboto } from "next/font/google";
import "./globals.css";
import Conact from "./components/Conact";
import { Footer } from "./components/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Damac Sun City",
  description: "Damac Sun City at Dubailand by Damac Properties",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Explore the latest apartments for sale and new developments in Dubai. The Acres Villas Now in dubai, It's just starting from 5.5 M AED."
        />
        {/* 
        <meta
          name="keywords"
          content="apartment for sale, 1 bedroom apartment, 1 bed apartments, new developments in dubai, palace residence dubai hills estate, apartments dubai, apartments for sale near me, 3 bedroom apartments, residence apartments, emaar property, emaar projects, dubai hills estate, The Palace residence, branded apartment, 2 bed apartments, new downtown dubai, dubai hills, palace residence dubai hills, palace residence, palace residences dubai hills estate, emaar flats, emaar hills, emaar real estate, emaar development, 1 bed room apartments, emaar properties group, emaar houses, beachfront by emaar, palace residence apartment, project near downtown, emaar central plaza, emaar beachfront buy, 3 bed apartments, emaar villas, emaar properties list, emaar palace residences, 5-Star Branded Residence, new apartment launch by emaar, new invesment option, emaar website, branded residence, new flats for sale near me, dubai hills near me, new off plan project, Palace Residences at Dubai Hills Estate, emaar new launch, emaar developers, town homes near me, emaar latest projects, emaar waterfront, by emaar, apartment in community, New project by emaqar, new apartment launch, dubai hills apartments emaar, the palace residence, new residencial project, 2 bed room apartments, emaar apartments, Branded Residence, new project in Dubai hills"
        />
        <meta
          property="og:title"
          content="Apartment Listings | Dubai Hills Estate"
        />
        <meta
          property="og:description"
          content="Explore the latest apartments for sale and new developments in Dubai Hills Estate by Emaar Properties. Find 1-bedroom, 2-bedroom, and 3-bedroom apartments at Palace Residences and other branded residences near Downtown Dubai."
        />
        <meta property="og:type" content="website" /> */}

        <link rel="icon" href="favicon.ico" />
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16561901636"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16553376594');`,
          }}
        />

        <Script>
          {`gtag('event', 'conversion', { 'send_to': 'AW-16561901636/SoZbCOCHxq8ZEMSgqtk9', 'value': 10.0, 'currency': 'AED' })`}
        </Script>

        <Script>{`gtag('config', 'AW-16561901636')`}</Script> */}
     <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16679540466"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16679540466');
            `,
          }}
        />
            </head>
      <Conact />
      <body className={roboto.className}>{children}</body>
      <Footer />
    </html>
  );
}
