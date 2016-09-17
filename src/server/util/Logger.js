import colors from 'colors/safe';

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

class Logger {
    static i(text) {
        console.log(colors.info(text));
    }

    static w(text) {
        console.log(colors.warn(text));
    }

    static e(text) {
        console.log(colors.error(text));
    }

    static d(text) {
        console.log(colors.debug(text));
    }
}

export default Logger;