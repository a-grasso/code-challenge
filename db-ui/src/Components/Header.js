import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1> {title}</h1>
      <Button text="Add" onClick={onClick} />
      <Button text="Refresh" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "SpaceX Launches Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};



export default Header;
