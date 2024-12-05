import { Helmet } from "react-helmet-async";

function HomeSEO() {
  return (
    <Helmet>
      <title>Personlig Träning i Norrköping | Henrik Ek Träning</title>
      <meta 
        name="description" 
        content="Letar du efter personlig träning i Norrköping? Henrik Ek Träning erbjuder skräddarsydda träningsprogram för att hjälpa dig nå dina mål." 
      />
      <meta 
        name="keywords" 
        content="personlig träning Norrköping, PT Norrköping, Henrik Ek, träning, hälsa, styrketräning, rölighet, rehabilitering, Norrköping" 
      />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Henrik Ek Träning",
            "description": "Personlig träning i Norrköping för att hjälpa dig nå dina träningsmål.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Drottninggatan 59",
              "addressLocality": "Norrköping",
              "postalCode": "60200",
              "addressCountry": "SE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 58.587745,
              "longitude": 16.192421
            },
            "url": "https://dinwebbplats.se",
            "telephone": "+46111234567"
          }
        `}
      </script>
    </Helmet>
  );
}

export default HomeSEO;