import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BatteryGauge as Battery, Props } from '../src';

const meta: Meta = {
  title: 'Gauge/Battery/Sizes',
  component: Battery,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Battery {...args} />;


export const SmallSize = Template.bind({});

SmallSize.args = {
  children: (
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
      </filter>
    </defs>
  ),
  orientation: 'vertical',
  size: 150,
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

export const LargeSize = Template.bind({});

LargeSize.args = {
  children: (
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
      </filter>
    </defs>
  ),
  orientation: 'vertical',
  size: 500,
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


export const SizeAA = Template.bind({});

SizeAA.args = {
  children: (
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
      </filter>
    </defs>
  ),
  value: 80,
  aspectRatio: 0.28,
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
      fontSize: 10,
      style: { filter: 'url(#shadow)' },
    },
  },
};

export const SizeAAA = Template.bind({});

SizeAAA.args = {
  children: (
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
      </filter>
    </defs>
  ),
  value: 80,
  aspectRatio: 0.23,
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
      fontSize: 10,
      style: { filter: 'url(#shadow)' },
    },
  },
};

export const SizeAAAA = Template.bind({});

SizeAAAA.args = {
  children: (
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
      </filter>
    </defs>
  ),
  value: 80,
  aspectRatio: 0.19,
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
      fontSize: 10,
      style: { filter: 'url(#shadow)' },
    },
  },
};

export const SizeCDefault = Template.bind({});

SizeCDefault.args = {
  children: (
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
      </filter>
    </defs>
  ),
  value: 80,
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
      fontSize: 10,
      style: { filter: 'url(#shadow)' },
    },
  },
};

export const SizeD = Template.bind({});

SizeD.args = {
  children: (
    <defs>
      <filter id="shadow">
        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
      </filter>
    </defs>
  ),
  value: 80,
  aspectRatio: 0.56,
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
      fontSize: 10,
      style: { filter: 'url(#shadow)' },
    },
  },
};