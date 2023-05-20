
import child_process from "child_process";
import util from "util"
import gulp from "gulp"
import chalk from "chalk"

const promisify = util.promisify;
const exec = child_process.exec;

gulp.task('readme', async () => {

  const execAsync = promisify(exec);

  console.log(chalk.blue('Generating README'));

  const { stdout, stderr } = await execAsync('cd ../../ && npx @appnest/readme generate --config=docs.config.json');

  console.log(stdout);
  console.error(stderr);
});

gulp.task('default', gulp.series('readme'));
