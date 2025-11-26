import fs from "node:fs";

const sidebar = sidebarGenerator([
  // 目录名称
  "/base/",
  "/concurrency/",
]);
export default sidebar;

// 根据文件名生成序号(用于排序)
function getOrderBy(fileName: string) {
  const order = Number(fileName.slice(0, 2));
  if (Number.isNaN(order)) {
    return 0;
  }
  return order;
}

// 根据传入的路径数组生成侧边栏配置
function sidebarGenerator(sidebarPaths: Array<string> = []) {
  const sidebars = {};
  for (const path of sidebarPaths) {
    sidebars[path] = autoGenSidebars(path);
  }
  return sidebars;
}

// 根据文件自动生成侧边栏(这个不是vite插件不会实时监听文件变化然后重启)
function autoGenSidebars(filePath: string) {
  const excludes = [".DS_Store"];
  const targetPath = `docs/${filePath}`.replace(/\/\//g, "/");
  const files = fs.readdirSync(targetPath);

  const result: Array<{ text: string; link: string; sort: number }> = [];
  for (let i = 0; i < files.length; i++) {
    const item = files[i];
    if (excludes.includes(item)) {
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

    const fileStat = fs.statSync(`${targetPath}/${item}`);
    if (!fileStat.isFile()) {
      continue;
    }

    const text = item.slice(0, -3); // without ".md"
    result.push({
      text,
      link: `${filePath}/${text}`,
      sort: getOrderBy(text),
    });
  }
  return result.sort((a, b) => a.sort - b.sort);
}
