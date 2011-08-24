var env = process.env.NODE_ENV || 'development';

servers['Core'].prototype.port = 8889;
servers['Core'].prototype.initialize = function(app) {
    this.port = app.config.port || this.port;
    this.enable('jsonp callback');
    this.use(new servers['Middleware'](app));
    this.use(new servers['Tile'](app));
    this.use(new servers['App'](app));
    if (env === 'development') this.use(new servers['Debug'](app));
    this.use(new servers['Route'](app));
    this.use(new servers['Asset'](app));
};
