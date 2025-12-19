import type { TimelineSection } from '../../data/page-personal-landing';
import timelineSearch from '../../assets/timeline/timeline-search.svg';
import timelineJourney from '../../assets/timeline/timeline-journey.svg';
import timelineCreative from '../../assets/timeline/timeline-creative.svg';

interface Props {
  section: TimelineSection;
}

const timelineMedia = [
  {
    src: timelineSearch,
    alt: 'Abstract map with location pins.',
  },
  {
    src: timelineJourney,
    alt: 'Abstract route line through neighborhoods.',
  },
  {
    src: timelineCreative,
    alt: 'Abstract creative workspace with layered blocks.',
  },
];

export function TimelineSectionView({ section }: Props) {
  return (
    <div className="timeline">
      <h2>{section.title}</h2>
      <ol className="timeline-list">
        {section.items.map((item, index) => {
          const media = timelineMedia[index % timelineMedia.length];
          return (
            <li key={item.id} className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-item-header">
                  <h3>{item.title}</h3>
                  {item.organization && <span className="timeline-org">{item.organization}</span>}
                </div>
                <div className="timeline-meta">
                  <span>
                    {item.startDate} – {item.endDate ?? 'present'}
                  </span>
                  {item.location && <span className="timeline-location">{item.location}</span>}
                </div>
                {item.summary && <p className="timeline-summary">{item.summary}</p>}
                {item.highlights && (
                  <ul className="timeline-highlights">
                    {item.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
              {media && (
                <div className="timeline-media">
                  <img src={media.src} alt={media.alt} loading="lazy" />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
