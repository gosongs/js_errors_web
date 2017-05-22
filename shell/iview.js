var shell = require('shelljs');

var PATH = {
  iView: '/Users/go_songs/Documents/jason_workspace/js_errors/iview',
  jsErrWeb: '/Users/go_songs/Documents/jason_workspace/js_errors/js_errors_web'
};

var ThrowErr = function (msg) {
  shell.echo(msg);
  shell.exit(1);
};

shell.cd(PATH.iView);
if (shell.exec('git pull').code !== 0) {
  ThrowErr('ERROR: Git pull failed');
}

if(shell.exec('npm run dist').code === 0){
  if (shell.exec('npm run dist:prod').code !== 0) {
    ThrowErr('ERROR: Dist failed');
  }
}

// replace iView
shell.cp('-Rf', 'dist', PATH.jsErrWeb + '/node_modules/iView');
console.log('------- iView updated -------');

