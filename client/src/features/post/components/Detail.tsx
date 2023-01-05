import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { PostType } from "../postTypes";

type DetailProps = {
  post: PostType;
};

export default function Detail({ post }: DetailProps) {
  return (
    <div className="mb-5 space-x-3 border-b px-4 pb-3">
      <div className="flex flex-col space-y-1">
        <div className="flex flex-row items-center space-x-1">
          <img
            src="../../placeholder_profile.jpeg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <Link
            to={`/${post?.user.username}`}
            className="text-base font-bold text-grey-900 hover:underline"
          >
            @{post?.user.username}
          </Link>
          <span>·</span>
          <span className="text-sm text-grey-600">
            {dayjs(post?.user.createdAt).fromNow()}
          </span>
        </div>
        <div className="text-grey-900">{post?.content}</div>
        <img src={post.picture} alt="" className="rounded-md" />
        <div>Like</div>
      </div>
    </div>
  );
}
