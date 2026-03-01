import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getProfile } from '../api/login';

const { Given } = createBdd();

Given('I have a valid token', async function () {
    const profile = await getProfile()
    console.log(profile);
expect(profile.name).toBe('Jhon');
});