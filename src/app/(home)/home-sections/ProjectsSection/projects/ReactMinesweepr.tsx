'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import Image from "next/image";

import SqueezeContainer from "@/components/SqueezeContainer";
import AppEntry from "../AppEntry";

import GameInProgressImage from '/public/react-minesweeper--game-in-progress.png';
import GameWonImage from '/public/react-minesweeper--win-state.png';
import GameLostImage from '/public/react-minesweeper--loss-state.png';
import GameMobileImage from '/public/react-minesweeper--mobile.jpg';

export default function ReactMinesweepr() {
  return (
    <AppEntry
      title="React Minesweeper"
      siteUrl="https://joe-lep.github.io/react-minesweeper/"
      githubUrl="https://github.com/joe-lep/react-minesweeper"
    >
      <div className="mb-16">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={48}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay
          loop
          centeredSlides
        >
          <SwiperSlide>
            <Image src={GameInProgressImage} alt="Game of React Minesweeper in progress" fill objectFit="contain" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={GameWonImage} alt="Game of React Minesweeper after player has won" fill objectFit="contain" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={GameLostImage} alt="Game of React Minesweeper after player has lost" fill objectFit="contain" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={GameMobileImage} alt="Game of React Minesweeper being played in mobile layout" fill objectFit="contain" />
          </SwiperSlide>
        </Swiper>
      </div>
      <SqueezeContainer>
        <p className="mb-4">
          A minesweeper clone built in React.
          Upon landing on the application page, the user is presented with a modal to either use a preset difficulty configuration that will set the width and height of the game&apos;s grid, as well as the number of mines.
          Alternatively, the user can specify a custom width, height, and mine count for the game.
          The user is also presented with a button to display the rules of the game as well as the controls for the applicaiton.
        </p>
        <p className="mb-4">
          Once the user has configured the game&apos;s difficulty and clicked the game start button, the game begins.
          The user can click on cells in the grid to switch them to a revealed state or right click to mark cells with flags. 
          The game enters a win state if the user reveals all non-mine cells, or it enters a loss state if the user clicks on a cell with a mine.
          A stopwatch component keeps track of the time the user spends playing the game, and it pauses whenever the game enters its win or loss state.
          The user can bring up the difficulty config modal at any time by pressing the New Game button to start a new game with a new layout.
        </p>
        <p>
          This applicaiton makes good use of React Hooks to manage complex game state and logical interactions.
          It is designed to be responsive with support for both desktop and mobile layouts, as well as both mouse and touch controls.
          It uses SASS for more complex styling rules.
        </p>
      </SqueezeContainer>
    </AppEntry>
  );
}
