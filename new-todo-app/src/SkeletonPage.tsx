import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonPage = () => {
  return (
    <div className="skeleton-container">
      {Array(5)
        .fill(0)
        .map((x: Number) => {
          return (
            <div className="d-flex justify-content-between align-items-center my-2 mx-3">
              <Skeleton
                style={{
                  width: "30rem",
                }}
              />
              <Skeleton
                circle={true}
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SkeletonPage;
