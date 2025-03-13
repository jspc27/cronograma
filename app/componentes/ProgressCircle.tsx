import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, G, Text as SvgText } from 'react-native-svg';

const ProgressCircle = ({ 
  size = 120,
  strokeWidth = 12,
  percentage = 75,
  color = "#4BC0C0",
  label = "",
  valueLabel = ""
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={`${size/2}, ${size/2}`}>
          <Circle
            cx={size/2}
            cy={size/2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke="#E6E6E6"
            fill="transparent"
          />
          <Circle
            cx={size/2}
            cy={size/2}
            r={radius}
            strokeWidth={strokeWidth}
            stroke={color}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </G>
        <SvgText
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          dy=".3em"
          fontSize="15"
          fill={color}
          fontWeight="bold"
        >
          {valueLabel}
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
    color: '#1D3557',
  },
});

export default ProgressCircle;