interface StoryProps {
  title: string;
  content?: string;
}

export default function Story({ title, content }: StoryProps) {
  return (
    <div className="h-140">
      <div className="h-20 font-semibold text-overflow">{title}</div>
      <div className=" h-100 leading-16 font-light white-space:normal break-words text-overflow">
        {content}
      </div>
    </div>
  );
}
