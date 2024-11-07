import { Before, After } from '@cucumber/cucumber';

Before(async () => {
  console.log('Starting a new scenario...');
});

After(async () => {
  console.log('Scenario finished.');
});
