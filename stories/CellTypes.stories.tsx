import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BatteryGauge as Battery, Props } from '../src';

const meta: Meta = {
  title: 'Gauge/Battery/Types',
  component: Battery,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Battery {...args} />;

export const Plain = Template.bind({});

Plain.args = {};

export const BatteryCells = Template.bind({});

BatteryCells.args = {
  customization: {
    batteryMeter: {
      noOfCells: 10,
    },
  },
};