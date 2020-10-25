export const storyModalViewData = () => {
  let data = {
    stories: [
      {
        type: "video",
        story_url: {
          url:
            "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
          width: 950,
          height: 540,
          size: 2030736,
        },
      },
      {
        type: "image",
        story_url: {
          url:
            "https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg",
        },
      },
      {
        type: "gif",
        story_url: {
          url: "https://media.giphy.com/media/3Y2Wbw9SWh17R6z9Kf/giphy.gif",
        },
      },
      {
        type: "text",
        story_url: {
          url: "https://dummyimage.com/600x400/000/fff.png&text=hello",
        },
      },
    ],
  };
  return data;
};

export const getPosts = () => {
  let posts_data = [
    {
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
      post: {
        type: "image",
        post_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
      },
    },
    {
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
      post: {
        type: "image",
        post_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
      },
    },
    {
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
      post: {
        type: "image",
        post_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
      },
    },
    {
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
      post: {
        type: "image",
        post_url:
          "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
      },
    },
  ];
  return posts_data;
};

// var VIDEOS = {
//   deer:
//     "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
//   snail:
//     "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
//   cat:
//     "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
//   spider:
//     "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
// };
