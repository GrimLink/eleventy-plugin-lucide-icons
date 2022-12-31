const pkg = require("./package.json");
const icons = require("lucide-static/icon-nodes.json");

module.exports = (eleventyConfig, options = {}) => {
    try {
        eleventyConfig.versionCheck(pkg["11ty"].compatibility);
    } catch (e) {
        console.log(
            `WARN: Eleventy Plugin (${pkg.name}) Compatibility: ${e.message}`
        );
    }

    const defaultOptions = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
    };
    const iconOptions = { ...defaultOptions, ...options };

    /**
     * Convert attributes object to string of HTML attributes.
     *
     * @param {Object} attrs
     * @returns {string}
     */
    function attrsToString(attrs) {
        return Object.keys(attrs)
            .map((key) => `${key}="${attrs[key]}"`)
            .join(" ");
    }

    /**
     * Create the svg content from Json to xml
     *
     * @param {Array} icon json array of the icon
     * @return {string[]} svg contents
     */
    function createSvg(icon) {
        return icon.map((path) => {
            const name = path[0];
            const values = path[1];
            return `<${name} ${attrsToString(values)} />`;
        });
    }

    eleventyConfig.addShortcode("lucide", (iconName, options = {}) => {
        if (!iconName) {
            throw new Error(`[${pkg.name}] the iconName must be specified`);
        }

        const safeIconName = iconName.toLowerCase();
        if (!icons[safeIconName]) {
            throw new Error(`[${pkg.name}] the iconName is not correct`);
        }

        const newOptions = {
            width:
                options.size ||
                options.width ||
                iconOptions.size ||
                iconOptions.width,
            height:
                options.size ||
                options.height ||
                iconOptions.size ||
                iconOptions.height,
            ...options,
        };
        delete newOptions.size;
        const svgProps = { ...iconOptions, ...newOptions };
        const svgContent = createSvg(icons[safeIconName]);
        const svg = `<svg ${attrsToString(svgProps)}>${svgContent.join(
            ""
        )}</svg>`;

        return svg;
    });
};
