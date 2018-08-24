import React, {PureComponent} from 'react'
import {View, Text, PixelRatio} from 'react-native'
import PropTypes from 'prop-types'

export default class BiasCell extends PureComponent {
  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    leftText: PropTypes.string,
    rightText: PropTypes.string,
    biasColor: PropTypes.string,
    fontColor: PropTypes.string,
    reverse: PropTypes.bool,
    lineWidth: PropTypes.number,
    textStyle: PropTypes.object,
  }

  static defaultProps = {
    reverse: false,
    lineWidth: 1
  }
  render() {
    const {height, width, leftText, rightText, biasColor, fontColor, reverse,lineWidth,textStyle} = this.props
    const bias = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2))
    const asin = Math.asin(height / bias)
    return (
      <View style={{height, width}}>
        <Text style={{position: 'absolute', top: '20%', left: '10%', color: fontColor}}>{leftText}</Text>
        <View style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          width: '100%',
          height: lineWidth/PixelRatio.get(),
          backgroundColor: biasColor,
          transform: reverse ? [{rotateZ: `${asin}rad`}, {scale: bias / width}] : [{rotateZ: `-${asin}rad`}, {scale: bias / width}],
        }}
        />
        <Text style={{position: 'absolute', bottom: '20%', right: '10%', color: fontColor,...textStyle}}>{rightText}</Text>
      </View>
    )
  }
}
