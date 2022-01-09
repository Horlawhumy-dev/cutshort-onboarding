import HollowDotsSpinner from "./hollowDotSpinner";

export default function Loader() {
  return (
    <div className="min-h-screen justify-center flex items-center">
      <div className="">
        <HollowDotsSpinner color="#121212" />
      </div>
    </div>
  );
}
