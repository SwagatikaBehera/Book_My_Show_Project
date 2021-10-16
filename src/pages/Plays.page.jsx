import React from "react";

// Component
import Poster from "../components/Poster/poster.component";
import PlaysFilters from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto w-full px-4">
        <div className="w-full lg:flex flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Plays in Bhubaneswar</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 my-4 lg:w-3/12">
                <Poster
                  original_title="Digital Theatre Fest By EnActe, Rage & Bookmyshow"
                  subtitle="Multiple Venues"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/12 p-6">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlaysFilters
                title="Date"
                tags={["Today", "Tommorow", "This Weekend"]}
              />
            </div>
            <div>
              <PlaysFilters
                title="Language"
                tags={["Tamil", "English", "Hindi", "Gujarati"]}
              />
            </div>
            <div>
              <PlaysFilters
                title="Categories"
                tags={["Theatre", "Online Streaminng Plays"]}
              />
            </div>
            <div>
              <PlaysFilters
                title="Genres"
                tags={[
                  "Drama",
                  "Comedy",
                  "Historical",
                  "Online Streaming Plays",
                  "Adaptation",
                ]}
              />
            </div>
            <div>
              <PlaysFilters
                title="More Filters"
                tags={["Online Streaming", "Kids Allowed", "This Weekend"]}
              />
            </div>
            <div>
              <PlaysFilters
                title="Price"
                tags={["Free", "0-500", "501-2000", "Above 2000"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
