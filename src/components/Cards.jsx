import Card from "./Card";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Cards = ({ pokes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10 mt-5">
      <TransitionGroup component={null}>
        {pokes.map((poke) => (
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Card key={poke.id} poke={poke} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Cards;
