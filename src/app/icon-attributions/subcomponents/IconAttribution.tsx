import { SvgComponent } from '@/types/icons';

export interface IconAttributionProps {
  Icon: SvgComponent;
  title: string;
  author: string;
  license: string;
  sourceUrl: string;
}

export default function IconAttribution({
  Icon,
  title,
  author,
  license,
  sourceUrl,
}: IconAttributionProps) {
  return (
    <article className="flex flex-row gap-8">
      <div className="p-2">
        <Icon height={80} width={80} fill="currentColor" />
      </div>
      <div className="flex-flex-col gap-2">
        <h3 className="text-xl">{title}</h3>
        <div>
          Author: <span>{author}</span>
        </div>
        <div>
          License: <span>{license}</span>
        </div>
        <div className="text-blue-500 underline">
          <a href={sourceUrl} target="_blank">
            {sourceUrl}
          </a>
        </div>
      </div>
    </article>
  );
}
