# django-vue-webpack

## Project setup
```
yarn install
yarn serve
```
in another terminal:
```
python3 -m venv venv
source venv/bin/activate
pip install django
python manage.py runserver
```

## Templates

`index.html` is build by extending `vue-index.html`, which is injected with all of the `js` chunks. `vue-index.html` extends `base.html` to include the basic HTML tags.

## Vue config

`vue.config.js` has been adjusted to write to its output into the `dashboards/static` directory, so Django can serve the static files in development and so they will be collected by `collectstatic` when preparing for production. This means that it will be included in the self-contained Django `app` that can be installed in different Django projects directly.

Both `assetsDir` and `indexPath` are used to get the other assets and the `index.html` files, respectively, to the correct destination directories.

`filenameHasing` is set to false, as Django takes care of this part.

`writeToDisk` is set to `true` for the devServer so `yarn serve` allows the Django server to serve the webapp without having to explicitly build for production.


