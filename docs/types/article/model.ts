export interface ArticleModel {
  frontMatter: {
    title: string; // 标题
    date: string; // 时间
    tags: string[]; // 标签
    description: string; // 描述
  };
  detailPath: string; // 详情地址
}
