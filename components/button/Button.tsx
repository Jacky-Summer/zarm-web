import React, { Component } from 'react';
import ActivityIndicator from 'zarm/lib/activity-indicator';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonProps from './PropsType';
import ButtonGroup from './ButtonGroup';

ActivityIndicator.defaultProps.prefixCls = 'zw-activity-indicator';

class Button extends Component<ButtonProps> {
  static Group: typeof ButtonGroup;

  static defaultProps = {
    prefixCls: 'zw-button',
    htmlType: 'button',
    theme: 'default',
    shape: 'radius',
    ghost: false,
    size: null,
    loading: false,
    onClick: () => {},
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    theme: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'round', 'rect', 'radius']),
    size: PropTypes.oneOf(['xl', 'lg', 'sm', 'xs']),
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    ghost: PropTypes.bool,
  };

  render() {
    const {
      prefixCls, htmlType = 'button', type, size, block, shape, active, focus, disabled, ghost,
      loading, className, onClick, children, style, theme, href, target, ...others
    } = this.props;

    const classes = classnames(prefixCls, className, {
      [`${prefixCls}--${theme}`]: theme,
      [`${prefixCls}--${size}`]: size,
      [`${prefixCls}--block`]: block,
      [`${prefixCls}--${shape}`]: shape,
      [`${prefixCls}--active`]: active,
      [`${prefixCls}--focus`]: focus,
      [`${prefixCls}--disabled`]: disabled,
      [`${prefixCls}--loading`]: loading,
      [`${prefixCls}--ghost`]: ghost,
      [`${prefixCls}--link`]: href && target,
    });

    const textContent = loading
      ? (
        <>
          <ActivityIndicator style={{ top: 2 }} />
          <span>{children}</span>
        </>
      )
      : children;

    return (
      href
        ? (
          <a
            className={classes}
            href={disabled ? undefined : href}
            style={style}
            target={target}
            {...others}
            onClick={(e) => (!disabled && !loading) && onClick!(e)}
          >
            {textContent}
          </a>
        )
        : (
          <button
            type={htmlType}
            className={classes}
            style={style}
            disabled={disabled}
            onClick={(e) => (!disabled && !loading) && onClick!(e)}
            {...others}
          >
            {textContent}
          </button>
        )
    );
  }
}

export default Button;
