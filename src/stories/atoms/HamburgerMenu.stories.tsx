import HamburgerMenu from '@src/components/atoms/HamburgerMenu/HamburgerMenu';
import type { HamburgerMenuProps } from '@src/components/atoms/HamburgerMenu/HamburgerMenu';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof HamburgerMenu> = {
  title: 'UI/Atoms/HamburgerMenu',
  component: HamburgerMenu,
  parameters: {
    componentSubtitle: 'HamburgerMenu',
  },
  argTypes: {
    type: {
      options: ['type-1', 'type-2', 'type-3'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
};

const hamburgerMenu = (args: HamburgerMenuProps): JSX.Element => {
  return <HamburgerMenu {...args} />;
};

export const HamburgerMenuStory: StoryFn<HamburgerMenuProps> =
  hamburgerMenu.bind({});
HamburgerMenuStory.args = {
  active: false,
  type: 'type-1',
  size: 'md',
};

export default meta;
