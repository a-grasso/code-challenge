import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({
  title,
  onClickSort,
  onClickReset,
  onClickCurrentFail,
  onClickCurrentSuccess,
  onShowFilter,
}) => {
  return (
    <header className="header">
      <h1> {title}</h1>

      <Button text="Reset" onClick={onClickReset} />
      <Button text="Sort" onClick={onClickSort} />
      <Button text="Succeeded" onClick={onClickCurrentSuccess} />
      <Button text="Failed" onClick={onClickCurrentFail} />
      <Button text="Filter" onClick={onShowFilter} />
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
