import { Helmet } from "react-helmet-async";

export default function GSEO({
  title,
  description = "Front end web developer and technical writer - always learning - nefejames",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}