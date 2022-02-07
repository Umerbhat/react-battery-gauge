

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BatteryGauge as Battery, Props } from '../src';

const meta: Meta = {
  title: 'Gauge/Battery/Customization',
  component: Battery,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Battery {...args} />;
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

export const ThinStroke = Template.bind({});

ThinStroke.args = {
  children: (
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
      </filter>
    </defs>
  ),
  orientation: 'vertical',
  customization: {
    batteryBody: {
      strokeColor: '#333',
      strokeWidth: 2,
      cornerRadius: 2,
    },
    batteryCap: {
      strokeColor: '#333',
      cornerRadius: 1,
      strokeWidth: 2,
      capToBodyRatio: 0.3,
    },
    batteryMeter: {
      outerGap: 1,
      noOfCells: 10,
    },
    readingText: {
      lowBatteryColor: 'red',
      fontSize: 16,
      style: { filter: 'url(#shadow)' },
    },
  },
};

export const VeryThinStroke = Template.bind({});

VeryThinStroke.args = {
  children: (
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
      </filter>
    </defs>
  ),

  value: 50,
  orientation: 'vertical',
  customization: {
    batteryBody: {
      strokeColor: '#333',
      strokeWidth: 1,
      cornerRadius: 2,
    },
    batteryCap: {
      strokeColor: '#333',
      cornerRadius: 1,
      strokeWidth: 1,
      capToBodyRatio: 0.3,
    },
    batteryMeter: {
      outerGap: 1,
      noOfCells: 10,
    },
    readingText: {
      lowBatteryColor: 'red',
      fontSize: 16,
      style: { filter: 'url(#shadow)' },
    },
  },
};


export const AllCustomized = Template.bind({});

AllCustomized.args = {
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