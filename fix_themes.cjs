const fs = require('fs');
const path = require('path');

function walk(dir, call) {
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        if (file.includes('.next') || file.includes('node_modules')) return;
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) walk(file, call);
        else call(file);
    });
}

walk('/Users/haldwani/Documents/Working/preet-tech-next-gen-digital-agency 2/app', (path) => {
    if (!path.endsWith('.tsx')) return;
    let text = fs.readFileSync(path, 'utf8');
    let changed = false;

    if (text.includes("classList.add('dark')") || text.includes("classList.remove('dark')") || text.includes("classList.contains('dark')")) {
        text = text.replace(/document\.documentElement\.classList\.add\('dark'\);?/g, '/* handled by next-themes */');
        text = text.replace(/document\.documentElement\.classList\.remove\('dark'\);?/g, '/* handled by next-themes */');
        text = text.replace(/document\.documentElement\.classList\.contains\('dark'\)/g, 'false');

        changed = true;
    }

    if (changed) {
        fs.writeFileSync(path, text);
        console.log("Updated", path);
    }
});

walk('/Users/haldwani/Documents/Working/preet-tech-next-gen-digital-agency 2/components', (path) => {
    if (!path.endsWith('.tsx')) return;
    let text = fs.readFileSync(path, 'utf8');
    let changed = false;

    if (text.includes("classList.add('dark')") || text.includes("classList.remove('dark')") || text.includes("classList.contains('dark')")) {
        text = text.replace(/document\.documentElement\.classList\.add\('dark'\);?/g, '/* handled by next-themes */');
        text = text.replace(/document\.documentElement\.classList\.remove\('dark'\);?/g, '/* handled by next-themes */');
        text = text.replace(/document\.documentElement\.classList\.contains\('dark'\)/g, 'false');

        changed = true;
    }

    if (changed) {
        fs.writeFileSync(path, text);
        console.log("Updated", path);
    }
});
