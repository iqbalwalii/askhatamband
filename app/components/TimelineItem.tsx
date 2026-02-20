interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export default function TimelineItem({
  year,
  title,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative pl-10 pb-12 border-l border-[#D4AF37]/40">
      <span className="absolute left-[-9px] top-1 w-4 h-4 bg-[#D4AF37] rounded-full" />

      <h4 className="text-[#D4AF37] font-semibold mb-1">
        {year}
      </h4>

      <h3 className="text-lg font-bold text-white mb-2">
        {title}
      </h3>

      <p className="text-[#CBD5E1] leading-relaxed">
        {description}
      </p>
    </div>
  );
}