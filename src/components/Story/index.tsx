interface StoryProps {
  title: string;
  content: string;
}

export default function Story({ title, content }: StoryProps) {
  return (
    <div className="h-140 font-pretendard">
      <div className="h-30 text-xl font-semibold ">{title}</div>
      <div className=" h-100 white-space:normal break-words text-overflow">
        {content}
      </div>
    </div>
  );
}
