import React from "react";

const Banner = () => {
  return (
    <div className=" flex h-screen items-center">
      <div>
        <h1 className="lg:text-5xl text-4xl font-bold lg:w-3/4 pb-4 leading-[50px]">
          Embrace the Majesty of Play.Discover Majestic Toys Wonderland at The
          Imperial Toys.
        </h1>
        <p className=" lg:w-3/4 text-lg font-light pb-4">
          Step into a World of Wonder and Imagination at The Imperial Toys.
          Where the Magic of Childhood is Unleashed, and Smiles Take Flight.
          Indulge in a Captivating Collection of Toys that Ignite Creativity,
          Nurture Curiosity, and Inspire Limitless Adventures. From Classic
          Favorites to Cutting-Edge Marvels, Our Kingdom of Play Offers Endless
          Delight for Kids of All Ages.
        </p>
        <button className="btn bg-pink-600 hover:bg-pink-500 border-0 text-lg">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
