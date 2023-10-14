import type { Meta, StoryObj } from '@storybook/react'
import BaseTemplate from './BaseTemplate'
import { mockBaseTemplateProps } from './BaseTemplate.mocks'

const meta = {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof BaseTemplate>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: mockBaseTemplateProps.base,
}
