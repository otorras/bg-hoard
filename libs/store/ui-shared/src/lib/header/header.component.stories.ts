import { MatToolbarModule } from '@angular/material/toolbar';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HeaderComponent } from './header.component';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule],
    })
  ],
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    title:  'Board Game Hoard',
}
