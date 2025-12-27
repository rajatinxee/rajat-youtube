import Comment from "./Comment";
import CommentList from "./CommentList";

const commentData = [
  {
    name: "Rajat",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
    replies: [
      {
        name: "Rajat",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
        replies: [
          {
            name: "Rajat",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
            replies: [
              {
                name: "Rajat",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
                replies: [],
              },
            ],
          },
          {
            name: "Rajat",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
            replies: [],
          },
          {
            name: "Rajat",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Rajat",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
    replies: [],
  },
  {
    name: "Rajat",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
    replies: [
      {
        name: "Rajat",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
        replies: [
          {
            name: "Rajat",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
            replies: [
              {
                name: "Rajat",
                text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
                replies: [
                  {
                    name: "Rajat",
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rajat",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
    replies: [
      {
        name: "Rajat",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
        replies: [
          {
            name: "Rajat",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique error molestiae ",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments: </h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
