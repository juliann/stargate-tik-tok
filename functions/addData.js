const { createClient } = require("@astrajs/collections");

const collection = "tktkposts2";

exports.handler = async function (event, context, callback) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const posts = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

  const data = [
    {
      id: 0,
      name: "Mo Farooq",
      username: "mofarooq32",
      avatar: "https://i.imgur.com/9KYq7VG.png",
      is_followed: true,
      video: "https://i.imgur.com/FTBP02Y.mp4",
      caption: "These ducks are MEGA cute",
      likes: 10,
      comments: 2,
      timestamp: "2019-03-10T09:08:31.020Z",
      button_visible: true,
    },
    {
      id: 1,
      name: "Tim Salowski",
      username: "timmytam",
      avatar: "https://i.imgur.com/rWYtZa6.png",
      is_followed: false,
      video: "https://i.imgur.com/1A7AKoF.mp4",
      caption: "When your fries give you attitude #getInMyBelly",
      likes: 12,
      comments: 2,
      timestamp: "2020-03-10T09:08:31.020Z",
      button_visible: true,
    },
    {
      id: 2,
      name: "Angela Lee",
      username: "angiecakes",
      avatar: "https://i.imgur.com/eX3hkoc.png",
      is_followed: true,
      video: "https://i.imgur.com/al6MLay.mp4",
      caption: "Happiest of Birthdays my Angel",
      likes: 2,
      comments: 4,
      timestamp: "2020-04-10T09:08:31.020Z",
      button_visible: true,
    },
    {
      id: 3,
      name: "Nina Xen",
      username: "nina_lina",
      avatar: "https://i.imgur.com/IigY4Hm.png",
      is_followed: false,
      video: "https://i.imgur.com/Kzvbeup.mp4",
      caption: "The new normal",
      likes: 10,
      comments: 2,
      timestamp: "2020-05-10T09:08:31.020Z",
      button_visible: true,
    },
    {
      id: 4,
      name: "Lana Del Mont",
      username: "lana_del_away",
      avatar: "https://i.imgur.com/jONHmE5.png",
      is_followed: true,
      video: "https://i.imgur.com/H9UX0Jm.mp4",
      caption: "Art is for everyone",
      likes: 231,
      comments: 20,
      timestamp: "2020-09-10T09:08:31.020Z",
      button_visible: true,
    },
    {
      id: 5,
      name: "Julian",
      username: "Julian",
      avatar: "https://i.imgur.com/EhPjJ9b.jpg",
      is_followed: true,
      video: "https://www.youtube.com/embed/IATOicvih5A",
      caption: "Great video! must watch!",
      likes: 9001,
      comments: 42,
      timestamp: "2018-09-10T09:10:31.020Z",
      button_visible: true,
    },
    {
      id: 6,
      name: "Julian",
      username: "totally not Julian",
      avatar: "https://i.imgur.com/EhPjJ9b.jpg",
      is_followed: true,
      video: "https://www.youtube.com/embed/E5RtsqP53ic",
      caption: "Watch this Video! so much too learn!",
      likes: 9002,
      comments: 42,
      timestamp: "2018-09-10T09:09:31.020Z",
      button_visible: true,
    },
  ];

  try {
    for (let i = 0; i < data.length; i++) {
      await posts.create(data[i].id, data[i]);
    }

    return {
      statusCode: 200,
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
