## Contributing <a id='contributing'></a>

1. Clone this repo
2. Create a branch: `git checkout -b developer-name/component-name`
3. Make some changes
4. Test your changes
5. Push your branch and open a Pull Request
6. Request a reviewer, or let the team know
#
## Publishing <a id='publishing'></a>

Then every time you make an update to the library, republish it to npm:

1. Run `yarn publish-packages`
2. At root of repo run `yarn changeset` and follow instructions - this will automatically bump major/minor versions of packages and prepare them to be published. Any packages with `"private": true` in their `package.json` will not be published.
3. Run `yarn changeset publish`
