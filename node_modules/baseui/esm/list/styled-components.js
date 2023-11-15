function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled, expandBorderStyles } from '../styles/index.js';
import { artworkSizeToValue } from './utils.js';
import { SHAPE } from './constants.js';
export var StyledRoot = styled('li', function (_ref) {
  var $theme = _ref.$theme,
      $shape = _ref.$shape;
  return {
    alignItems: 'center',
    backgroundColor: $theme.colors.backgroundPrimary,
    display: 'flex',
    listStyleType: 'none',
    width: '100%',
    borderTopLeftRadius: $shape === SHAPE.ROUND ? $theme.borders.radius400 : 0,
    borderTopRightRadius: $shape === SHAPE.ROUND ? $theme.borders.radius400 : 0,
    borderBottomLeftRadius: $shape === SHAPE.ROUND ? $theme.borders.radius400 : 0,
    borderBottomRightRadius: $shape === SHAPE.ROUND ? $theme.borders.radius400 : 0,
    overflow: 'hidden'
  };
});
StyledRoot.displayName = "StyledRoot";
export var StyledContent = styled('div', function (_ref2) {
  var $mLeft = _ref2.$mLeft,
      $sublist = _ref2.$sublist,
      $theme = _ref2.$theme;
  return _objectSpread(_objectSpread({}, expandBorderStyles($theme.borders.border100)), {}, {
    alignItems: 'center',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderLeftStyle: 'none',
    display: 'flex',
    flexGrow: 1,
    minHeight: $sublist ? 'initial' : $theme.sizing.scale1600,
    justifyContent: 'space-between'
  }, $theme.direction === 'rtl' ? {
    paddingLeft: $theme.sizing.scale600,
    marginRight: $mLeft ? $theme.sizing.scale600 : null
  } : {
    paddingRight: $theme.sizing.scale600,
    marginLeft: $mLeft ? $theme.sizing.scale600 : null
  });
});
StyledContent.displayName = "StyledContent";
export var StyledEndEnhancerContainer = styled('div', {
  alignItems: 'center',
  display: 'flex'
});
StyledEndEnhancerContainer.displayName = "StyledEndEnhancerContainer";
export var StyledArtworkContainer = styled('div', function (_ref3) {
  var $artworkSize = _ref3.$artworkSize,
      $sublist = _ref3.$sublist,
      $theme = _ref3.$theme;
  var sizeValue = typeof $artworkSize === 'number' ? $artworkSize : artworkSizeToValue($artworkSize, Boolean($sublist));

  if (sizeValue > 36) {
    return {
      alignItems: 'center',
      display: 'flex',
      paddingLeft: $theme.sizing.scale600,
      paddingRight: $theme.sizing.scale600
    };
  }

  return {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: $theme.sizing.scale1600
  };
});
StyledArtworkContainer.displayName = "StyledArtworkContainer";
export var StyledLabelContent = styled('p', function (_ref4) {
  var $theme = _ref4.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.LabelMedium), {}, {
    color: $theme.colors.contentPrimary,
    marginTop: 0,
    marginBottom: 0
  });
});
StyledLabelContent.displayName = "StyledLabelContent";
export var StyledLabelDescription = styled('p', function (_ref5) {
  var $theme = _ref5.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.ParagraphSmall), {}, {
    color: $theme.colors.contentPrimary,
    marginTop: 0,
    marginBottom: 0
  });
});
StyledLabelDescription.displayName = "StyledLabelDescription";
export var StyledLabelSublistContent = styled('p', function (_ref6) {
  var $theme = _ref6.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.LabelMedium), {}, {
    color: $theme.colors.contentPrimary,
    marginTop: $theme.sizing.scale500,
    marginBottom: $theme.sizing.scale500
  });
});
StyledLabelSublistContent.displayName = "StyledLabelSublistContent";
export var StyledHeadingRoot = styled('div', function (_ref7) {
  var $theme = _ref7.$theme;
  return {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: $theme.colors.backgroundPrimary,
    overflow: 'hidden',
    minHeight: $theme.sizing.scale1600
  };
});
StyledHeadingRoot.displayName = "StyledHeadingRoot";
export var StyledHeadingContent = styled('div', function (_ref8) {
  var $theme = _ref8.$theme;
  return _objectSpread({
    flexGrow: 1,
    width: '100%',
    minWidth: 0,
    paddingTop: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale300
  }, $theme.direction === 'rtl' ? {
    paddingLeft: $theme.sizing.scale600,
    marginRight: $theme.sizing.scale600
  } : {
    paddingRight: $theme.sizing.scale600,
    marginLeft: $theme.sizing.scale600
  });
});
StyledHeadingContent.displayName = "StyledHeadingContent";
export var StyledHeadingContentRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
});
StyledHeadingContentRow.displayName = "StyledHeadingContentRow";
export var StyledHeadingMainHeading = styled('p', // $FlowFixMe - suppressing due to webkit properties
function (_ref9) {
  var _ref9$$maxLines = _ref9.$maxLines,
      $maxLines = _ref9$$maxLines === void 0 ? 1 : _ref9$$maxLines,
      $theme = _ref9.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.HeadingSmall), {}, {
    color: $theme.colors.contentPrimary,
    marginTop: 0,
    marginBottom: 0,
    marginRight: $theme.sizing.scale600,
    display: '-webkit-box',
    '-webkit-line-clamp': $maxLines,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden'
  });
});
StyledHeadingMainHeading.displayName = "StyledHeadingMainHeading";
export var StyledHeadingSubHeading = styled('p', // $FlowFixMe - suppressing due to webkit properties
function (_ref10) {
  var _ref10$$maxLines = _ref10.$maxLines,
      $maxLines = _ref10$$maxLines === void 0 ? 1 : _ref10$$maxLines,
      $theme = _ref10.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.ParagraphLarge), {}, {
    color: $theme.colors.contentPrimary,
    marginTop: 0,
    marginBottom: 0,
    marginRight: $theme.sizing.scale600,
    display: '-webkit-box',
    '-webkit-line-clamp': $maxLines,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden'
  });
});
StyledHeadingSubHeading.displayName = "StyledHeadingSubHeading";
export var StyledHeadingEndEnhancerContainer = styled('div', function (_ref11) {
  var $isText = _ref11.$isText,
      $theme = _ref11.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.LabelMedium), {}, {
    display: 'flex',
    alignItems: $isText ? 'flex-end' : 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  });
});
StyledHeadingEndEnhancerContainer.displayName = "StyledHeadingEndEnhancerContainer";
export var StyledHeadingEndEnhancerDescriptionContainer = styled('p', function (_ref12) {
  var $theme = _ref12.$theme;
  return _objectSpread(_objectSpread({}, $theme.typography.ParagraphMedium), {}, {
    marginTop: 0,
    marginBottom: 0,
    display: 'flex',
    alignItems: 'flex-start',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  });
});
StyledHeadingEndEnhancerDescriptionContainer.displayName = "StyledHeadingEndEnhancerDescriptionContainer";