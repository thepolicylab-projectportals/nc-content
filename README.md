# North Carolina Project Portal

A usage of
[gatsby-theme-project-portal](https://github.com/thepolicylab-projectportals/project-portal-theme)
for the State of North Carolina. 

## Quick Start Guide

Run the following command to install the required dependencies.

```shell
yarn install
```

For rapid development of new components or styling, run the following command.

```shell
yarn develop
```

Afterwards, run the following command to generate a production-ready version of your website. Certain gatsby node APIs only fire during the build process. While `develop` mode is fine for most cases, the final built site might act in a subtly different way. For more details, see https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/#differences-between-develop-and-build

```shell
yarn build
```

Once the build process is completed, run the following command to preview the production build locally.
```shell
yarn serve
```

## Accessing Decap CMS

Navigate to [static/admin/config.yml](./static/admin/config.yml) and make the following change locally:

```yaml
local_backend: true
```

In a separate terminal, spin up the `decap-server` by running the following command.

```shell
npx decap-server
```

### Enabling users to access Decap CMS
- Enabling login using GitHub or Google allows you to use SSO with either of those providers.
- Adding the users to the Identity Tab gives them the opportunity to login to the CMS at all, using either the SSO providers or by setting up an account on Netlify.
- Activating the Git gateway is necessary to allow the CMS to write back to the repository.
