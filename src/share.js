"use strict";

import React from "react";
import PropTypes from "prop-types";
import Utils from "./utils";

class Share extends React.Component {
  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    Utils.loadButtons();
  }
  render() {
    const { style, className, locale, type } = this.props;
    const url = Utils.fixUrl(this.props.url);

    return (
      <div
        style={Object.assign({}, { display: "none" }, style)}
        className={"line-it-button" + (className ? "" : " " + className)}
        data-lang={Utils.localeToLang(locale)}
        data-type={"share-" + type}
        data-url={url}
      />
    );
  }
}

Share.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  locale: PropTypes.oneOf(["en", "ja", "zh-TW", "th", "id"]),
  type: PropTypes.oneOf(["a", "b", "c", "d", "e"]),
  url: PropTypes.string
};

Share.defaultProps = {
  locale: "zh-TW",
  type: "c"
};

export default Share;
