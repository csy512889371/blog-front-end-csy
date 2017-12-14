export function getMenuItems(moduleData, locale) {
    const menuMeta = moduleData.map(item => item.meta);
    const menuItems = {};
    menuMeta.sort(
        (a, b) => (a.order || 0) - (b.order || 0)
    ).forEach((meta) => {
        const category = (meta.category && meta.category[locale]) || meta.category || 'topLevel';
        if (!menuItems[category]) {
            menuItems[category] = {};
        }

        const type = meta.type || 'topLevel';
        if (!menuItems[category][type]) {
            menuItems[category][type] = [];
        }

        menuItems[category][type].push(meta);
    });
    return menuItems;
}

export function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}