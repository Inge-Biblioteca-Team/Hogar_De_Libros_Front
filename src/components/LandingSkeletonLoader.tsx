
import LandingHome from "./LandingHome";
import LandingFooter from "./Layout/LandingFooter";


function LandingSkeletonLoader() {
  return (
    <>
    <LandingHome/>
    <main className="flex items-center gap-16 justify-center flex-col mt-5 mb-10 max-sm:gap-10 animate-pulse">
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
      <div className="w-full h-10 bg-gray-300 rounded-md"></div>
    </main>
    <LandingFooter />
  </>
  );
  
}

export default LandingSkeletonLoader
