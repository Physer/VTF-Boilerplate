# VTF-Boilerplate

## Introduction
Welcome to the VTF Boilerplate project!
This project contains a predefined set of step defintions to get your automated regression tests up and running.

This project is complimenting the [Valtech Testing Framework]("https://github.com/Physer/Valtech-Testing-Framework"). It's recommended you run these two side by side!

## Installation
Simply install the NPM package, either globally or in your project folder by running:
```
npm install [-g] vtf-boilerplate
```

## Usage
Once your package is installed, you can call the boilerplate from the command line.

Navigate to your project and execute the following command:
```
vtf-boilerplate --destination *location*
```

This command will copy the step defintions present in this project to your specified (relative) project folder. This also includes an example config file.

Keep in mind that this is merely the boilerplate, it will not contain any feature files or a way to execute tests. It will simply give you a set of step definitions you can use for low-entry automated testing.

## Configuration
The boilerplate will give you two configuration files.

1. config.js
2. options.js

### Config.js
The config.js file is an optional configuration file for the Valtech Testing Framework if you wish to override the default webdriver configuration. See the README of the [Valtech Testing Framework]("https://github.com/Physer/Valtech-Testing-Framework") repository.

### Options.js
The options.js file is a mandatory file which specifies your test base URL and the location of the feature files. This file is always required for running the Valtech Testing Framework. For more information, see the README of the [Valtech Testing Framework]("https://github.com/Physer/Valtech-Testing-Framework") repository.

## Customising step definitions
If you wish to customise these step definitions feel free to fork the repository.

Another option to customise this is to copy the files locally and name them uniquely (e.g. given.custom.js). This way you will retain the possibility to upgrade through npm.

You can also customise the predefined browser settings by changing the settings.js.

## Updating your step definitions
If you want to update the step definitions to the newest version, simply run the install command again:
```
npm install [-g] vtf-boilerplate
```
followed by executing the VTF command-line interface:"
```
vtf-boilerplate --destination *location*
```

Keep in mind that these commands will overwrite the step definitions! If you wish to retain your custom code, please take a look at [Updating your step definitions](#updating-your-step-defitions)

## Questions and comments
If you have any questions or issues with this project, please create an issue here at GitHub.