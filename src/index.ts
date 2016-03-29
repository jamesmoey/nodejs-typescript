/**
 * Created by james on 16/03/16.
 */

import { Command } from 'commander';

(new Command('logCapture'))
    .version('0.0.1')
    .parse(process.argv);
;

console.log('Hello World');