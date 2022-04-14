import ExploreContainer from './ExploreContainer.vue';

export default {
  title: 'ExploreContainer',
  component: ExploreContainer,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ExploreContainer },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<ExploreContainer />',
});

export const Base = Template.bind({});
Base.args = {
};

export const Advance = Template.bind({});
Advance.args = {
};
