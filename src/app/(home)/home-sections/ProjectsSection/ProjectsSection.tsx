import SectionHeader from '@/components/SectionHeader';
import { NavigableSection } from '@/components/section-navigation';
import SectionSubHeader from '@/components/SectionSubHeader';
import LibraryEntry from './LibraryEntry';
import SqueezeContainer from '@/components/SqueezeContainer';
import AppEntry from './AppEntry';
import Carousel from '@/components/Carousel';

import MinesweeperInProgress from '/public/react-minesweeper--game-in-progress.png';
import MinesweeperWon from '/public/react-minesweeper--win-state.png';
import MinesweeperLost from '/public/react-minesweeper--loss-state.png';

const images = [
  {
    imageData: MinesweeperInProgress,
    alt: 'A game of React Minesweeper being played',
  },
  {
    imageData: MinesweeperWon,
    alt: 'A game of React Minesweeper after the player has won',
  },
  {
    imageData: MinesweeperLost,
    alt: 'A game of React Minesweeper after the player has lost',
  },
];

export default function ProjectsSection() {
  return (
    <NavigableSection id="projects">
      <SectionHeader>Projects</SectionHeader>
      <SectionSubHeader>Web Applications</SectionSubHeader>
      <AppEntry
        title="React Minesweeper"
        siteUrl="https://joe-lep.github.io/react-minesweeper/"
        githubUrl="https://github.com/joe-lep/react-minesweeper"
      >
        <Carousel images={images} />
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
      <SectionSubHeader>Libraries</SectionSubHeader>
      <LibraryEntry
        title="React Dialog Manager"
        githubUrl="https://github.com/joe-lep/react-dialog-manager"
        npmUrl="https://www.npmjs.com/package/@joe-lep/react-dialog-manager"
      >
        <SqueezeContainer>
          <p>
            Lightweight library to simplify and streamline dialog workflow in
            React. Users can add and remove Dialogs/Modals directly to the
            Virtual DOM from code without needing to implement them in the
            page&apos;s JSX ahead of time. More importantly, the manager gives
            users the capability to add submission to dialogs, which will be
            passed to the code that opened the modal in a promise-like callback.
            This makes it easy to add forms to modals that are opened
            conditionally and then handle the form data in the same function or
            to open simple confirmation dialogs.
          </p>
        </SqueezeContainer>
      </LibraryEntry>
    </NavigableSection>
  );
}
