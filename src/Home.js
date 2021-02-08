import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://img1.10bestmedia.com/Images/Photos/379809/GettyImages-904960682_54_990x660.jpg"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://cdn.houseplansservices.com/content/oanrn2hpo2onko9gr94416qock/w991.jpg?v=3"
          title="Entire Homes"
          description="Comfortable private places, with rooms for friends and family. "
        />
      </div>

      <div className="home__section">
        <Card
          src="https://www.mountainliving.com/content/uploads/data-import/315524ca/hotybed.jpg"
          title="3 Bedroom Flat in Palampur"
          description="Superhost with a stunning view of the mountains in Palampur"
          price="$130/Night"
        />
        <Card
          src="https://images.wallpaperscraft.com/image/penthouse_sofa_window_style_interior_75612_800x600.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="$350/Night"
        />
        <Card
          src="https://i.pinimg.com/originals/4b/a2/4b/4ba24bc3401e785212057b2c88fe4089.jpg"
          title="1 Bedroom Apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="$70/Night"
        />
      </div>
    </div>
  );
}

export default Home;
