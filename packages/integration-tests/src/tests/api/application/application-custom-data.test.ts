import { ApplicationType } from '@logto/schemas';

import {
  createApplication,
  deleteApplication,
  getApplication,
  patchApplicationCustomData,
  updateApplication,
} from '#src/api/application.js';

describe('application custom data API', () => {
  it('should patch application custom data successfully', async () => {
    const applicationName = 'test-create-app';
    const applicationType = ApplicationType.SPA;
    const application = await createApplication(applicationName, applicationType);

    const customData = { key: 'value' };
    const result = await patchApplicationCustomData(application.id, customData);

    expect(result.key).toEqual(customData.key);

    const fetchedApplication = await getApplication(application.id);

    expect(fetchedApplication.customData.key).toEqual(customData.key);

    await deleteApplication(application.id);
  });

  it('should put application custom data successfully', async () => {
    const applicationName = 'test-create-app';
    const applicationType = ApplicationType.SPA;
    const application = await createApplication(applicationName, applicationType);
    const customData = { key: 'foo' };

    const result = await patchApplicationCustomData(application.id, customData);

    expect(result.key).toEqual(customData.key);

    await updateApplication(application.id, {
      customData: { key: 'bar' },
    });

    const fetchedApplication = await getApplication(application.id);
    expect(fetchedApplication.customData.key).toEqual('bar');
  });
});
