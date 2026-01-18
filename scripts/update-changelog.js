const fs = require("fs");

const changelogFile = "CHANGELOG.md";
const lineToFind = "## Unreleased";
const packageJsonFile = "package.json";

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

fs.readFile(packageJsonFile, "utf8", (err, packageData) => {
    if (err) {
        console.error(`Error reading ${packageJsonFile}:`, err);
        return;
    }

    const packageJson = JSON.parse(packageData);
    const version = packageJson.version;
    const lucideVersion = packageJson.dependencies["lucide-static"].replace(
        "^",
        ""
    ); //remove caret if it exists
    const currentDate = formatDate(new Date());

    const newContent = `## ${version} - ${currentDate}\n### Changed\n- updated lucide-static to v${lucideVersion}`;

    fs.readFile(changelogFile, "utf8", (err, changelogData) => {
        if (err) {
            console.error(`Error reading ${changelogFile}:`, err);
            return;
        }

        const lines = changelogData.split("\n");
        let foundIndex = -1;

        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim() === lineToFind) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex !== -1) {
            lines.splice(foundIndex + 1, 0, "", newContent);
            const updatedContent = lines.join("\n");

            fs.writeFile(changelogFile, updatedContent, "utf8", (err) => {
                if (err) {
                    console.error(`Error writing to ${changelogFile}:`, err);
                    return;
                }
                console.log(`New content added to ${changelogFile}`);
            });
        } else {
            console.log(`${lineToFind} not found in ${changelogFile}`);
        }
    });
});
