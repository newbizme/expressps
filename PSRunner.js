var PSRunner = {
    send: function(commands) {
        var self = this;
        var results = [];
        var spawn = require("child_process").spawn;
        var child = spawn("powershell.exe", ["-Command", "-"]);

        child.stdout.on("data", function(data) {
            self.out.push(data.toString());
        });
        child.stderr.on("data", function(data) {
            self.err.push(data.toString());
        });

        commands.forEach(function(cmd){
            self.out = [];
            self.err = [];
            child.stdin.write(cmd+ '\n');
            results.push({command: cmd, output: self.out, errors: self.err});
        });
        child.stdin.end();
        return results;
    },
};

module.exports = PSRunner;
