import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({
  title,
  onClickSort,
  onClickAdd,
  onClickRefresh,
  onClickSuccess,
  onClickFail,
  onClickReset,
  onClickCurrentFail,
  onClickCurrentSuccess,
}) => {
  return (
    <header className="header">
      <h1> {title}</h1>

      <Button text="Reset" onClick={onClickReset} />
      <Button text="Sort" onClick={onClickSort} />
      <Button text="All Successed" onClick={onClickSuccess} />
      <Button text="Current Successed" onClick={onClickCurrentSuccess} />
      <Button text="All Failed" onClick={onClickFail} />
      <Button text="Current Failed" onClick={onClickCurrentFail} />
    </header>
  );
};

/*
<Button text="Add" onClick={onClickAdd} />
<Button text="Refresh" onClick={onClickRefresh} />
*/

Header.defaultProps = {
  title: "SpaceX Launches Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
