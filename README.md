# Contentful-Gridsome Localization Investigation

## Purpose

The goal of this project is to explore the integration of Contentful Localization with Gridsome to build multi-language static sites.

## Setup
From the base directory:
`npm install --global @gridsome/cli`
`npm i`

then either `gridsome build` (build static site) or `gridsome develop` (start local development server)

## Plugins
 The plugins currently being used to perform this integration are @gridsome/source-contentful and gridsome-plugin-i18n.

 ## Challenge
As per the Contentful documentation (https://www.contentful.com/developers/docs/references/graphql/#/reference/locale-handling) we should be able to specify locale in our graphQL queries on collections, single entities and entry fields. If a locale is not specified, the default locale of the space is used. 

However, as per this thread (https://github.com/gridsome/gridsome/issues/748), the source-contentful plugin does not include locale features and thus is only able to retrieve data in from the default locale of the space. 

To address this issue, a user on GitHub(@helloiamlukas) appears to have added basic locale features (https://github.com/gridsome/gridsome/pull/1331). However, I have still been unable to receive any non-default locale data in my queries (potentially due to errors in implementation). This user appears to have expanded on the features in a second pull request which has not yet been merged into the main project (https://github.com/gridsome/gridsome/pull/1341). Other users in this thread confirm that his update works for them along side gridsome-plugin-i18n, however swapping the index.js file from his fork into this project breaks the gridsome build/develop processes. In the same thread (https://github.com/gridsome/gridsome/pull/1341#issuecomment-761831242), he mentions that there is a bug in the gridsome-plugin-i18n plugin, and has provided a forked version.

Once the localized data has been successfully received by gridsome, the gridsome-plugin-i18n should be able to build the static file structure for either multi or single language builds via swapping gridsome.config.js files. 