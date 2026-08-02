import UploadBox from "../upload/UploadBox";

const Welcome = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 py-6 md:px-8">
      <div className="w-full max-w-xl lg:max-w-2xl">
        <UploadBox />
      </div>
    </div>
  );
};

export default Welcome;
