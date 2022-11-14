import Button from "./components/Button";
import GIF from "./components/GIF";
import Header from "./components/Header";
import Input from "./components/Input";
import "./Skeleton.css";

const TagSkeleton = () => {
  return (
    <div>
      <Header />
      <GIF />
      <Input />
      <Button />
    </div>
  );
};

export default TagSkeleton;
