const axios = require("axios");
const instagramDownloader = async (insUrl = null) => {
  const options = {
    method: "GET",
    url: "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php",
    params: { url: `${insUrl.toString()}` },
    headers: {
      "X-RapidAPI-Key": "9a80a577a0mshf4132d603d23c0fp18e6a3jsn1f45efbd5227",
      "X-RapidAPI-Host": "instagram-media-downloader.p.rapidapi.com",
    },
  };

  return await axios.request(options);
};
// const data = instagramDownloader(
//   "https://www.instagram.com/reel/CzDpkxTsAtA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
// );
// data.then((response) => console.log(response.data));
module.exports = instagramDownloader;
