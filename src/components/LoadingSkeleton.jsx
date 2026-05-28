export default function LoadingSkeleton() {
  return (
    <>
      {[...Array(12)].map((_, index) => (
        <div
          className="skeleton-card"
          key={index}
        >
          <div className="skeleton-image"></div>
          <div className="skeleton-info">
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
          </div>
        </div>
      ))}
    </>
  );
}