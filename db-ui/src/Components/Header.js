import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({
  title,
  onClickSort,
  onClickAdd,
  onClickRefresh,
  onClickSuccess,
  onClickFail,
}) => {
  return (
    <header className="header">
      <h1> {title}</h1>

      <Button text="Sort" onClick={onClickSort} />
      <Button text="Success" onClick={onClickSuccess} />
      <Button text="Fail" onClick={onClickFail} />
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
