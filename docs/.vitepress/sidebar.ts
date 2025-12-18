import fs from "node:fs";

// 根据 nav 生成侧边栏
const sidebars: Record<string, any> = {};
export function genSidebarByNavs(navs: Array<any>) {
  for (let i = 0; i < navs.length; i++) {
    const nav = navs[i];
    if (Array.isArray(nav.items)) {
      genSidebarByNavs(nav.items);
      continue;
    }
    if (nav.link.startsWith("http")) {
      continue;
    }
    if (nav.isAutoGenSidebar) {
      sidebars[nav.link] = autoGenSidebars(nav.link);
    }
  }
  return sidebars;
}

// 根据传入的路径数组生成侧边栏配置
export function sidebarGenerator(sidebarPaths: Array<string> = []) {
  const sidebars = {};
  for (const path of sidebarPaths) {
    sidebars[path] = autoGenSidebars(path);
  }
  return sidebars;
}

// 根据文件名生成序号(用于排序)
function getOrderBy(fileName: string) {
  const order = Number(fileName.slice(0, 2));
  if (Number.isNaN(order)) {
    return 0;
  }
  return order;
}

// 根据文件自动生成侧边栏(这个不是vite插件不会实时监听文件变化然后重启)
function autoGenSidebars(filePath: string) {
  const excludes = [".DS_Store"];
  const targetPath = `docs/${filePath}`.replace(/\/\//g, "/");
  const files = fs.readdirSync(targetPath);

  const result: Array<{ text: string; link: string; sort: number }> = [];
  for (let i = 0; i < files.length; i++) {
    const item = files[i];

    // only map .md files
    const targetFullPath = `${targetPath}/${item}`;
    if (!targetFullPath.endsWith(".md") || excludes.includes(item)) {
      continue;
    }
    if (item === "index.md") {
      result.push({
        text: "介绍",
        link: `${filePath}/index`,
        sort: -1,
      });
      continue;
    }

    // without ".md"
    const text = item.slice(0, -3);
    result.push({
      text,
      link: `${filePath}/${text}`,
      sort: getOrderBy(text),
    });
  }
  return result.sort((a, b) => a.sort - b.sort);
}
