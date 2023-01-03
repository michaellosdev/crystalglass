import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "5zenupgn", // find this at manage.sanity.io or in your sanity.json
  dataset: "crystalglass-sanity", // this is from those question during 'sanity init'
  useCdn: true,
});