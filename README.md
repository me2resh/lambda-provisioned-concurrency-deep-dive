# lambda-provisioned-concurrency-deep-dive

This sample project is to look into the behaviour of cold start with different provisioned concurrency configurations.

The project contains 4 lambda function:

- No provisioned concurrency
- Provisioned concurrency at all times.
- Provisioned concurrency set for certain hours.
- Provisioned concurrency that scales with urilization.

There is also 4 Cloudwatch dashboards created for the project.
