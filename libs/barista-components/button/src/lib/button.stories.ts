import { text, number, boolean, select } from '@storybook/addon-knobs';
import { DtButton, DtColors } from './button';
import { DtButtonModule } from './button.module';

export default {
  title: 'DtButton'
};

const template = `<dt-button [color]="color">{{ buttonText }}</dt-button>`;

export const primary = () => ({
  moduleMetadata: {
    imports: [DtButtonModule]
  },
  component: DtButton,
  template,
  props: {
    disabled: boolean('Disabled', false),
    color: select('color', DtColors, DtColors.Red),
    buttonText: text('Button Text', 'My Button')
  }
});
