import React from "react";

class InputPassUser extends React.Component {
  render() {
    const {
      name,
      value,
      inputClass,
      type,
      placeholder,
      handleOnChange,
      classValue
    } = this.props;
    return (
      <div className={classValue}>
        <input
          name={name}
          value={value}
          className={inputClass}
          type={type}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
      </div>
    );
  }
}

export default InputPassUser;
