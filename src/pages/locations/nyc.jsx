import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import Link from "next/link";

const containerStyle = {
  width: "300px",
  height: "300px",
};

const center = {
  lat: 40.71427,
  lng: -74.00597,
};

const position = {
  lat: 40.71427,
  lng: -74.00597,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

const NYC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/nyc.jpg')",
          objectFit: "cover",
        }}
        className="w-full h-[30vh] bg-cover bg-center relative z-0 lg:h-[50vh]"
      >
        <div className="w-full h-full z-10 absolute bg-black opacity-50"></div>
        <div className="flex flex-col z-20 w-full h-full text-white absolute text-center justify-center items-center">
          <span className="uppercase text-tan font-lato sm:text-[24px]">
            Savoria
          </span>

          <h1 className="sm:text-[64px] text-[40px] sm:w-[60%] w-[80%] font-eb-garamond">
            New York City
          </h1>
          <p className="w-[80%] text-center font-lato sm:text-[24px]">
            A cozy and rustic location nestled in the heart of Manhattan's
            vibrant Greenwich Village.
          </p>
        </div>
      </div>

      <div className="px-[24px] flex flex-col sm:flex-row sm:gap-10 sm:justify-around lg:justify-center lg:gap-[100px]">
        <div>
          <h2 className="text-[32px] font-eb-garamond mt-5 mb-2">
            Location & Hours
          </h2>
          <div className="flex gap-4 justify-between sm:flex-col">
            <div className="flex flex-col font-lato">
              <h4 className="font-eb-garamond text-tan text-[20px]">Address</h4>
              <span>1234 Savoria Rd.</span>
              <span>New York, NY 12345</span>
              <span>+1 (267) 555-0126</span>
            </div>
            <div className="flex flex-col font-lato">
              <h4 className="font-eb-garamond text-tan text-[20px]">Hours</h4>
              <span>Mon: Closed</span>
              <span>Tue-Thu: 4 PM - 9 PM</span>
              <span>Fri-Sun: 4 PM - 10:30 PM</span>
            </div>
          </div>
          <Link
            href="http://www.opentable.com/"
            className="font-eb-garamond uppercase text-[18px] underline text-tan mt-5 inline-block"
          >
            Make a Reservation &#8594;
          </Link>
        </div>

        <div>
          <h2 className="text-[32px] font-eb-garamond mt-5 mb-2">Directions</h2>
          <div className="w-full flex justify-center">
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                {/* Child components, such as markers, info windows, etc. */}
                <MarkerF onLoad={onLoad} position={position} />
              </GoogleMap>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NYC;
