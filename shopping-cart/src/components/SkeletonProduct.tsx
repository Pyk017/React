import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

const SkeletonProducts = () => {
  return (
    <Card elevation={3} className="d-flex justify-content-between flex-column">
      <CardContent>
        <Skeleton
          variant="rectangular"
          width={290}
          height={200}
          className="my-2"
        />
        <Skeleton variant="rounded" className="my-2" />
        <Skeleton variant="rounded" width="80%" className="my-2" />
        <Skeleton variant="rounded" width="50%" className="my-2" />
        <Skeleton variant="rounded" height={30} className="mt-3" />
      </CardContent>
    </Card>
  );
};

export default SkeletonProducts;
