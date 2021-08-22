import { Button } from './Button';

import '../styles/sidebar.scss';

interface GenreProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SidebarProps{
  genres: GenreProps[],
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

export function SideBar(props: SidebarProps) {
  // Complete aqui

  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }

  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {props.genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={props.selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}