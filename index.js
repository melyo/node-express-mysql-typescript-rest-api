const { spawn } = require('child_process')

const exec = (commands) => {
    commands.forEach(({cmd, args=null}) => {

        const child = spawn(cmd, args)

        child.stdout.setEncoding('utf8').on('data', (chunk) => {
            console.log(chunk)
        })

    })
}

if (process.env.NODE_ENV === 'production') {
    exec([
        {
            cmd: 'tsc'
        },
        {
            cmd: 'node',
            args: ['dist/app.js']
        }
    ])
} else {
    exec([ { cmd: 'nodemon' } ])
}
