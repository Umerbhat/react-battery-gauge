import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BatteryGauge as Battery, Props } from '../src';

const meta: Meta = {
  title: 'Gauge/Battery',
  component: Battery,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Battery {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Basic = Template.bind({});

Basic.args = {};

export const OrientationVertical = Template.bind({});

OrientationVertical.args = { orientation: 'vertical' };

export const BatteryCells = Template.bind({});

BatteryCells.args = {
  customization: {
    batteryMeter: {
      noOfCells: 10,
    },
  },
};

export const ReadingTextShadow = Template.bind({});

ReadingTextShadow.args = {
  children: (
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
      </filter>
    </defs>
  ),
  customization: {
    batteryMeter: {
      noOfCells: 10,
    },
    readingText: {
      style: { filter: 'url(#shadow)' },
    },
  },
};

export const Animated = Template.bind({});

Animated.args = {
  animated: true,
};

export const Customized = Template.bind({});

Customized.args = {
  customization: {
    batteryBody: {
      fill: 'silver',
      strokeColor: 'silver',
      strokeWidth: 2,
    },
    batteryCap: {
      fill: 'silver',
      strokeColor: 'silver',
      cornerRadius: 3,
      strokeWidth: 0,
      capToBodyRatio: 0.4,
    },
    batteryMeter: {
      outerGap: 0,
      gradFill: [
        { color: 'red', offset: 0 },
        { color: 'orange', offset: 15 },
        { color: 'green', offset: 90 },
      ],
    },
    readingText: {
      lightContrastColor: 'purple',
      darkContrastColor: 'yellow',
      lowBatteryColor: 'red',
      fontFamily: 'Arial',
      fontSize: 12,
    },
  },
};
